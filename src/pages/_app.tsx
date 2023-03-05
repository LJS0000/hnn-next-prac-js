import { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from '@component/components/layouts/Header';
import Nav from '@component/components/layouts/Nav';
import Footer from '@component/components/layouts/footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="dev-border-1 bg-100 m-h-screen flex justify-between">
      <Header />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
