import { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <p>Custom App Test</p>
    </div>
  );
}
