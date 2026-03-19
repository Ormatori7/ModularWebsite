import { useState } from "react";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Pages/Home";
import { ModelPage } from "./Pages/PageModel";
import { TexturePage } from "./Pages/PageTexture";

function App() {
  const [page, setPage] = useState("Home");

  return (
    //les functions des pages
    <>
      <NavBar page={page} setPage={setPage} />

      {page === "Home" && <Home setPage={setPage} />}
      
      {page === "Model" && <ModelPage />}
      
      {page === "Texture" && <TexturePage />}
      
    </>
  );
}

export default App;
