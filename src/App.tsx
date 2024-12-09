import { Toaster } from "./components/ui/toaster";
import { BrowserRouter as Router } from "react-router-dom";
import { AllRoutes } from "./routes/Routes";
import { AuthProvider } from "./context/auth-context";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <AuthProvider>
          <AllRoutes />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
