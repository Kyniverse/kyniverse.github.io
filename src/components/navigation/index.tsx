import { Component, mergeProps, onMount } from "solid-js";

export interface NavigationProps {
    visible?: boolean
}

export const Navigation: Component<NavigationProps> = (props) => {
    let _props = mergeProps({ visible: false }, props);
    let _reference = undefined;

    onMount(() => {

    });

    return (
        <nav ref={_reference} class={`main:navigation ${_props.visible ? 'visible' : ''}`}>
            
        </nav>
    )
}