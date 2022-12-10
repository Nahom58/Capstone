import {
  Routes,
  Route
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import SignUp from "./pages/SignUp";
import PractitionerDetailsPage from "./pages/PractitionerDetailsPage";
import EditProfilePage from "./pages/EditProfilePage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<HomePage />}  path="/" />
        <Route element={<ResultsPage />}  path="/ResultsPage" />
        <Route element={<SignUp />}  path="/SignUp" />
        <Route element={<EditProfilePage />}  path="/EditProfile" />
        <Route element={<PractitionerDetailsPage />} path="/PractitionerDetails/:id" />
      </Routes>
    </div>
  );
}

export default App;
