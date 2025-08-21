import { Component, mergeProps, onMount } from "solid-js";
import "./style.scss";

export interface HeaderProps {
    visible?: boolean
}

export const Header: Component<HeaderProps> = (props) => {
    let _props = mergeProps({ visible: false }, props);
    let _reference;

    return (
        <header ref={_reference} class={`global:header ${_props.visible ? 'visible' : ''}`}>
            <div class="inner pure-g">
                <div class="left">
                    <h1>Goed Gestemd</h1>
                </div>
                <div class="right">
                    <h2>Menu</h2>
                </div>
            </div>
        </header>
    );
}