import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[#f1f2f4]">
      <Navbar />
      <main className="min-h-[calc(100vh-5rem)]">
        <Outlet />
      </main>
    </div>
  );
}
