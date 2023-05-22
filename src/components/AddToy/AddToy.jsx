import React from "react";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function AddToy() {
  useTitle("Add toy to database");
  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const picture = form.picture.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subcategory = form.subcategory.value;
    const rating = form.rating.value;
    const price = form.price.value;

    const newToy = {
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

    console.log(newToy);

    fetch("https://toy-store-server-ofwebdev.vercel.app/toy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Check the response data in the console

        if (data.insertedId && data.acknowledged) {
          // Success! Both insertedId and acknowledged properties exist
          Swal.fire({
            title: "Success!",
            text: "Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          // Handle the case when either insertedId or acknowledged is missing
          console.log("Error: Invalid response data");
        }
      });
    // .catch((error) => {
    //   console.log("Error:", error);
    //   // Handle any network or server-side errors here
    // });
  };

  return (
    <>
      <Header />
      <div className="p-24">
        <h2 className="text-3xl font-extrabold">Add a Toy</h2>
        <form onSubmit={handleAddToy}>
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
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Add Toy" className="btn btn-block" />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AddToy;
