import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>홈</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>로그인</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>마이페이지</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
