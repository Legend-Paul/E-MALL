import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import "./assets/variables.css";

import ErrorPage from "./errorPage";
import Header, { Action as headerAction } from "./components/header";
import Home, { Loader as homeLoader } from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import SignIn, { Action as signInAction } from "./pages/account/sign-in";
import SignUp, { Action as signUpAction } from "./pages/account/sign-up";
import Account from "./pages/account/account";
import ForgotPassword, {
    Action as forgotPassworAction,
} from "./pages/account/forgot-password";
import Product, { Loader as productLoader } from "./pages/product/product";
import Cart, { Loader as cartLoader } from "./pages/cart/cart";
import CheckOut from "./pages/checkout/checkout";
import Orders from "./pages/order/orders";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Header />} errorElement={<ErrorPage />}>
                <Route
                    index
                    path="/"
                    element={<Home />}
                    action={headerAction}
                    loader={homeLoader}
                />
                <Route
                    path="/:id"
                    element={<Product />}
                    loader={productLoader}
                />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/account" element={<Account />}>
                    <Route index element={<SignIn />} action={signInAction} />
                    <Route
                        path="sign-up"
                        element={<SignUp />}
                        action={signUpAction}
                    />
                    <Route
                        path="sign-in"
                        element={<SignIn />}
                        action={signInAction}
                    />
                    <Route
                        path="forgot-password"
                        element={<ForgotPassword />}
                        action={forgotPassworAction}
                    />
                </Route>
                <Route path="/cart" element={<Cart />} loader={cartLoader} />
                <Route path="/cart/checkout" element={<CheckOut />} />
                <Route path="/orders" element={<Orders />} />
            </Route>
        </>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={routes} />
    </StrictMode>
);
