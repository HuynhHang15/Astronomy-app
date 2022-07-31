import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import { publicRoutes } from "./routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page/>
                  </DefaultLayout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
