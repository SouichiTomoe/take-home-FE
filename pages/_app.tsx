import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import AppProvider from '../context';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppProvider value={false}>
            <Component {...pageProps} />
        </AppProvider>
    );
}
