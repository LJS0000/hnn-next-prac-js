import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="dev-border-3">
      <ul>
        <li>
          <Link href="/">네비게이션바</Link>
        </li>
      </ul>
    </nav>
  );
}
