import { Component } from "solid-js";
import { Default } from "@/layouts";

import { Header } from "@/components/header";
import { QABox } from "@/components/qaBox";

import "./style.scss";
import imgLogo from "@/public/presskit/LogoWhiteBgTransparent@1024.png";
import imgColor from "@/public/Colours.png";

export const Home: Component = () => {
  return(<Default class={"page home"}>
    <Header visible={true} />
    <div class="cover">
      <img src={imgColor} alt="Fancy colours" class="colors"/>

      <div class="logo">
        <img src={imgLogo} alt="Logo Goed Gestemd" class="image"/>
      </div>
    </div>
  </Default>);
}