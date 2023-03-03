import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/about">About</Link>
      </nav>
      <h1>메인</h1>
    </div>
  );
}
