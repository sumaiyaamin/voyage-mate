
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Unlock } from "lucide-react";

const JourneySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Embark on Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unveil a world of possibilities with our travel agency dashboard
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 card-shadow max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Unlock the Secrets of Effortless
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Elevate your travel planning with our cutting-edge dashboard offering a comprehensive suite of tools to help you discover your dream destinations, secure the best accommodations, and seamlessly book your entire itinerary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-travel-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-travel-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Destinations</h4>
              <p className="text-sm text-gray-600">Explore thousands of amazing destinations worldwide</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-travel-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-travel-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Planning</h4>
              <p className="text-sm text-gray-600">Smart itinerary planning with AI assistance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-travel-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Unlock className="w-8 h-8 text-travel-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Experience</h4>
              <p className="text-sm text-gray-600">Unlock premium travel experiences</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-travel-orange-500 hover:bg-travel-orange-600 px-8 py-3"
            >
              Explore Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-travel-blue-300 text-travel-blue-600 hover:bg-travel-blue-50 px-8 py-3"
            >
              Start Your Adventure
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Button
              variant="ghost"
              className="text-travel-blue-600 hover:bg-travel-blue-50"
            >
              Plan Your Escape
            </Button>
            <Button
              size="lg"
              className="bg-travel-orange-500 hover:bg-travel-orange-600 px-8 py-3"
            >
              Discover More
            </Button>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 text-travel-blue-600">
              <Unlock className="w-5 h-5" />
              <span className="font-medium">Unlock</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
