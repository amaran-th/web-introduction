import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";

//local
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div>
        <div className="font-basic dark:bg-black dark:text-white">
          <MainLayout>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="/main" element={<Main />} />*/}
              </Routes>
            </Suspense>
          </MainLayout>
        </div>
      </div>
    </>
  );
}

export default App;
