import Router from 'next/router'
import { removeCookie } from '../util/cookies';
import { useEffect } from 'react';

export default function Login() {
    useEffect(_=>{
        removeCookie('token');
        Router.push('/');
    });
    return <div />;
}