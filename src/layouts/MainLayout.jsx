
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0c0c12]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}