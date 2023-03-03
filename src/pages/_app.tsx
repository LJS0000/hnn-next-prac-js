import { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100">
      <Component {...pageProps} />
      <p>Custom App Test</p>
    </div>
  );
}
