// Import your UI components here
// import { Card, CardContent } from "./ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
// import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
// import { Calendar } from "./ui/calendar"
// import { Input } from "./ui/input"
// import { Button } from "./ui/button"

const Booking = () => {
    return (
        <div className="bg-white p-6 rounded-lg max-w-4xl">
            <div className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Location</label>
                        {/* Replace with actual Select component */}
                        <select className="w-full border rounded">
                            <option>Select location</option>
                            <option value="lagos-island">Lagos Island</option>
                            <option value="lagos-mainland">Lagos Mainland</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Check In</label>
                        {/* Replace with actual Calendar component */}
                        <input type="date" className="w-full border rounded" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Duration (days)</label>
                        <input type="number" placeholder="Number of days" min="1" className="w-full border rounded" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">&nbsp;</label>
                        <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                            Search Apartments
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking

