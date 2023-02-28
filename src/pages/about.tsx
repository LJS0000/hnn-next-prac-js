import Link from 'next/link';
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <nav>
        <Link
          style={{ color: router.pathname === '/' ? 'red' : 'green' }}
          href="/"
        >
          Home
        </Link>
        <Link
          style={{ color: router.pathname === '/about' ? 'red' : 'green' }}
          href="/"
        >
          About
        </Link>
      </nav>
      <h1>어바웃</h1>
    </div>
  );
}
