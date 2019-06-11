import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/privateRoute"
import NotificationsPage from "./notifications"
import Login from "../components/login"

const App = () => (
    <Router>
        <PrivateRoute path="/" component={NotificationsPage} />
        <Login path="/app/login" />
    </Router>
)

export default App