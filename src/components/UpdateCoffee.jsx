import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
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
    const updatedCoffee = { name, chef, supplier, taste, category, details, photo };
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
        if (data.modifiedCount>0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h2>Update Coffee {name}</h2>
      <form onSubmit={handleUpdateCoffee}>
        <div className="flex justify-around items-center gap-5 p-10">
          <div className="w-1/2">
            <p>Name</p>
            <input
              name="name"
              type="text"
              defaultValue={name}
              placeholder="Coffee Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-1/2">
            <p>Chef</p>
            <input
              name="chef"
              type="text"
              defaultValue={chef}
              placeholder="Chef"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex justify-around items-center gap-5 p-10">
          <div className="w-1/2">
            <p>Supplier</p>
            <input
              name="supplier"
              type="text"
              defaultValue={supplier}
              placeholder="Supplier"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-1/2">
            <p>Taste</p>
            <input
              name="taste"
              type="text"
              defaultValue={taste}
              placeholder="Taste"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex justify-around items-center gap-5 p-10">
          <div className="w-1/2">
            <p>Category</p>
            <input
              name="category"
              type="text"
              defaultValue={category}
              placeholder="Category"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-1/2">
            <p>Details</p>
            <input
              name="details"
              type="text"
              defaultValue={details}
              placeholder="Details"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="p-10">
          <div className="w-full">
            <p>Photo</p>
            <input
              name="photo"
              type="text"
              defaultValue={photo}
              placeholder="Photo"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="p-10">
          <input type="submit" value="Update Coffee" className="btn w-full" />
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
