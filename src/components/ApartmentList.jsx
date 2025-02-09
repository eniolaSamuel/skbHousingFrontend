"use client"

import { useState, useEffect } from "react"

const apartments = [
    { id: 1, name: "Studio Alausa", type: "Studio", location: "Mainland", price: 27500 },
    { id: 2, name: "Studio Talabi", type: "Studio", location: "Mainland", price: 27500 },
    { id: 3, name: "Executive Studio", type: "Studio", location: "Mainland", price: 35000 },
    { id: 4, name: "GRA Ikeja Studio", type: "Studio", location: "Mainland", price: 40000 },
    { id: 5, name: "Executive Studio Premium", type: "Studio", location: "Mainland", price: 45000 },
    { id: 6, name: "Talabi 1 Bedroom", type: "1 Bedroom", location: "Mainland", price: 50000 },
    { id: 7, name: "GRA Ikeja 1 Bedroom", type: "1 Bedroom", location: "Mainland", price: 75000 },
    { id: 8, name: "Shonibare 1 Bedroom", type: "1 Bedroom", location: "Mainland", price: 75000 },
    { id: 9, name: "Ikoyi 1 Bedroom", type: "1 Bedroom", location: "Island", price: 135000 },
    { id: 10, name: "Shonibare 2 Bedroom", type: "2 Bedroom", location: "Mainland", price: 105000 },
    { id: 11, name: "GRA Ikeja 2 Bedroom", type: "2 Bedroom", location: "Mainland", price: 120000 },
    { id: 12, name: "Deluxe 2 Bedroom", type: "2 Bedroom", location: "Mainland", price: 135000 },
    { id: 13, name: "Ikoyi 2 Bedroom", type: "2 Bedroom", location: "Mainland", price: 180000 },
]

const ApartmentList = () => {
    const [filteredApartments, setFilteredApartments] = useState(apartments)
    const [typeFilter, setTypeFilter] = useState("")
    const [locationFilter, setLocationFilter] = useState("")

    useEffect(() => {
        const filtered = apartments.filter(
            (apartment) =>
                (typeFilter === "" || apartment.type === typeFilter) &&
                (locationFilter === "" || apartment.location === locationFilter),
        )
        setFilteredApartments(filtered)
    }, [typeFilter, locationFilter])

    const handleTypeChange = (e) => {
        setTypeFilter(e.target.value)
    }

    const handleLocationChange = (e) => {
        setLocationFilter(e.target.value)
    }

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Available Apartments</h2>

                {/* Filters */}
                <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <select
                        value={typeFilter}
                        onChange={handleTypeChange}
                        className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                    >
                        <option value="">All Types</option>
                        <option value="Studio">Studio</option>
                        <option value="1 Bedroom">1 Bedroom</option>
                        <option value="2 Bedroom">2 Bedroom</option>
                    </select>
                    <select
                        value={locationFilter}
                        onChange={handleLocationChange}
                        className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                    >
                        <option value="">All Locations</option>
                        <option value="Mainland">Mainland</option>
                        <option value="Island">Island</option>
                    </select>
                </div>

                {/* Image Carousel Placeholder */}
                <div className="mt-8 bg-gray-200 p-4 rounded-lg">
                    <p className="text-center text-gray-600">Image Carousel Placeholder</p>
                    {/* TODO: Implement image carousel upload functionality */}
                </div>

                {/* Apartment Grid */}
                <div className="mt-8 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {filteredApartments.map((apartment) => (
                        <div key={apartment.id} className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={`https://via.placeholder.com/300x200?text=${encodeURIComponent(apartment.name)}`}
                                    alt={apartment.name}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{apartment.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">₦{apartment.price.toLocaleString()} / night</p>
                            <p className="mt-1 text-sm text-gray-500">
                                {apartment.type} • {apartment.location}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ApartmentList

