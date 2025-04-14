import { Component } from "solid-js"

export interface LayoutDefault {
    class?: string
    children?: any
}

export const Default: Component<LayoutDefault> = (props) => {
    return (<main class={props.class}>
        {props.children}
    </main>);
}