import { Component } from "solid-js";

import "./style.scss";

export interface ContainerProps {
    class?: string
    children?: any
}

export const Container: Component<ContainerProps> = (props) => {
    return (
        <section class={`container pure-g ${props.class}`}>
            { props.children }    
        </section>
    )
}