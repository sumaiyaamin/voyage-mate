import topImage from '../assets/miniCar.png';
import bottomImage from '../assets/image.png';
import bgImage from '../assets/wave.jpg';

const FutureSection = () => {
  return (
    <section
      className="relative bg-no-repeat bg-center bg-cover rounded-b-xl px-4 md:px-16 overflow-hidden "
      style={{
        backgroundImage: `url(${bgImage})`,
        // You can also add fallback background color here if needed
      }}
    >
      <div className="floating-shape future-sky-1"></div>
      <div className="floating-shape future-orange-1"></div>
      <div className="floating-shape future-orange-2"></div>



      <div className='w-[90%] mx-auto '>


        {/* Top Half.....................*/}
        <div className="bg-white bg-opacity-80 py-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Image (Top Half) */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-5 md:mt-0">
              <img
                src={topImage}
                alt="Travel Dashboard"
                className="w-3/5 mx-auto h-auto rounded-xl object-cover"
              />
            </div>

            {/* Right Content (Top Half) */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col space-y-6 items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold italic text-gray-800">
                Embrace the Future of Travel
              </h2>
              <p className="text-gray-600 leading-relaxed w-[80%]">
                Discover a new era of travel planning with our cutting-edge dashboard,
                where personalized recommendations meet seamless booking options.
              </p>
              <button className="w-full lg:w-auto bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:opacity-80 transition">
                Book Now
              </button>

            </div>
          </div>
        </div>

        {/* Bottom Half....................*/}
        <div className="py-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-5">
            {/* Left Content (Bottom Half) */}
            <div className="w-full lg:w-1/2 flex flex-col space-y-6 items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 italic">
                Unlock Travel Secrets
              </h2>
              <p className="text-gray-700 leading-relaxed w-[80%]">
                Elevate your travel planning with our intuitive dashboard,
                where you can effortlessly curate the perfect itinerary.
              </p>
              <button className="w-full lg:w-auto bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:opacity-80 transition">
                Discover More
              </button>

            </div>

            {/* Right Image (Bottom Half) */}
            <div className="w-full lg:w-1/2 mt-5 md:mt-0">
              <img
                src={bottomImage}
                alt="Travel Itinerary"
                className="w-3/5 mx-auto h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default FutureSection;
