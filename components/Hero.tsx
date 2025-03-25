const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Elevate Your Style with Baazwear</h1>
      <p className="text-lg md:text-xl mb-4">Discover our exclusive collection of premium apparel for college clubs.</p>
      <p className="max-w-2xl text-base md:text-lg mb-6">
        At Baazwear, we specialize in custom-designed t-shirts that resonate with the energy of college life. Our quality fabric and unique designs set you apart from the crowd.
      </p>
      <p className="text-lg font-semibold mb-6">Contact: +91 9520671308</p>
      <div className="flex space-x-4">
        <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100">
          Download Catalogue
        </button>
        <button className="border-2 border-white text-white font-semibold px-6 py-2 rounded-lg hover:bg-white hover:text-blue-700">
          See Collections
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
