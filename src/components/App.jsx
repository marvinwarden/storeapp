import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Cart from "./Cart";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Logo from "./Logo";
import Contact from "./Contact";
import ShoppingBasket from "./ShoppingBasket";



function App() {
    return <div>
        <Switch>
            <Route path="/login">
                <Logo />
                <Login />
                <Footer />
            </Route>
            <Route path="/contact">
                <Cart />
                <Logo />
                <Contact />
                <Footer />
            </Route>
            <Route path="/shoppingbasket">
                <Logo />
                <ShoppingBasket />
                <Footer />
            </Route>
            <Route path="/">
                <Navbar />
                <Cart />
                <Home />
                <Footer />
            </Route>
        </Switch>
    </div>
}

export default App;