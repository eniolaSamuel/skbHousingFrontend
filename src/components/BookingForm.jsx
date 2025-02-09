"use client"

import { useState } from "react"
import axios from "axios"

const BookingForm = () => {
    const [location, setLocation] = useState("")
    const [checkIn, setCheckIn] = useState("")
    const [duration, setDuration] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("/api/v1/bookApartment/makeChoiceByAvailability", {
                location,
                startBookDate: checkIn,
                endBookDate: new Date(new Date(checkIn).getTime() + duration * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
                apartmentStatus: "IS_AVAILABLE",
            })
            // Handle the response
            console.log(response.data)
        } catch (error) {
            console.error("Error:", error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label htmlFor="location" className="sr-only">
                        Location
                    </label>
                    <select
                        id="location"
                        name="location"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        <option value="">Select Location</option>
                        <option value="LAGOS_ISLAND">Lagos Island</option>
                        <option value="LAGOS_MAINLAND">Lagos Mainland</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="check-in" className="sr-only">
                        Check In
                    </label>
                    <input
                        id="check-in"
                        name="check-in"
                        type="date"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="duration" className="sr-only">
                        Duration (days)
                    </label>
                    <input
                        id="duration"
                        name="duration"
                        type="number"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                        placeholder="Duration (days)"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    Search Apartments
                </button>
            </div>
        </form>
    )
}

export default BookingForm

