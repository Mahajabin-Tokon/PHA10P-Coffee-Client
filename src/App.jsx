import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import Header from "./components/Header";
import { BsCup } from "react-icons/bs";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-center items-center mt-20 space-y-2">
        <p>---Sip & Savour---</p>
        <h2 className="font-rancho text-3xl text-[#331A15]">
          Our Popular Products
        </h2>
        <Link
          to="/addCoffee"
          className="flex justify-center items-center gap-2 bg-[#E3B577] p-2 rounded-lg border-2 border-[#331A15]"
        >
          <p className="font-rancho text-white">Add Coffee </p>
          <BsCup className="text-[#331A15]"></BsCup>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-2/3 mx-auto my-10">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
      <Instagram></Instagram>
      <Footer></Footer>
    </>
  );
}

export default App;
