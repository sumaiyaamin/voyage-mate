
import Globe3D from "./Globe3D";

const Globe3DSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Explore the World
                <span className="block text-blue-600">Interactively</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover amazing destinations around the globe with our interactive 3D world map. 
                Click and explore popular travel destinations with real-time information.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Interactive Globe</h3>
                  <p className="text-gray-600">Rotate and zoom to explore destinations</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Live Destinations</h3>
                  <p className="text-gray-600">Real-time updates from popular cities</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Plan Your Trip</h3>
                  <p className="text-gray-600">Click on markers to start planning</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 3D Globe */}
          <div className="relative">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
              <Globe3D />
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#3b82f6_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
    </section>
  );
};

export default Globe3DSection;
