import Image from "next/image";
export default function FeaturedCollections() {
  const collections = [
    {
      name: "Round Neck T-shirts",
      description: "Explore our collection of round neck t-shirts and discover the perfect fit for you.",
      image: "/shirt.png",
    },
    {
      name: "Oversized T-shirts",
      description: "Explore our collection of oversized t-shirts and discover the perfect fit for you.",
      // image: "/oversized-tshirt.png",
      image: "/shirt.png",
    },
    {
      name: "Polo T-shirts",
      description: "Explore our collection of polo t-shirts and discover the perfect fit for you.",
      image: "/shirt.png",
    },
    {
      name: "Hoodies",
      description: "Explore our collection of hoodies and discover the perfect fit for you.",
      image: "/shirt.png",
    },
    {
      name: "Sweatshirts",
      description: "Explore our collection of sweatshirts and discover the perfect fit for you.",
      image: "/shirt.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Featured Collections</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
      {collections.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg p-8 text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          <Image 
            src={item.image} 
            alt={item.name} 
            width={500} 
            height={500} 
            unoptimized={true} 
            className="w-full h-56 object-contain mb-6 rounded-lg" 
          />
          <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
          <p className="text-base text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


  );
}
