import { Link } from "react-router-dom"
import BookingForm from "./BookingForm"

const Home = () => {
    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Welcome to SKB Homes
                </h1>
                <p className="mt-6 max-w-2xl text-xl text-gray-500">
                    Find your perfect home away from home. Luxury apartments in prime locations.
                </p>
                <BookingForm />
                <div className="mt-10">
                    <Link
                        to="/apartments"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                    >
                        View All Apartments
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home

