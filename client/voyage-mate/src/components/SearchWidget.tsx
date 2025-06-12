
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Search, Users } from "lucide-react";
import { useState } from "react";

const SearchWidget = () => {
  const [destination, setDestination] = useState("");
  const [guests, setGuests] = useState("2");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", { destination, guests, checkin, checkout });
  };

  return (
    <div className="bg-white rounded-2xl p-6 search-shadow max-w-2xl mx-auto">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Elevate Your Travel</h3>
        <p className="text-sm text-gray-600">
          Immerse yourself in a world of limitless possibilities with our trusted onboard dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Where to?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="pl-10 border-gray-200"
          />
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            className="pl-10 border-gray-200"
          />
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="date"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            className="pl-10 border-gray-200"
          />
        </div>

        <div className="relative">
          <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="pl-10 border-gray-200"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span className="bg-travel-orange-100 text-travel-orange-600 px-3 py-1 rounded-full font-medium">
            30°C
          </span>
          <span>Excellent View</span>
        </div>

        <Button onClick={handleSearch} className="bg-travel-blue-500 hover:bg-travel-blue-600 px-8">
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchWidget;
