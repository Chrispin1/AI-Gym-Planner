import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Profiles from "./pages/Profiles";
import Account from "./pages/Account";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/auth/:pathname" element={<Auth />} />
        <Route path="/account/:pathname" element={<Account />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
