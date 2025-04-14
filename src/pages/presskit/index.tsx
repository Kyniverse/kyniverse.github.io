import { Component } from "solid-js";
import { Default } from "@/layouts";

import { Header } from "@/components/header";
import { SpaceR } from "@/components/spacr";
import { QABox } from "@/components/qaBox";

import imgLogoWhite_x512 from "@/public/presskit/LogoWhiteBgTransparent@512.png";
import imgLogoWhite_x1024 from "@/public/presskit/LogoWhiteBgTransparent@1024.png";

import imgLogoLight_x512 from "@/public/presskit/LogoLightBgDark@512.png";
import imgLogoLight_x1024 from "@/public/presskit/LogoLightBgDark@1024.png";

import imgLogoDark_x512 from "@/public/presskit/LogoDarkBgLight@512.png";
import imgLogoDark_x1024 from "@/public/presskit/LogoDarkBgLightk@1024.png";

import imgPoster from "@/public/presskit/Poster@A3_300dpi.png";

import "./style.scss";
import { Footer } from "@/components/footer";

export const Presskit: Component = () => {
  return(<Default class={"page presskit"}>
    <Header visible={true} />

    <SpaceR height="128px" />

    <div class="wrap">
      <h1 class="txt center">PRESSKIT</h1>
      <h2 class="txt center">Afbeeldingen & Informatie</h2>
    </div>

    <SpaceR height="64px" />

    <div class="pure-g wrap">

      <div class="pure-u-1-1 pure-u-md-1-2">
        <div class="inner square">
          <img src={imgLogoWhite_x512} class="image"/>
        </div>
      </div>

      <div class="pure-u-1-1 pure-u-md-1-2">
        <div class="inner square">
          <img src={imgLogoLight_x512} class="image"/>
        </div>
      </div>

      <div class="pure-u-1-1 pure-u-md-1-2">
        <div class="inner square">
          <img src={imgLogoDark_x512} class="image"/>
        </div>
      </div>

      <div class="pure-u-1-1">
        <div class="inner">
          <img src={imgPoster} class="image"/>
        </div>
      </div>

    </div>

    <SpaceR height="64px" />

    <Footer />
  </Default>);
}