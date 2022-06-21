import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Routers from "./constants/Routes";

import Loading from "./components/Loading";
import Ajuda from "./pages/Ajuda";
import Cadastro from "./pages/Cadastro";
import NotFound from "./pages/NotFound";
import API from './pages/API';
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const Game = React.lazy(() => import("./pages/Game"));

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route
            index
            exact
            path={Routers.LOGIN}
            element={
              <React.Suspense fallback={<Loading />}>
                <Login />
              </React.Suspense>
            }
          />
          <Route path={Routers.HELP} element={<Ajuda />} />
          <Route path={Routers.REGISTER} element={<Cadastro />} />
          <Route
            path={Routers.HOME}
            element={
              <React.Suspense fallback={<Loading />}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path={Routers.GAME}
            element={
              <React.Suspense fallback={<Loading />}>
                <Game />
              </React.Suspense>
            }
          ></Route>
          <Route
            exact
            path="/api"
            element={<React.Suspense fallback={<Loading />}>
              <API />
            </React.Suspense>}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
}
