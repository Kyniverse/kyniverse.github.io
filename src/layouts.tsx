import { Component } from "solid-js";

export interface LayoutDefaultProps { 
    class?: string,
    children?: any
}

export const LayoutDefault: Component<LayoutDefaultProps> = (props) => {
    return (<main class={`routes ${props.class}`}>
        {props.children}
    </main>);
}