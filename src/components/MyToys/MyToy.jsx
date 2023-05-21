import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function MyToy() {
  const myToy = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(myToy);

  return (
    <div className="container mx-auto py-8">
      <Header />
      {user ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
          {myToy.map((data) => (
            <div key={data._id} className="bg-white rounded shadow p-4">
              <h1 className="text-xl font-bold">{data.name}</h1>
              <img src={data.picture} alt="" />
            </div>
          ))}
        </div>
      ) : (
        <p className="py-12">
          You don't have any data, please upload your toy data :)
        </p>
      )}
      <Footer />
    </div>
  );
}

export default MyToy;
