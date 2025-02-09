import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import ApartmentList from "./components/ApartmentList"
import BookingList from "./components/BookingList"

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/apartments" component={ApartmentList} />
                    <Route path="/bookings" component={BookingList} />
                </Switch>
            </Layout>
        </Router>
    )
}

export default App

