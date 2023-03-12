import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hithem from "./page2/hithem";
import Comp from "./page3/comp";
function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hithem></Hithem>}></Route>
        <Route path="/content" element={<Comp></Comp>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Layout;
