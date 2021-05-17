import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Cart from "./Cart";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Logo from "./Logo";
import Contact from "./Contact";



function App() {
    return <div>
        <Link to="/checkout">
            <Cart />
        </Link>
        <Switch>
            <Route path="/login">
                <Logo />
                <Login />
                <Footer />
            </Route>
            <Route path="/contact">
                <Logo />
                <Contact />
                <Footer />
            </Route>
            <Route path="/">
                <Navbar />
                <Home />
                <Footer />
            </Route>
        </Switch>
    </div>
}

export default App;