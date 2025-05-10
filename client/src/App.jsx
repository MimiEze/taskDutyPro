import { Toaster } from "sonner";
import AppRoutes from "./routes/AppRoutes";
import AuthProvider from "./store/AuthProvider";

function App() {
  return (
    <>
      < Toaster richColors />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  );
}

export default App;
