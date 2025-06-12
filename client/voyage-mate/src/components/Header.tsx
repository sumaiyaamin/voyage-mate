
import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-travel-blue-600 font-bold text-sm">V</span>
            </div>
            <span className="text-white font-bold text-lg">VoyageMate</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-white/80 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">About</a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">Feedback</a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">Contact</a>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              Book Now
            </Button>
            <Button size="sm" className="bg-white/20 hover:bg-white/30">
              <User className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-white/20">
            <nav className="flex flex-col space-y-4 p-6">
              <a href="#" className="text-gray-800 hover:text-travel-blue-600 transition-colors">Home</a>
              <a href="#" className="text-gray-800 hover:text-travel-blue-600 transition-colors">About</a>
              <a href="#" className="text-gray-800 hover:text-travel-blue-600 transition-colors">Feedback</a>
              <a href="#" className="text-gray-800 hover:text-travel-blue-600 transition-colors">Contact</a>
              <div className="flex space-x-4 pt-4 border-t border-gray-200">
                <Button variant="outline" className="flex-1">Book Now</Button>
                <Button size="sm">
                  <User className="w-4 h-4" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
