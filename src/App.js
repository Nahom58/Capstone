import {
  Routes,
  Route
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import SignUp from "./components/auth/SignUp";
import PractitionerDetailsPage from "./pages/PractitionerDetailsPage";
import EditProfilePage from "./pages/EditProfilePage";
import SignIn from "./components/auth/SignIn";
import AuthDetails from "./components/AuthDetails";
import ViewProfilePage from "./pages/ViewProfilePage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<SignUp />}  path="/" />
        <Route element={<ResultsPage />}  path="/ResultsPage" />
        <Route element={<HomePage />}  path="/HomePage" />
        <Route element={<SignIn />}  path="/SignIn" />
        <Route element={<AuthDetails />}  path="/AuthDetails" />
        <Route element={<EditProfilePage />}  path="/EditProfile" />
        <Route element={<ViewProfilePage />}  path="/ViewProfile" />
        <Route element={<PractitionerDetailsPage />} path="/PractitionerDetails/:id" />
      </Routes>
    </div>
  );
}

export default App;
