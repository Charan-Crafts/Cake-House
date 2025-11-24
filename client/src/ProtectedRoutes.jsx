import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = ({ isAuthenticated, user, children }) => {
    const location = useLocation();

    // If user is not authenticated and trying to access protected routes
    if (!isAuthenticated && (location.pathname.includes("cake-house") || location.pathname.includes("admin"))) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If user is authenticated and trying to access login/register pages
    if (isAuthenticated && (location.pathname === "/login" || location.pathname === "/register")) {
        if (user?.role === "admin") {
            return <Navigate to="/admin" replace />;
        } else {
            return <Navigate to="/cake-house" replace />;
        }
    }

    // If user is authenticated but trying to access wrong role page
    if (isAuthenticated && user) {
        // Admin trying to access cake-house
        if (user.role === "admin" && location.pathname.includes("cake-house")) {
            return <Navigate to="/admin" replace />;
        }
        
        // Regular user trying to access admin panel
        if (user.role !== "admin" && location.pathname.includes("admin")) {
            return <Navigate to="/cake-house" replace />;
        }
    }

    // All checks passed, render children
    return <>{children}</>;
}

export default ProtectedRoutes;