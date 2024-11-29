import React from "react";
import { FaTrash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { RiPencilFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter(cof => cof._id != _id)
              setCoffees(remaining)
            }
          });
      }
    });
  };

  return (
    <div className="flex md:flex-row flex-col justify-around items-center bg-[#F5F4F1] space-y-4 md:space-y-0 rounded-md p-2">
      <div className="w-1/3">
        <img src="https://i.ibb.co/wKhp82Z/1.png" alt="Coffee Image" />
      </div>
      <div className="md:w-1/3 text-center">
        <p className="font-bold">Name: {name}</p>
        <p className="font-bold">Chef: {chef}</p>
        <p className="font-bold">Price: 100TK</p>
      </div>
      <div className="flex flex-row md:flex-col gap-2 justify-center items-center w-1/3">
        <div className="bg-orange-300 p-2 rounded-lg">
          <IoMdEye className="text-white" />
        </div>
        <Link to={`/updateCoffee/${_id}`} className="bg-black p-2 rounded-lg">
          <RiPencilFill className="text-white" />
        </Link>
        <div
          onClick={() => {
            handleDelete(_id);
          }}
          className="bg-red-600 p-2 rounded-lg"
        >
          <FaTrash className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
