import Navigation from "../components/Navigation.jsx"
import Home from "../components/Home.jsx"
import Footer from "../components/Footer.jsx"

function LandingPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <Home />
            <Footer />
        </div>
    )
}

export default LandingPage

