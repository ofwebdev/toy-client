import { useParams } from "react-router-dom";
import toysData from "../../../public/data/tab.json";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ToyDetails = () => {
  const { id } = useParams();

  // Find the toy details based on the ID
  let toy = null;
  Object.values(toysData).forEach((categoryToys) => {
    const foundToy = categoryToys.find((toy) => toy.id === parseInt(id));
    if (foundToy) {
      toy = foundToy;
    }
  });

  // Render the toy details with a beautiful UI
  return (
    <>
      <Header />
      <div className="rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Toy Details</h2>
        {toy ? (
          <div>
            <img
              src={toy.imageUrl}
              alt={toy.name}
              className="w-64 h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 mb-2">ID: {toy.id}</p>
            <p className="text-gray-600 mb-2">Name: {toy.name}</p>
            <p className="text-gray-600 mb-2">Price: ${toy.price}</p>
            <p className="text-gray-600 mb-2">Rating: {toy.rating}</p>
            {/* Render other toy details */}
          </div>
        ) : (
          <p className="text-red-500">Toy not found.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ToyDetails;
