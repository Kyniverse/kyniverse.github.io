import { Component } from "solid-js";
import { Default } from "@/layouts";

import { Header } from "@/components/header";
import { QABox } from "@/components/qaBox";

import "./style.scss";
import imgLogo from "@/public/GoedGestemdLogoX1024.png";
import imgColor from "@/public/Colours.png";

export const Dev: Component = () => {
  return(<Default class={"page dev"}>
    <Header />
    <div class="cover">
      <img src={imgColor} alt="Fancy colours" class="colors"/>

      <div class="logo">
        <img src={imgLogo} alt="Logo Goed Gestemd" class="image"/>
      </div>
    </div>

    <div id="mission" class="wrap" style="margin-bottom: 128px;">
      <h1 class="txt center dark">missie</h1>
      <p>
        GoedGestemd is een nieuw initiatief in Helmond dat muziekliefhebbers samenbrengt, zowel om hun muzikale interesses te delen als om een ondersteunende gemeenschap te vormen. In een tijd waarin digitalisering ons vaak afleidt en lokale ontmoetingen lastig zijn, biedt GoedGestemd een mogelijkheid voor netwerken en verbinding, ook voor diegenen die behoefte hebben aan een uitlaatklep zonder woorden.
      </p>
    </div>

    <div id="event" class="wrap" style="margin-bottom: 128px;">
      <h1 class="txt center dark">Get-Together</h1>
      <p>
        Op 9 Mei 2025 zal GoedGestemd de eerste Get-Together organiseren waarbij mensen hun muzikale netwerk kunnen uitbreiden. Het zal gehouden worden in Wijkhuis De Lier in Helmond
      </p>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621.229270814075!2d5.683248282245107!3d51.47803626617841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c72396d051d36f%3A0x5cf17b0589fb9a5c!2sWijkhuis%20de%20Lier!5e0!3m2!1snl!2snl!4v1744629858749!5m2!1snl!2snl" 
        height="360" 
        style="border:0; border-radius: 16px; box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.1); margin: 32px; width: calc(100% - 64px);"
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">

        </iframe>
    </div>

    <div id="faq" class="wrap">
      <h1 class="txt center dark">FAQ</h1>
      <QABox
        question="Is er een aanmeldingsprocedure?"
        answer="Nee, gedurende het evenement kan iedereen zonder aanmeldingen binnenlopen"
      />
      <QABox
        question="Mag ik een instrument meenemen?"
        answer="Ja, je mag een instrument meenemen. Wel op eigen risico. We vragen je om de grootte te beperken. Elektrische instrumenten? Neem dan zelf je apparatuur mee zoals draagbare verstekers, wij kunnen geen aansluitingen verlenen. En let op het geluid, zodat je andere gasten niet stoort."
      />
      <QABox
        question="Wat zijn de entree kosten?"
        answer="Er zijn geen entree kosten, het evenement is gratis om bij te wonen"
      />
      <QABox
        question="Is er een leeftijds classificatie aan gebonden?"
        answer="Nee, iedereen van allen leeftijden is welkom!"
      />
      <QABox
        question="Ik bespeel geen instrumenten, kan ik dan toch komen?"
        answer="Ja, het evenement is voor mensen die een liefde voor muziek hebben en graag anderen zouden willen ontmoeten"
      />
    </div>
  </Default>);
}