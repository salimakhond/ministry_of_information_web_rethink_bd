import { Outlet } from "react-router-dom";
import HeroArea from "../ui/HeroArea";
import NavBar from "../ui/NavBar";
import Footer from "../ui/Footer";

const MainLayout = () => {
  return (
    <div>
      <HeroArea />
      <NavBar />
      <div className="flex flex-col min-h-screen container mx-auto sm:px-6 lg:px-4">
        <main className="bg-white">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
