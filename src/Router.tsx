import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Router = () => {
  // TODO Here we will implement the routing logic
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
