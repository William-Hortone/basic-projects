import { useEffect, useState } from "react";
import "./App.css";
import Preloader from "./Preloader";

function App() {
  const [showPreloader, setPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 3000);
  }, []);

  return (
    <>
      {showPreloader && <Preloader />}

      {!showPreloader && (
        <div>
          <h1>Welcome to the dashboard</h1>
        </div>
      )}
    </>
  );
}

export default App;
