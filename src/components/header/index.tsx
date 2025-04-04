import { Component } from "solid-js"
import { A } from "@solidjs/router";
import "./style.scss";

export const Header: Component = () => {
  return (
    <header class="header">
      <div class="wrapper">
        <h1 class="title">Goed Gestemd</h1>
        <nav class="navigation">
          <A href="/" end={true}>HOME</A>
          <A href="/" end={true}>ABOUT</A>
        </nav>
      </div>
    </header>
  );
}