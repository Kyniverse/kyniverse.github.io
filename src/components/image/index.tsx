import { Component, mergeProps } from "solid-js"

export interface ImageProps {
    class?: string
    src: string
    atl: string
}

export const Image: Component<ImageProps> = (props) => {
    return (
        <div class={`main:image ${props.class}`}>
            <img src={props.src} alt={props.atl} width="100%" height="100%"/>
        </div>
    )
}