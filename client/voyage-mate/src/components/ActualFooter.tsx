const ActualFooter = () => {
    return (
        <footer className="bg-[#345597] text-white p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full mb-6 md:mb-0 items-start text-center md:text-left">

                {/* Logo - 1/4 column */}
                <div className="md:col-span-1 flex flex-row md:items-center gap-3 md:flex-none justify-center md:justify-start">
                    <div className="w-8 h-8 md:w-10 md:h-10 md:mt-5 md:ml-3 bg-white rounded-full flex items-center justify-center">
                        <span className="text-[#345597] font-semibold text-base">V</span>
                    </div>
                    <div className="md:hidden">
                        <span className="text-gray-100 font-semibold text-lg">VoyageMate</span>
                    </div>
                </div>

                {/* Right-side content - 3/4 column */}
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-2">Quick Links</h3>
                        <ul className="space-y-1 text-sm">
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li><a href="/about" className="hover:underline">About</a></li>
                            <li><a href="/services" className="hover:underline">Services</a></li>
                            <li><a href="/contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="font-semibold mb-2">Explore</h3>
                        <ul className="space-y-1 text-sm">
                            <li><a href="/destinations" className="hover:underline">Destinations</a></li>
                            <li><a href="/packages" className="hover:underline">Packages</a></li>
                            <li><a href="/deals" className="hover:underline">Deals</a></li>
                            <li><a href="/blogs" className="hover:underline">Blogs</a></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="font-semibold mb-2">Connect</h3>
                        <ul className="space-y-1 text-sm">
                            <li><a href="#" className="hover:underline">Facebook</a></li>
                            <li><a href="#" className="hover:underline">Twitter</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                            <li><a href="#" className="hover:underline">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

            </div>


            <div>
                <p className="text-sm text-center md:text-left">
                    © 2025 VoyageMate, Inc. <br />
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default ActualFooter;
