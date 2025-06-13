import img from '../assets/img__.jpg';

const DiscoverSection = () => {
  return (
    <section className="px-6 md:px-16 py-12 bg-white text-[#1a1a1a] relative overflow-hidden">
      {/* Floating Shapes */}
      <div className="floating-shape sky-1"></div>
      <div className="floating-shape sky-2"></div>
      <div className="floating-shape sky-3"></div>
      <div className="floating-shape orange-1"></div>
      <div className="floating-shape orange-2"></div>

      {/* Section Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2 italic">
          Discover a World of Possibilities
        </h2>
        <p className="text-gray-600">
          Elevate your travel planning with our intuitive dashboard
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Left Card ..........................*/}
        <div className="bg-[#F5884E] text-white p-12 md:p-14 flex-1 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4">
            {/* Left Side (Logo + Titles)............... */}
            <div className="space-y-8 flex flex-col items-center justify-center md:flex-none">
              <div className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-2">
                  E
                </div>
                <h3 className="text-xl font-semibold">Effortless</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-2">
                  S
                </div>
                <h3 className="text-xl font-semibold">Secure</h3>
              </div>
            </div>

            {/* Right Side (Content)............................. */}
            <div className="space-y-9">
              <div className="text-lg md:text-xl">
                Personalized <br className="hidden md:inline" />
                <span className=''>Recommendations</span>
                
                <h3 className="text-base md:text-lg mt-2">
                  Seamless Booking Experience
                </h3>
              </div>
              <div>
                <h2 className="text-lg md:text-xl mb-1">Explore More</h2>
                <h2 className="text-sm md:text-base">
                  Unlock a world of adventure with our cutting-edge travel agency dashboard, where you can effortlessly plan and
                </h2>
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="mt-8 flex items-center justify-center">
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium shadow hover:bg-gray-100 transition">
              Start Exploring
            </button>
          </div>
        </div>

        {/* Right Card - Image..................... */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={img}
            alt="Travel"
            className="rounded-2xl shadow-2xl w-full h-auto object-cover overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
