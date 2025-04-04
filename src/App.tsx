/* @refresh reload */
import { Router, Route } from "@solidjs/router";
import { render } from "solid-js/web";
import { lazily } from "solidjs-lazily";
import { Component } from "solid-js";

const root = document.getElementById('root');
const { Home } = lazily(() => import('@/pages/home'));

const App: Component = () => {
  return (<>
    <Router>
      <Route path='/' component={Home} />
    </Router>
  </>);
}

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error('Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?');
}

render(() => <App />, root!);