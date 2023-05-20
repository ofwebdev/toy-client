import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabIndex = () => {
  const [toysData, setToysData] = useState(null);

  useEffect(() => {
    // Fetch JSON data from an API endpoint or local file
    fetch("/data/tab.json")
      .then((response) => response.json())
      .then((data) => setToysData(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(toysData);

  return (
    <div className="p-4 flex items-center justify-center">
      <Tabs>
        <TabList className="flex mb-4 text-center">
          {toysData &&
            Object.keys(toysData).map((category) => (
              <Tab
                key={category}
                className="mr-2 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg cursor-pointer"
              >
                {category}
              </Tab>
            ))}
        </TabList>

        {toysData &&
          Object.entries(toysData).map(([category, toys]) => (
            <TabPanel key={category}>
              {toys.map((toy) => (
                <div key={toy.id} className="my-4 flex items-center">
                  <img
                    src={toy.imageUrl}
                    alt={toy.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{toy.name}</h3>
                    <p className="text-gray-600">${toy.price}</p>
                    <div className="flex items-center">
                      <span className="mr-1 text-yellow-500">{toy.rating}</span>
                      <svg
                        className="w-4 h-4 fill-current text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.31 6.91.95-5 4.86 1.18 6.88-6.18-3.24-6.18 3.24 1.18-6.88-5-4.86 6.91-.95z" />
                      </svg>
                    </div>
                    <Link
                      to={`/view/${toy.id}`}
                      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </TabPanel>
          ))}
      </Tabs>
    </div>
  );
};

export default TabIndex;
