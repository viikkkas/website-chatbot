import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Shop from "./shop/Shop";
import Header from "./Header";
import Chatbot from "./chatbot/Chatbot";

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/shop" component={Shop} />
        <Chatbot />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
