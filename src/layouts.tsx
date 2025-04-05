import { Component } from "solid-js"
import { Header } from "@/components/header";

export interface LayoutDefault {
    class?: string
    children?: any
}

export const Default: Component<LayoutDefault> = (props) => {
    return (<main class={props.class}>
        {/* <Header /> */}
        {props.children}
    </main>);
}