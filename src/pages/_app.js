import { ToastProvider } from 'react-toast-notifications';

export default function MyApp({ Component, pageProps }) {
    return (
        <ToastProvider>
            <Component {...pageProps} />
        </ToastProvider>
    );
}
