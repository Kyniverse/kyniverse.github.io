import { Component, JSX, mergeProps, onMount } from "solid-js"
import { A } from "@solidjs/router";
import "./style.scss";

export interface HeaderProps {
  visible?: boolean
}

export const Header: Component<HeaderProps> = (props) => {
  let _props = mergeProps({ visible: false }, props);

  let _reference;

  onMount(() => {
    if (_props.visible) return;

    window.addEventListener('scroll', () => {
      let _offset = window.pageYOffset;
      let _threshold = _offset > (window.innerHeight * 0.66);
      _reference.classList.toggle('visible', _threshold);
    });
  });

  return (
    <header class={`header ${_props.visible ? 'visible' : ''}`} ref={_reference}>
      <div class="wrapper">
        <h1 class="title">Goed Gestemd</h1>
        <nav class="navigation">
          <A href="/" end={true} class="button">HOME</A>
          <A href="/presskit" end={true} class="button">PRESSKIT</A>
        </nav>
      </div>
    </header>
  );
}
