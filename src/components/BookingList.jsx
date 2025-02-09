"use client"

import { useState, useEffect } from "react"
import axios from "axios"

const BookingList = () => {
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get("/api/bookings/all")
                setBookings(response.data)
            } catch (error) {
                console.error("Error fetching bookings:", error)
            }
        }

        fetchBookings()
    }, [])

    const handleCancelBooking = async (bookingSerialNumber) => {
        try {
            await axios.delete(`/api/bookings/cancel/${bookingSerialNumber}`)
            setBookings(bookings.filter((booking) => booking.bookingSerialNumber !== bookingSerialNumber))
        } catch (error) {
            console.error("Error cancelling booking:", error)
        }
    }

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Bookings</h2>
            {bookings.length === 0 ? (
                <p>No bookings found.</p>
            ) : (
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                    <ul className="divide-y divide-gray-200">
                        {bookings.map((booking) => (
                            <li key={booking.bookingSerialNumber}>
                                <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-red-600 truncate">{booking.apartmentName}</p>
                                        <div className="ml-2 flex-shrink-0 flex">
                                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                {booking.apartmentStatus}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                        <div className="sm:flex">
                                            <p className="flex items-center text-sm text-gray-500">{booking.apartmentAddress}</p>
                                        </div>
                                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                            <p>
                                                {new Date(booking.startBookDate).toLocaleDateString()} -{" "}
                                                {new Date(booking.endBookDate).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <button
                                            onClick={() => handleCancelBooking(booking.bookingSerialNumber)}
                                            className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                        >
                                            Cancel Booking
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default BookingList

