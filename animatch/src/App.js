import React from "react";
import routes from "./routes.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((config, i) => (
          <Route key={i} {...config} />
        ))}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
