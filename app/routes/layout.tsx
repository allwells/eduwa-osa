import { Outlet } from "react-router";
import { Navbar, Footer } from "~/components/layout";

export default function Layout() {
  return (
    <div className="w-full flex flex-col items-center justify-between min-h-screen relative isolate">
      <LayoutBackground />
      <Navbar />
      <div className="w-full flex flex-col items-center justify-start grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export function LayoutBackground() {
  return (
    <div className="bg-repeat bg-[url('/images/background-noise.png')] bg-fixed absolute top-0 bottom-0 right-0 left-0 w-full h-full -z-[1]" />
  );
}
