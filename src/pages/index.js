import Layout from '../components/Layout';

export default function Index() {
    return (
        <>
            <Layout pageTitle="Tanta University" pageDescription="Tanta University">
                <main>
                    Welcome in Home Page
                </main>
            </Layout>
            <style jsx>{`
                main {
                    text-align: center;
                    padding-top:70px;
                    font-size: 25px;
                }
            `}</style>
        </>
    );
}
