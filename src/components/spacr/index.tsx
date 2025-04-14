import { Component } from "solid-js"

export interface SpaceRProps {
  height?: string;
}

export const SpaceR: Component<SpaceRProps> = (props) => {
  return(
    <div class="SpaceR" style={{ margin: "unset", padding: "unset", width: "100%", height: `${props.height}`}}></div>
  )
}