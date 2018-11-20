import React from "react";
import { Router, Route, Switch } from "react-router";
import NumberInputPage from "./components/NumberInputPage";
import CustomTextInputPage from "./components/CustomTextInputPage";
import ResultPage from "./components/ResultPage";
import history from "./history";

const router = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={"/"} exact component={NumberInputPage} />
        <Route path={"/CustomTextInputPage"} component={CustomTextInputPage} />
        <Route path={"/ResultPage"} component={ResultPage} />
      </Switch>
    </Router>
  );
};

export default router;
