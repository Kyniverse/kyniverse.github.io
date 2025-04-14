/* @refresh reload */
import { Router, Route } from "@solidjs/router";
import { render } from "solid-js/web";
import { lazily } from "solidjs-lazily";
import { Component } from "solid-js";

import "normalize.css";
import "./App.scss";
import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";

const root = document.getElementById('root');
const { Home } = lazily(() => import('@/pages/home'));
const { Dev } = lazily(() => import('@/pages/dev'));
const { Presskit } = lazily(() => import('@/pages/presskit'));

const App: Component = () => {
  return (<>
    <Router>
      <Route path='/' component={Home} />
      <Route path='/dev' component={Dev} />
      <Route path='/presskit' component={Presskit} />
    </Router>
  </>);
}

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error('Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?');
}

render(() => <App />, root!);