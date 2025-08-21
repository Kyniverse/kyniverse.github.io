// import { createSignal } from "solid-js";
// import "./app.css";

// import { Component } from "solid-js";

// export default function App() {
//   const [count, setCount] = createSignal(0);

//   return (
//     <main>
//       <h1>Hello world!</h1>
//       <button class="increment" onClick={() => setCount(count() + 1)} type="button">
//         Clicks: {count()}
//       </button>
//       <p>
//         Visit{" "}
//         <a href="https://start.solidjs.com" target="_blank">
//           start.solidjs.com
//         </a>{" "}
//         to learn how to build SolidStart apps.
//       </p>
//     </main>
//   );
// }


// const App: Component = () => {

// }

import { Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";

import "./app.scss";
import "normalize.css";
import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";

import PageEvent from "./routes/event";

export default function App() {
  return (
    <PageEvent />
    // <Router root={(props) => <Suspense>{props.children}</Suspense>}>
    //   <FileRoutes />
    // </Router>
  );
}