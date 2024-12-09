import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "@/components/Login/SignUp";
import Login from "@/components/Login/Login";
import Dashboard from "@/components/Dashboard/Dashboard";
import { useAuth } from "@/hooks/use-auth";

export const AllRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
