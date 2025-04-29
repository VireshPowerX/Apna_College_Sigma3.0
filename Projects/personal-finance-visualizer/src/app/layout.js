// src/app/layout.js
import "../styles/global.css"; // Import global styles
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="app-container">
        <Navbar />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}