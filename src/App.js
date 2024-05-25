import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoute";
import { useEffect, useState } from "react";
import useLoading from "./utils/loadingUtil";

function App() {
  const { setLoadingState, isLoading } = useLoading();
  useEffect(()=>{
    setLoadingState(true);
    setTimeout(() => {
      setLoadingState(false);
    }, 1000);
  },[])

  return (
    <>
    {
      isLoading() ? <div>Loading...</div> : <div className="App">
       <RouterProvider router={router}>
      <div className="App">
      </div>
    </RouterProvider>
    </div>
    }
    </>
  );
}

export default App;
