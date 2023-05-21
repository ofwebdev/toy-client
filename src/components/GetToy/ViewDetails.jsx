import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function ViewDetails() {
  const { id } = useParams();
  const toy = useLoaderData();
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-16">
        <h2 className="text-2xl font-bold mb-4">Toy Details</h2>
        <p className="text-lg">Toy ID: {id}</p>

        <div className="max-w-md w-full rounded-md overflow-hidden shadow-lg my-4">
          <img src={toy.picture} alt="Toy" className="w-full h-auto" />

          <div className="px-6 py-4">
            <p className="text-lg font-bold mb-2">Name: {toy.name}</p>
            <p className="text-lg mb-2">Price: ${toy.price}</p>
            <p className="text-lg mb-2">Quantity: {toy.quantity}</p>
            <p className="text-lg mb-2">Description: {toy.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewDetails;
