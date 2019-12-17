import React from "react";
import routes from "./routes.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((config, i) =>
          // <Route key={i} {...config} />
          console.log(config)
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
