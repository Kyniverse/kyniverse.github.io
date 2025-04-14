import { Component, onMount } from "solid-js"
import { A } from "@solidjs/router";
import "./style.scss";

export const Header: Component = () => {
  let _reference;

  onMount(() => {
    window.addEventListener('scroll', () => {
      let _offset = window.pageYOffset;
      let _threshold = _offset > (window.innerHeight * 0.66);
      _reference.classList.toggle('visible', _threshold);
    });
  });

  return (
    <header class="header" ref={_reference}>
      <div class="wrapper">
        <h1 class="title">Goed Gestemd</h1>
        <nav class="navigation">
          <A href="/" end={true} class="button">HOME</A>
          <A href="/" end={true} class="button">ABOUT</A>
        </nav>
      </div>
    </header>
  );
}
