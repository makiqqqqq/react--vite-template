import { Suspense } from "react";
import { routes } from "./utils/routes.tsx";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <h1>This is the home page</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>}
            />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
