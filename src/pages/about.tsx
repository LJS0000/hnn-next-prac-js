import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './about.module.css';

export default function About() {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <nav>
        <Link
          className={`
          ${styles.line}
          ${router.pathname === '/' ? styles.active : ''}
          `}
          href="/"
        >
          Home
        </Link>
        <Link
          className={[
            styles.link,
            router.pathname === '/about' ? styles.active : 'gren',
          ].join(' ')}
          href="/"
        >
          About
        </Link>
      </nav>
      <h1>어바웃</h1>
    </div>
  );
}
