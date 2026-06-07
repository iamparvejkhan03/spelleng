import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AuthProvider } from './contexts/AuthContext.jsx';
import ThankYou from "./pages/ThankYou.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index path="" element={<Home />} />
                        <Route index path="/thank-you" element={<ThankYou />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    </StrictMode>
)