import { Component, mergeProps, onMount } from "solid-js";
import "./style.scss";

export interface ButtonProps {
    class?: string
    href?: string
    onClick?: (e: MouseEvent) => void
    text: string
}

export const Button: Component<ButtonProps> = (props) => {
    if (props.href) {
        return (
            <a href={props.href} class={`button ${props.class}`}>
                {props.text}
            </a>
        )
    } else {
        return (
            <button onClick={props.onClick} class={`button ${props.class}`}>
                {props.text}
            </button>
        )
    }
}