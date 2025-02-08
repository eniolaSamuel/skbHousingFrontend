import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, CalendarDays, MapPin, Star, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SkbLogo from "./../assets/SkbLogo.svg"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white">

            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <Image
                            src={SkbLogo}
                            alt="SKB Homes Logo"
                            width={120}
                            height={40}
                            className="h-8 w-auto"
                        />
                        <div className="hidden md:flex space-x-6">
                            <Link href="#" className="text-gray-600 hover:text-red-600">
                                Home
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-red-600">
                                Apartments
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-red-600">
                                Locations
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-red-600">
                                About
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-red-600">
                                Contact
                            </Link>
                        </div>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700">Book Now</Button>
                </div>
            </nav>


            <section className="pt-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="container mx-auto px-4 py-20">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Perfect Home Away From Home</h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8">
                            Discover premium apartments in prime locations with SKB Homes. Experience comfort, luxury, and
                            convenience.
                        </p>
                    </div>


                    <Card className="bg-white p-6 rounded-lg max-w-4xl">
                        <CardContent className="p-0">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Location</label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select location" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="lagos-island">Lagos Island</SelectItem>
                                            <SelectItem value="lagos-mainland">Lagos Mainland</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Check In</label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                                                <CalendarDays className="mr-2 h-4 w-4" />
                                                Pick a date
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar mode="single" />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Duration (days)</label>
                                    <Input type="number" placeholder="Number of days" min="1" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">&nbsp;</label>
                                    <Button className="w-full bg-red-600 hover:bg-red-700">Search Apartments</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>


            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Featured Apartments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Executive Studio",
                                location: "Lagos Island",
                                price: "₦150,000",
                                image: "/placeholder.svg?height=300&width=400",
                                rating: 5,
                            },
                            {
                                title: "Luxury One Bedroom",
                                location: "Victoria Island",
                                price: "₦250,000",
                                image: "/placeholder.svg?height=300&width=400",
                                rating: 5,
                            },
                            {
                                title: "Premium Two Bedroom",
                                location: "Lekki Phase 1",
                                price: "₦350,000",
                                image: "/placeholder.svg?height=300&width=400",
                                rating: 5,
                            },
                        ].map((apartment, index) => (
                            <Card key={index} className="overflow-hidden">
                                <Image
                                    src={apartment.image || "/placeholder.svg"}
                                    alt={apartment.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{apartment.title}</h3>
                                    <div className="flex items-center text-gray-600 mb-2">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        <span className="text-sm">{apartment.location}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            {[...Array(apartment.rating)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                                            ))}
                                        </div>
                                        <p className="font-semibold text-red-600">{apartment.price}/night</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Why Choose SKB Homes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Building2 className="h-8 w-8 text-red-600" />,
                                title: "Premium Locations",
                                description: "Strategically located apartments in the heart of Lagos",
                            },
                            {
                                icon: <Users className="h-8 w-8 text-red-600" />,
                                title: "24/7 Support",
                                description: "Round-the-clock customer service for your comfort",
                            },
                            {
                                icon: <Star className="h-8 w-8 text-red-600" />,
                                title: "Luxury Amenities",
                                description: "Modern facilities and premium furnishings in every apartment",
                            },
                        ].map((feature, index) => (
                            <Card key={index} className="p-6 text-center">
                                <div className="flex justify-center mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u2en3H0Xb4vg66I9kZXJN8rMI7cwWM.png"
                                alt="SKB Homes Logo"
                                width={120}
                                height={40}
                                className="h-8 w-auto mb-4 brightness-0 invert"
                            />
                            <p className="text-gray-400">Your trusted partner in finding the perfect apartment.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white">
                                        Our Apartments
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white">
                                        Locations
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-white">
                                        Contact
                                    </Link>
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
                                <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700" />
                                <Button className="bg-red-600 hover:bg-red-700">Subscribe</Button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} SKB Homes. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

