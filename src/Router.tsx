import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ApptToolbar from "./components/appToolbar/AppToolbar";

const Router = () => {
  return (
    <BrowserRouter>
      <ApptToolbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
