import { Component } from "solid-js";
import "./style.scss";
import { Image } from "../image";

export const Lander: Component = (props) => {
    return (
        <div class="main:lander">
            <div class="top">
                <div class="inner">
                    <picture class="main:image background">
                        <source media="(min-width: 770px)" srcset="/assets/images/lander/desktop.png"></source>
                        <source media="(min-width: 568px)" srcset="/assets/images/lander/tablet.png"></source>
                        <source media="(min-width: 0em)" srcset="/assets/images/lander/mobile.png"></source>
                        <img src="/assets/images/lander/desktop.png" alt="" width="100%" height="100%"/>
                    </picture>
                    <Image class="logo" src="/assets/images/logo/LogoWhiteBgTransparent@512.png" atl="Logo GoedGestemd" />
                </div>
            </div>

            <div class="bottom">
                <h2 class="txt dark">MUZIKALE ONTWIKKELING</h2>
                <p>Een initiatief om mensen met een liefde voor de muziek te verbinden voor ontwikkeling en een sociale toekomst.</p>
                <button>LEES MEER</button>
            </div>
        </div>
    );
}