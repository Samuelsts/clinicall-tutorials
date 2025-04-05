
// src/App.tsx

import { Routes, Route } from "react-router-dom";
import { InitialModal } from "./components/Modal/InitialModal";
import WebVersion from "./pages/WebVersion/WebVersion";
import DesktopVersion from "./pages/DesktopVersion/DesktopVersion";

function App() {
  return (
    <>
      <InitialModal />
      <Routes>
        <Route path="/web" element={<WebVersion />} />
        <Route path="/desktop" element={<DesktopVersion />} />
      </Routes>
    </>
  );
}

export default App;