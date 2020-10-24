import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { history } from "./history";
import NotFound from "./pages/notFound/index";
import AllArticles from "./pages/allArticles/index";
import Article1 from "./pages/allArticles/article1/index";
import Help from "./pages/help/index";
import Tutorial from "./pages/tutorial/index";
import News from "./pages/news/index";
import About from "./pages/about/index";
import More from "./pages/more/index";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={AllArticles} />
          <Route path="/article1" exact component={Article1} />
          <Route path="/help" exact component={Help} />
          <Route path="/tutorial" exact component={Tutorial} />
          <Route path="/news" exact component={News} />
          <Route path="/about" exact component={About} />
          <Route path="/more" exact component={More} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
