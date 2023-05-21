import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SearchToy() {
  const [searchQuery, setSearchQuery] = useState("");
  const [toys, setToys] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the server based on the search query
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/toy/search?query=${searchQuery}`
        );
        const data = await response.json();
        setToys(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleViewDetails = (id) => {
    navigate(`/toy/${id}`); // Redirect to the details page of the selected toy
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Search Toys</h2>
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search by Toy Name"
          className="border border-gray-300 rounded py-2 px-4 w-full"
        />
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-100 text-left text-gray-600 font-bold">
              Toy Name
            </th>
            <th className="py-2 px-4 bg-gray-100 text-left text-gray-600 font-bold"></th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy.id}>
              <td>{toy.name}</td>
              <td>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleViewDetails(toy.id)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchToy;
