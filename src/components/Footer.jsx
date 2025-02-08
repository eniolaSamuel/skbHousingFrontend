// Import your UI components here
// import { Input } from "./ui/input"
// import { Button } from "./ui/button"

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <img
                            src="/path-to-your-logo.svg" // Replace with actual path
                            alt="SKB Homes Logo"
                            className="h-8 w-auto mb-4 brightness-0 invert"
                        />
                        <p className="text-gray-400">Your trusted partner in finding the perfect apartment.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Our Apartments
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Locations
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Lagos, Nigeria</li>
                            <li>Phone: +234 123 456 7890</li>
                            <li>Email: info@skbhomes.com</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-gray-800 border-gray-700 rounded px-3 py-2 w-full"
                            />
                            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} SKB Homes. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

