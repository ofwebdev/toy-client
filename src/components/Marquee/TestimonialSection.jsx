import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      company: "ABC Company",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae condimentum neque.",
      img: "https://bootstrapious.com/i/snippets/sn-about/avatar-1.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      company: "XYZ Corporation",
      content:
        "Sed interdum, leo nec lobortis ullamcorper, velit dolor malesuada elit, in dignissim ex elit in eros.",
      img: "https://bootstrapious.com/i/snippets/sn-about/avatar-2.png",
    },
    {
      id: 3,
      name: "Mike Johnson",
      company: "123 Industries",
      content:
        "Phasellus pulvinar varius metus id ultrices. Ut pretium mi sit amet nunc pharetra, ac bibendum est mollis.",
      img: "https://bootstrapious.com/i/snippets/sn-about/avatar-3.png",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <p className="text-gray-800 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
