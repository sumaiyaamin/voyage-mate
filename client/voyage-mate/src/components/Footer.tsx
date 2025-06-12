
const Footer = () => {
  const partners = [
    { name: "Shell", logo: "🛢️" },
    { name: "Ferrari", logo: "🏎️" },
    { name: "Rolex", logo: "⌚" },
  ];

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-8 mb-8 md:mb-0">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center space-x-2 opacity-75 hover:opacity-100 transition-opacity">
                <span className="text-2xl">{partner.logo}</span>
                <span className="font-semibold">{partner.name}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-travel-blue-600 font-bold text-sm">V</span>
            </div>
            <span className="text-white font-bold text-lg">VoyageMate</span>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 VoyageMate. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
