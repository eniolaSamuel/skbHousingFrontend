import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import BookingList from "./components/BookingList.jsx";
import ApartmentList from "./components/ApartmentList.jsx";


function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage/>} />
                    <Route path="/apartments" element={<ApartmentList/>} />
                    <Route path="/bookings" element={<BookingList/>} />
                </Routes>
            </BrowserRouter>
    );
}

export default App;
