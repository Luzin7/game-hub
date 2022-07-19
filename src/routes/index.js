import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Path from "../utils/pathNames";

import Loading from "../components/Loading";
import Help from "../pages/Help";
import Register from "../pages/Register";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import ValorantAgents from "../pages/ValorantAgents";
import Agent from "../pages/Agent";
import RecoverLogin from "../pages/RecoverLogin";
const Home = React.lazy(() => import("../pages/Home"));
const Login = React.lazy(() => import("../pages/Login"));
const Game = React.lazy(() => import("../pages/Game"));

function Index() {
  return (
    <Router>
      <Routes>
        <Route
          index
          exact
          path={Path.LOGIN}
          element={
            <React.Suspense fallback={<Loading />}>
              <Login />
            </React.Suspense>
          }
        />
        <Route path={Path.HELP} element={<Help />} />
        <Route path={Path.REGISTER} element={<Register />} />
        <Route path={Path.RECOVER_LOGIN} element={<RecoverLogin />} />
        <Route path={Path.ABOUT} element={<About />} />
        <Route
          path={Path.HOME}
          element={
            <React.Suspense fallback={<Loading />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path={Path.GAME}
          element={
            <React.Suspense fallback={<Loading />}>
              <Game />
            </React.Suspense>
          }
        >
          <Route path={Path.AGENTS} element={<ValorantAgents />} />
        </Route>

        <Route
          path={Path.AGENT}
          element={
            <React.Suspense fallback={<Loading />}>
              <Agent />
            </React.Suspense>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default Index;
