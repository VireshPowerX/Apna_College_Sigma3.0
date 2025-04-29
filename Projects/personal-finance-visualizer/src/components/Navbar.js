// src/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">💰 Finance Visualizer</Link>
      </div>
      <ul className="nav-links">
        <li><Link href="/transactions">Transactions</Link></li>
        <li><Link href="/categories">Categories</Link></li>
        <li><Link href="/budgeting">Budgeting</Link></li>
      </ul>
    </nav>
  );
}