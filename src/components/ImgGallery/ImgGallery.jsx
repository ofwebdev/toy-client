import React, { useEffect, useState } from "react";

function ImgGallery() {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    fetch("/data/gallery.json")
      .then((response) => response.json())
      .then((data) => {
        // Store the fetched JSON data in the state
        setGalleryData(data.toys);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-16">
        {galleryData.map((toy) => (
          <React.Fragment key={toy.name}>
            <div className="relative group">
              <img
                src={toy.image}
                alt="Image"
                className="object-cover w-full h-full"
              />

              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity flex items-center justify-center">
                <h2 className="text-white text-lg font-semibold">{toy.name}</h2>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default ImgGallery;
