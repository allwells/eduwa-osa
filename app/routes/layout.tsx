import { Outlet } from "react-router";
import { Navbar, Footer } from "~/components/layout";

export default function Layout() {
  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
