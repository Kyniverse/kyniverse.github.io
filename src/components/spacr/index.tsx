import { Component } from "solid-js"

export interface SpacRProps {
  height?: string;
}

export const SpacR: Component<SpacRProps> = (props) => {
  return(
    <div class="spacr" style={{ margin: "unset", padding: "unset", width: "100%", height: `${props.height}`}}></div>
  )
}