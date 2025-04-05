import { Component } from "solid-js";
import { Default } from "@/layouts";

import "./style.scss";
import imgLogo from "@/public/GoedGestemdLogoX1024.png";
import imgColor from "@/public/Colours.png";

export const Home: Component = () => {
  return(<Default class={"page home"}>

    <div class="cover">

      <img src={imgColor} alt="Logo Goed Gestemd" class="colors"/>

      <div class="logo">
        <img src={imgLogo} alt="Logo Goed Gestemd" class="image"/>
      </div>
    </div>
    
  </Default>);
}