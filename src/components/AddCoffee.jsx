import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const navigate = useNavigate()
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(newCoffee);

    // Send data to server
    fetch("http://localhost:5001/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "New Coffee Added Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/")
        }
      });
  };

  //   https://i.ibb.co/wKhp82Z/1.png

  return (
    <div>
      <h2>Add Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        <div className="flex justify-around items-center gap-5 p-10">
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
        <div className="flex justify-around items-center gap-5 p-10">
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
        <div className="flex justify-around items-center gap-5 p-10">
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
        <div className="p-10">
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
        <div className="p-10">
          <input type="submit" value="Add Coffee" className="btn w-full" />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
