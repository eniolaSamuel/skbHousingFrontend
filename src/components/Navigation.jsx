"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/SkbLogo.svg"

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img className="h-8 w-auto" src={logo || "/placeholder.svg"} alt="SKB Homes" />
                        </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <Link
                            to="/"
                            className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-500 text-sm font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/apartments"
                            className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-500 text-sm font-medium"
                        >
                            Apartments
                        </Link>
                        <Link
                            to="/bookings"
                            className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-500 text-sm font-medium"
                        >
                            My Bookings
                        </Link>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <Link
                            to="/"
                            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                        >
                            Home
                        </Link>
                        <Link
                            to="/apartments"
                            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                        >
                            Apartments
                        </Link>
                        <Link
                            to="/bookings"
                            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                        >
                            My Bookings
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation

