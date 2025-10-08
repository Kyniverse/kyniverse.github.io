import { Component } from "solid-js";
import "./style.scss";
import { Image } from "../image";
import { Button } from "../button";
import { SpacR } from "../spacr";
import { Container } from "../container";

export const Lander: Component = (props) => {
    return (
        <div class="main:lander">
            <Container class="">
                <picture class="background">
                    <source media="(min-width: 770px)" srcset="/assets/images/lander/desktop.png"></source>
                    <source media="(min-width: 568px)" srcset="/assets/images/lander/tablet.png"></source>
                    <source media="(min-width: 0em)" srcset="/assets/images/lander/mobile.png"></source>
                    <img src="/assets/images/lander/desktop.png" alt="" width="100%" height="100%"/>
                </picture>
                <Image class="logo" src="/assets/images/logo/LogoWhiteBgTransparent@512.png" atl="Logo GoedGestemd" />
                <SpacR height="50vh" />

                <Container class="lander:text">
                    <h1 class="txt:dark">DOE MEER MET MUZIEK</h1>
                    <p>Een initiatief om mensen met een liefde voor de muziek te verbinden voor ontwikkeling en een sociale toekomst.</p>
                    <Button class="gradient:b2pu hover:purple txt:light txt:hover:dark">
                        Hello World!
                    </Button>
                </Container>
            </Container>
        </div>
    );
}