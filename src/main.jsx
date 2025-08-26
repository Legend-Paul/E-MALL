import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import "./assets/variables.css";

import ErrorPage from "./ErrorPage";
import Header, { Action as headerAction } from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import SignIn, { Action as signInAction } from "./pages/account/sign-in";
import SignUp from "./pages/account/sign-up";
import Account from "./pages/account/account";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                element={<Header />}
                errorElement={<ErrorPage />}
                action={headerAction}
            >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/account" element={<Account />}>
                    <Route
                        index
                        // path="sign-in"
                        element={<SignIn />}
                        action={signInAction}
                    />
                    <Route
                        path="sign-up"
                        element={<SignUp />}
                        // action={signInAction}
                    />
                    <Route
                        path="sign-in"
                        element={<SignIn />}
                        action={signInAction}
                    />
                </Route>
            </Route>
        </>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={routes} />
    </StrictMode>
);
