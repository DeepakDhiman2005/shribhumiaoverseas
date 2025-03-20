import { useEffect } from "react";
import AppProvider from "./providers/AppProvider"
import Routing from "./routes/Routing"


function App() {
  useEffect(() => {
    const disableInspect = (e: any) => {
      if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73) || (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", (e) => e.preventDefault());
    document.addEventListener("keydown", disableInspect);

    return () => {
      document.removeEventListener("contextmenu", (e) => e.preventDefault());
      document.removeEventListener("keydown", disableInspect);
    };
  }, []);
  
  return (
    <>
      <AppProvider>
        <Routing />
      </AppProvider>
    </>
  )
}

export default App
