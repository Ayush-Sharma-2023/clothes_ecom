import React from "react";

const stats = [
  { id: 1, value: "150+", label: "Clients Served" },
  { id: 2, value: "200+", label: "Orders Fulfilled" },
  { id: 3, value: "180+", label: "Positive Reviews" },
];

const features = [
  {
    id: 1,
    icon: "👕",
    title: "Premium Quality",
    description:
      "We use only the finest materials to create apparel that combines style with durability.",
  },
  {
    id: 2,
    icon: "😊",
    title: "Comfort Guaranteed",
    description:
      "Our designs prioritize comfort, ensuring you look great while feeling relaxed all day.",
  },
  {
    id: 3,
    icon: "🍃",
    title: "Eco-Friendly Fabrics",
    description:
      "We are committed to sustainability by using eco-friendly materials in our products.",
  },
  {
    id: 4,
    icon: "⚡",
    title: "Fast Delivery",
    description:
      "Get your orders delivered quickly and efficiently, so you can enjoy them sooner.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">Why Choose Us?</h2>

        {/* Stats Section */}
        <div className="mt-12 flex flex-wrap justify-around gap-28">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <p className="text-5xl font-extrabold text-orange-500">{stat.value}</p>
              <p className="text-lg text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features Section */}
        {/* <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-around"> */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-around">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-8 bg-white shadow-xl rounded-2xl text-center"
            >
              <div className="text-6xl text-orange-200">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600 mt-3">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
