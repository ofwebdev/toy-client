import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";

function AllToys() {
  useTitle("All toys");
  const toyFetchState = useLoaderData();
  const [toys, setToys] = useState(toyFetchState);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setToys(toyFetchState);
  }, [toyFetchState]);

  const limit = 20; // Limit the number of results to sho
  console.log(toys);

  const handelDelete = (_id) => {
    setLoading(true);
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/toy/${_id}`, { method: "DELETE" })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);

              if (data.deleteCount > 0) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                // Update the toys state by removing the deleted toy
                const updatedToys = toys.filter((toy) => toy._id !== _id);
                setToys(updatedToys);
              }
            });
        }
      })
      .catch((error) => {
        console.log("Error deleting user:", error);
        alert("An error occurred while deleting the user");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Function to render the table rows
  const renderRows = () => {
    return toys.slice(0, limit).map((toy) => (
      <tr key={toy._id} className="pt-8">
        <td className="p-4">{toy.sellerName}</td>
        <td className="p-4">{toy.name}</td>
        <td className="p-4">{toy.subcategory}</td>
        <td className="p-4">${toy.price}</td>
        <td className="p-4">{toy.quantity}</td>
        <td className="flex gap-3 pl-4">
          <Link
            to={`/details/${toy._id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Details
          </Link>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            🖋️
          </button>
          <button
            onClick={() => handelDelete(toy._id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            ❌
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <Header />
      <div className="p-10 py-16">
        <h2 className="text-2xl font-bold mb-4">All Toys</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="w-full pt-10">
            <thead>
              <tr>
                <th className="p-2 bg-gray-100 text-left text-gray-600 font-bold">
                  Seller
                </th>
                <th className="p-2 bg-gray-100 text-left text-gray-600 font-bold">
                  Toy Name
                </th>
                <th className="p-2 bg-gray-100 text-left text-gray-600 font-bold">
                  Sub-category
                </th>
                <th className="p-2 bg-gray-100 text-left text-gray-600 font-bold">
                  Price
                </th>
                <th className="p-2 bg-gray-100 text-left text-gray-600 font-bold">
                  Available Quantity
                </th>
                <th className="p-2 bg-gray-100"></th>
              </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
          </table>
        )}
      </div>
      <Footer />
    </>
  );
}

export default AllToys;
