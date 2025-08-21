import { LayoutDefault } from "@/layouts";
import "./style.scss";
import { Image } from "@/components/image";
import { Container } from "@/components/container";
import { SpacR } from "@/components/spacr";

export default function PageEvent() {
    return (
        <LayoutDefault class="event">
            <Container class="cover">
                <div class="top pure-g">
                    <Image class="logo" src="/assets/images/logo/LogoWhiteBgTransparent@512.png" atl="Logo GoedGestemd" />
                    <Image class="circle" src="/assets/images/event/circle.png" atl="circle" />
                    <Image class="swirl" src="/assets/images/event/swirl.png" atl="swirl" />
                </div>
                <div class="bottom pure-g">
                    {/* <SpacR height="128px"/> */}
                    <Image class="blob" src="/assets/images/event/blob.png" atl="blob1" />
                    <Image class="blob3" src="/assets/images/event/blob3.png" atl="swirl" />
                    <Image class="blob2" src="/assets/images/event/blob2.png" atl="blob2" />
                    <Image class="title" src="/assets/images/event/text.png" atl="text" />
                    <SpacR height="96px"/>
                    <a class="button txt center bold" href="#info">
                        LEES MEER
                    </a>
                </div>
            </Container>

            <Container class="info">
                <SpacR height="256px" />
                <p class="txt size20 light left" id="info">
                    Vrijdag 29 Augustus om 19:30 is het weer zo ver! De 2de editie van Goed Gestemd's Jam-Together! Het perfecte
                    excuus om te netwerken met andere muzikanten, samen te jammen en gelijkgestemden te ontmoeten.
                    <br/>
                    <br/>
                    Het zal dit keer weer plaatsvinden in Wijkhuis De Lier vanaf 19:30 en iedereen is 
                    welkom! Breng je gitaar mee, warm je stem op of laat andere zien wat jouw favoriete
                    nummers zijn!
                </p>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621.229270814075!2d5.683248282245107!3d51.47803626617841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c72396d051d36f%3A0x5cf17b0589fb9a5c!2sWijkhuis%20de%20Lier!5e0!3m2!1snl!2snl!4v1744629858749!5m2!1snl!2snl" 
                    height="360" 
                    style="border:0; border-radius: 16px; box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.1); margin: 32px; width: calc(100% - 64px);"
                    allowfullscreen={true}
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                <SpacR height="32px" />
            </Container>

            <Container class="faq">
                <div class="qabox">
                    <h2>Is er een aanmeldingsprocedure?</h2>
                    <p>Nee, je mag tijdens de volledig durende Jam-Together ten alle tijden binnen lopen!</p>
                </div>

                <div class="qabox">
                    <h2>Mag ik een instrument meenemen?</h2>
                    <p>
                        Ja, je mag een instrument meenemen al is dit wel op eigen risico. Ook vragen
                        we je de grootte te beperken. Heb je een elektrisch instrument zoals een bas/gitaar?
                        Dan zal je zelf je apparatuur mee moeten nemen in de vorm van draagbare versterkers 
                        op batterijen. Wij verlenen geen aansluitingen. Houdt ook rekening met mede gasten.
                    </p>
                </div>

                <div class="qabox">
                    <h2>Is er een entrée prijs?</h2>
                    <p>
                        Nee, het evenement is gratis toegankelijk.
                    </p>
                </div>

                <div class="qabox">
                    <h2>Is er een leeftijds classificatie aan gebonden?</h2>
                    <p>
                        Nee, iedereen van allen leeftijden is welkom.
                    </p>
                </div>

                <div class="qabox">
                    <h2>Ik bespeel geen instrument en/of productie, ben ik toch welkom?</h2>
                    <p>
                        Ja, absoluut! De Jam-Together is voor alle muziekliefhebbers en is eigenlijk 
                        gewoon een netwerkborrel. Of je nou zelf muziek maakt of alleen luistert, 
                        iedereen is welkom om te socialiseren.
                    </p>
                </div>

                <div class="qabox">
                    <h2>Ik houd meer van genre XYZ, is dit evenement wel voor mij?</h2>
                    <p>
                        Ja, de Jam-Together is voor iedereen met een liefde voor muziek, ongeacht je
                        muzikale achtergrond of interesses. Het doel is om mensen te verbinden.
                    </p>
                </div>
            </Container>

            <SpacR height="64px" />
            <footer class="footer">
                Copyright © 2025 Goed Gestemd
            </footer>
        </LayoutDefault>
    );
}