import { Component } from "solid-js"
import { Header } from "@/components/header";

export const Default: Component = (props) => {
    return (<main>
        <Header />
        {props.children}
    </main>);
}