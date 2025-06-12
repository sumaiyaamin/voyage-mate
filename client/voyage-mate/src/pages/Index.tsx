
import Header from "@/components/Header";
import SearchWidget from "@/components/SearchWidget";
import FeatureCards from "@/components/FeatureCards";
import Globe3DSection from "@/components/Globe3DSection";
import JourneySection from "@/components/JourneySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg min-h-screen relative overflow-hidden">
        <Header />
        
        {/* 3D Mountain Elements */}
        <div className="mountain-layer-3"></div>
        <div className="mountain-layer-1"></div>
        <div className="mountain-layer-2"></div>
        
        {/* Animated Clouds */}
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Discover the World<br />
              <span className="text-white/90">of Seamless Travel</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md">
              Effortlessly plan and book your dream vacations with our cutting-edge travel agency dashboard. Enjoy a personalized experience as you explore a wide range of destinations.
            </p>
          </div>

          <SearchWidget />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/20 rounded-full animate-float backdrop-blur-sm"></div>
        <div className="absolute top-1/3 right-16 w-16 h-16 bg-white/15 rounded-full animate-float backdrop-blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float backdrop-blur-sm" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <FeatureCards />
        </div>
      </section>

      {/* 3D Globe Section */}
      <Globe3DSection />

      {/* Journey Section */}
      <JourneySection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
