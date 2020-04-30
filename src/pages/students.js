import { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import StudentTable from '../components/StudentTable';
import Student from '../components/Student';
import { getCookieFromServer } from '../util/cookies';

export default function Students({data = []}) {
    let [students, setStudents] = useState(data);
    const studentItems = students.map(student => (
        <Student
          key={student._id}
          {...student}
        />
    ));
    return (
        <>
            <Layout pageTitle="Student" pageDescription="Tanta University" login={true}>
                <main>
                    <StudentTable>
                        {studentItems}
                    </StudentTable>
                </main>
            </Layout>
            <style jsx>{`
                main {
                    text-align: center;
                    padding-top:20px;
                }
            `}</style>
        </>
    );
}

export async function getServerSideProps({req, res}) {
    const token = getCookieFromServer('token', req);
    if(!token){
        res.writeHead(302, { Location: '/login' }).end();
        return { props: {} }
    }
    const url = `http://localhost:5000/api/students/`;
    const result = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return { props: { data: result.data.data } }
}