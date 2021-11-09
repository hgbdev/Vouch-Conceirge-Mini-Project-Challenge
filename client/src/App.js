import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteComponent from "Route";
import Loading from "components/Loading";

/**
 * App Component
 * @returns {JSX.Element}
 */
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading visible={true} />}>
        <RouteComponent />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
