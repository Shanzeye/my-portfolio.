import Link from 'next/link';
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>PORTFOLIO</h1>
      </div>
      <nav>
        <ul className="navList">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#About">About</Link></li>
          <li><Link href="#Contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

