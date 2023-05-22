import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useTitle from "../../hooks/useTitle";

function UpdateToy() {
  useTitle("Update toy");
  const toy = useLoaderData();

  const {
    _id,
    description,
    name,
    picture,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerName,
    subcategory,
  } = toy;

  const handleUpdateToy = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const picture = form.picture.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subcategory = form.subcategory.value;
    const rating = form.subcategory.value;
    const price = form.price.value;

    const updateToy = {
      name,
      quantity,
      description,
      picture,
      subcategory,
      sellerEmail,
      sellerName,
      rating,
      price,
    };
    fetch(`https://toy-store-server-ofwebdev.vercel.app/toy/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Check the response data in the console

        if (data.modifiedCount > 0) {
          // Success! Both insertedId and acknowledged properties exist
          Swal.fire({
            title: "Success!",
            text: "Coffee update Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        // Handle any network or server-side errors here
      });
  };

  console.log(toy);
  return (
    <>
      <Header />
      <div className="p-24">
        <h2 className="text-3xl font-extrabold">Update a Toy</h2>
        <form onSubmit={handleUpdateToy}>
          {/* <!-- Toy name, Picture URL, and Seller Name --> */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <label className="input-group rounded-md">
                <input
                  type="text"
                  name="name"
                  placeholder="Toy Name"
                  className="input input-bordered w-full"
                  defaultValue={name}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Picture URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="picture"
                  placeholder="Picture URL"
                  className="input input-bordered w-full"
                  defaultValue={picture}
                />
              </label>
            </div>
          </div>
          {/* <!-- Seller Name and Email --> */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="sellerName"
                  placeholder="Seller Name"
                  className="input input-bordered w-full"
                  defaultValue={sellerName}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="sellerEmail"
                  placeholder="Seller Email"
                  className="input input-bordered w-full"
                  defaultValue={sellerEmail}
                />
              </label>
            </div>
          </div>
          {/* <!-- Sub-category, Price, Rating, and Available Quantity --> */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Pick the best sub category</span>
              </label>
              <select
                className="select select-bordered"
                name="subcategory"
                defaultValue="Pick one"
              >
                <option disabled value="Pick one">
                  Pick one
                </option>
                <option value="Math Toys">Math Toys</option>
                <option value="Language Toys">Language Toys</option>
                <option value="Engineering toys">Engineering toys</option>
                <option value="Science Toys">Science Toys</option>
              </select>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                  defaultValue={price}
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="quantity"
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                  defaultValue={quantity}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Detail Description</span>
              </label>
              <label className="input-group">
                <textarea
                  name="description"
                  placeholder="Detail Description"
                  className="textarea textarea-bordered w-full"
                  defaultValue={description}
                ></textarea>
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  name="rating"
                  placeholder="Rating"
                  className="input textarea-bordered w-full"
                  defaultValue={rating}
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Update Toy" className="btn btn-block" />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default UpdateToy;
