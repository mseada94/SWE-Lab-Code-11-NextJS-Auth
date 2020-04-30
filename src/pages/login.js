import { useToasts } from 'react-toast-notifications';
import axios from 'axios';
import Router from 'next/router'
import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';
import { getCookieFromServer, setCookie } from '../util/cookies';

export default function Login() {
    const { addToast } = useToasts();
    const handleLogin = async (username, password) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth', {
                username,
                password
            });
            addToast("Login Successfully", { 
                appearance: 'success',
                autoDismiss: true
            });
            setCookie('token', res.data.data.token);
            Router.push('/');

        } catch (error) {
            addToast(error.response.data.message, {
                appearance: 'error',
                autoDismiss: true
            });
        }   
    };
    return (
        <Layout pageTitle="Login Page" pageDescription="Tanta University">
            <LoginForm onLogin={handleLogin}/>
        </Layout>
    );
}

export async function getServerSideProps({req, res}) {
    const token = getCookieFromServer('token', req);
    if(token)
        res.writeHead(302, { Location: '/' }).end();
    return {props:{}};
}