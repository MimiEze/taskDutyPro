import { Outlet } from "react-router"
import woman from "../assets/woman.jpg";

export default function AuthLayout() {
  return (
    <section className="grid grid-cols-12 items-center justify-center min-h-screen">
      <div className="col-span-12 md:col-span-6 h-full">
        <img src={woman} alt="shopping" className="w-full h-full object-cover" />
      </div>
      <div className="col-span-12 md:col-span-6 px-4">
      <Outlet />
      </div>
      
    </section>
  );
}
