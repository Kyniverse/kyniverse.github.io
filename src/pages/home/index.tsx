import { Component } from "solid-js";
import { Default } from "@/layouts";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { QABox } from "@/components/qaBox";

import "./style.scss";
import imgLogo from "@/public/presskit/LogoWhiteBgTransparent@1024.png";
import imgColor from "@/public/Colours.png";
import { SpaceR } from "@/components/spacr";

export const Home: Component = () => {
  return(<Default class={"page home"}>
    <Header visible={false} />
    <div class="cover">
      <img src={imgColor} alt="Fancy colours" class="colors"/>

      <div class="logo">
        <img src={imgLogo} alt="Logo Goed Gestemd" class="image"/>
      </div>
    </div>

    <div id="mission" class="wrap">
      <p class="txt center dark" style="font-weight: 500; font-size: 16pt;">
        Goed Gestemd is een nieuw initiatief in Helmond dat muziekliefhebbers samenbrengt, zowel om hun muzikale interesses te delen als om een ondersteunende gemeenschap te vormen. In een tijd waarin digitalisering ons vaak afleidt en lokale ontmoetingen lastig zijn, biedt Goed Gestemd een mogelijkheid voor netwerken en verbinding, ook voor diegenen die behoefte hebben aan een uitlaatklep zonder woorden.
      </p>
    </div>

    <SpaceR height="128px" />

    <div id="event" class="wrap">
      <h1 class="txt center dark">Get-Together</h1>
      <p>
      GoedGestemd organiseert op 9 mei 2025 de eerste Get-Together in Wijkhuis De Lier in Helmond. Dit is dé gelegenheid voor muziekliefhebbers om hun netwerk uit te breiden. De inloop is vanaf 19:00 uur, waarna het evenement om 19:30 uur start met een korte openingstoespraak. Muzikanten zijn welkom om hun instrumenten mee te nemen, maar houd er rekening mee dat je zelf voor de benodigde apparatuur zorgt, zoals batterij- of accuversterkers of bluetooth-speakers. We vragen iedereen om het geluidsniveau te respecteren, zodat alle gasten van de avond kunnen genieten.
      </p>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621.229270814075!2d5.683248282245107!3d51.47803626617841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c72396d051d36f%3A0x5cf17b0589fb9a5c!2sWijkhuis%20de%20Lier!5e0!3m2!1snl!2snl!4v1744629858749!5m2!1snl!2snl" 
        height="360" 
        style="border:0; border-radius: 16px; box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.1); margin: 32px; width: calc(100% - 64px);"
        allowfullscreen={true}
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">

        </iframe>
    </div>

    <SpaceR height="128px" />

    <div id="faq" class="wrap">
      <h1 class="txt center dark">FAQ</h1>
      <QABox
        question="Moet ik me vooraf aanmelden?"
        answer="Nee, je kunt tijdens de Get-Together gewoon binnenlopen."
      />
      <QABox
        question="Mag ik een instrument meenemen?"
        answer="Ja, je mag een instrument meenemen. Wel op eigen risico. We vragen je om de grootte te beperken. Elektrische instrumenten? Neem dan zelf je apparatuur mee zoals draagbare versterkers, wij kunnen geen aansluitingen verlenen. En let op het geluid, zodat je andere gasten niet stoort."
      />
      <QABox
        question="Is de toegang gratis?"
        answer="Ja, het evenement is gratis toegankelijk."
      />
      <QABox
        question="Is er een leeftijds classificatie aan gebonden?"
        answer="Nee, iedereen van allen leeftijden is welkom!"
      />
      <QABox
        question="Ik speel geen instrument, ben ik toch welkom?"
        answer="Absoluut! De Get-Together is voor alle muziekliefhebbers, of je nu zelf muziek maakt, produceert, alleen luistert of fan bent van bands."
      />
      <QABox
        question="Ik ben fan van het genre XYZ, is dit evenement ook voor mij?"
        answer="Ja, iedereen is welkom, ongeacht je muzikale achtergrond of interesses."
      />
    </div>

    <SpaceR height="64px" />

    <div id="questions" class="wrap">
      <h1 class="txt center dark">vragen?</h1>
      <p class="txt center">
        Heeft u vragen of wilt u meer informatie? Stuur gerust een email naar <a href="mailto:goedgestemdhelmond@gmail.com">goedgestemdhelmond@gmail.com</a>
      </p>
    </div>

    <SpaceR height="128px" />

    <Footer />
  </Default>);
}