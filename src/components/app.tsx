import React from "react";
import { HashRouter as Router, Route} from "react-router-dom";
import Internal from "./testInterface"

function BasicExample() {
  return (
    <Router>
        <Route path="/test/:id" component={Internal} />
    </Router>
  );
}
export default BasicExample;
