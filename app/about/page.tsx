import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="mt-10">

      <div className="flex justify-center items-center min-h-screen bg-gray-50 px-6">
        <div className="bg-white shadow-lg rounded-lg p-10 max-w-5xl w-full text-center animate-fadeIn">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to our platform! We are dedicated to making **buying and selling pre-owned items**  
            as easy and convenient as possible. Whether you&apos;re a **senior** looking to sell your old  
            textbooks, furniture, or gadgets, or a **junior** searching for affordable, quality items,  
            we’ve got you covered.
          </p>

          <div className="my-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We aim to **reduce waste**, promote **affordable shopping**, and create a community  
              where students can help each other by giving new life to pre-owned items.  
              With a simple, user-friendly experience, we ensure that **quality items** find  
              a second home instead of being discarded.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 my-8 text-left">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">🔄 Easy Transactions</h3>
              <p className="text-gray-600 mt-2">
                We provide a seamless **buying and selling experience** with secure transactions  
                and clear communication between buyers and sellers.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">🌱 Sustainable Shopping</h3>
              <p className="text-gray-600 mt-2">
                By purchasing pre-owned items, you&apos;re not only **saving money**  
                but also contributing to a **greener planet** by reducing waste.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">📚 Student-Focused</h3>
              <p className="text-gray-600 mt-2">
                We understand student needs—affordable prices, reliable deals, and  
                an easy way to **sell what you don’t need anymore**.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">🚀 Hassle-Free Experience</h3>
              <p className="text-gray-600 mt-2">
                No hidden fees, no complicated processes—just a **simple, direct**  
                way to buy and sell within your student community.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-700">Join Our Community</h2>
            <p className="text-gray-600 text-lg mt-3">
              Be a part of this **growing network of students** who make smart, sustainable choices.  
              Let’s make campus shopping easier, **one deal at a time**!
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
