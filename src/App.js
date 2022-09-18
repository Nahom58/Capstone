import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import HomePage from "./pages/HomePage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<HomePage />}  path="/" />
      </Routes>
    </div>
  );
}

export default App;
