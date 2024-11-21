import React from 'react';

const Home = () => {
  const serviceItem = [
    { name: "Caterers", image: "https://images.pexels.com/photos/2977515/pexels-photo-2977515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Decor & Florists", image: "https://images.pexels.com/photos/25820097/pexels-photo-25820097/free-photo-of-colorful-flowers-at-florists.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Weeding Planner", image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Make-up & Hair", image: "https://images.pexels.com/photos/208052/pexels-photo-208052.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Weeding Cards", image: "https://images.pexels.com/photos/916344/pexels-photo-916344.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Mehendi", image: "https://images.pexels.com/photos/7283578/pexels-photo-7283578.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Birthday Party", image: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "DJ Night", image: "https://images.pexels.com/photos/860707/pexels-photo-860707.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Photography", image: "https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="relative h-80 bg-cover bg-center shadow-xl" style={{ backgroundImage: "url('https://images.pexels.com/photos/169196/pexels-photo-169196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="font-semibold opacity-75 text-5xl text-orange-200">SAMSIDHHI</h1>
          <h2 className="font-semibold text-3xl text-white mt-2">Top Event Planners</h2>
          <p className="text-gray-200 text-lg px-6 py-3 mt-4">
            Welcome to Samsidhhi Event Management Company. We’re one of the best corporate event management & wedding planner in Tamluk, India.
          </p>
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-center justify-around px-4 py-8 shadow-inner bg-white">
        <div className="md:basis-1/2">
          <h1 className="font-semibold text-3xl text-gray-500">Best Event Management Company in Tamluk, India</h1>
          <p className="text-gray-500 mt-4">
            Samsidhhi Event Management is a full-service Event management & Wedding planning Company in Tamluk, India. We specialize in creating unique, immersive experiences for our clients across various types of events including weddings, corporate events, and more.
          </p>
        </div>
        <div className="md:basis-1/3 mt-8 md:mt-0">
          <div className="max-w-sm h-full rounded-md overflow-x-visible shadow-lg bg-gray-900 text-white">
            <img className="w-full h-64 object-cover rounded-md" src="https://images.pexels.com/photos/3872610/pexels-photo-3872610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Event" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-around px-4 py-8 bg-gray-200">
        <h1 className="font-semibold text-2xl text-gray-900">Our Services</h1>
        <div className="grid md:grid-cols-4 grid-col-2 gap-4 w-full py-5">
          {serviceItem.map((item, index) => (
            <div key={index} className="w-full p-2 flex flex-col items-center bg-white rounded-md shadow-md my-3">
              <img className="w-full h-32 object-cover rounded-md" src={item.image} alt={item.name} />
              <h3 className="text-gray-700 mt-2 text-center">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
