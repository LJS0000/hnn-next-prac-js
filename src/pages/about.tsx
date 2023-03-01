import Link from 'next/link';
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <style jsx global>{`
          nav {
            background-color: green;
          }
        `}</style>
      </nav>
      <h1>어바웃</h1>
    </div>
  );
}
