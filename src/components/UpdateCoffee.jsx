import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../assets/more/logo1.png";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const navigate = useNavigate();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    // Send data to server
    fetch(`http://localhost:5001/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/");
        }
      });
  };

  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/5TNmYQt/15.jpg')] h-20 text-white flex justify-center items-center gap-2">
        <img className="h-16" src={logo} alt="Logo" />
        <h2 className="font-rancho text-3xl">Espresso Emporium</h2>
      </div>
      <div className="text-center font-rancho text-4xl my-10">
        Update Coffee
      </div>
      <form
        className="w-2/3 mx-auto bg-[#F4F3F0] rounded-lg py-10"
        onSubmit={handleUpdateCoffee}
      >
        <div className="flex justify-around items-center gap-5 px-10 py-2">
          <div className="w-1/2">
            <p>Name</p>
            <input
              name="name"
              type="text"
              placeholder="Coffee Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-1/2">
            <p>Chef</p>
            <input
              name="chef"
              type="text"
              placeholder="Chef"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex justify-around items-center gap-5 px-10 py-2">
          <div className="w-1/2">
            <p>Supplier</p>
            <input
              name="supplier"
              type="text"
              placeholder="Supplier"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-1/2">
            <p>Taste</p>
            <input
              name="taste"
              type="text"
              placeholder="Taste"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex justify-around items-center gap-5 px-10 py-2">
          <div className="w-1/2">
            <p>Category</p>
            <input
              name="category"
              type="text"
              placeholder="Category"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-1/2">
            <p>Details</p>
            <input
              name="details"
              type="text"
              placeholder="Details"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="px-10 py-2">
          <div className="w-full">
            <p>Photo</p>
            <input
              name="photo"
              type="text"
              placeholder="Photo"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="px-10 py-4">
          <input
            type="submit"
            value="Update Coffee"
            className="btn w-full bg-[#D2B48C]"
          />
        </div>
      </form>
      <div className="font-rancho text-white text-center bg-[url('https://i.ibb.co/mHV5WPb/24.jpg')] py-1 mt-40">
        Copyright @ Espresso Emporium! All Rigths Reserved
      </div>
    </div>
  );
};

export default UpdateCoffee;
