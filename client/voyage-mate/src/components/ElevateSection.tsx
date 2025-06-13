import Img from '../assets/baby.png'; // replace with your image path

const ElevateSection = () => {
  return (
    <section className="bg-[#5cc4f8] px-4 md:px-16 py-12">
      <div className="flex flex-col md:flex-row items-center">

        {/* Left: Image ......................*/}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={Img}
            alt="Elevate Travel"
            className="w-3/5 mx-auto h-auto rounded-xl opacity-70 object-cover"
          />
        </div>

        {/* Right: Content .......................*/}
        <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-12 items-center md:items-start text-center md:text-left text-white">
          <h2 className="text-3xl md:text-4xl italic font-semibold mb-4">
            Elevate Your Travel
          </h2>
          <p className="mb-6 leading-relaxed md:mx-0 w-[80%] ">
            Embark on a journey like no other with our cutting-edge travel agency dashboard. Unlock a world of possibilities, from personalized recommendations to seamless booking.
          </p>
          <button className="w-full md:w-auto bg-[#F5852C] text-[#FEF6ED] px-5 py-2 rounded-full font-medium shadow hover:opacity-80 transition">
            Explore Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default ElevateSection;
