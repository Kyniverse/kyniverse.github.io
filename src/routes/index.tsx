import { LayoutDefault } from "@/layouts";
import { Lander } from "@/components/lander";
import { Container } from "@/components/container";
import { SpacR } from "@/components/spacr";
import { Image } from "@/components/image";

export default function Index() {
  return (
    <LayoutDefault class="home">
      <Lander />

      <Container class="event">
        <div class="pure-u-1-1 pure-u-md-1-2">
          <Image src="/assets/images/networking.png" atl=""></Image>
        </div>
        <div class="pure-u-1-1 pure-u-md-1-2" style="display: flex; flex-direction: column; justify-content: center;">
          <h2>NetwerkBorrel</h2>
          <SpacR height="16px"/>
          <p>Periodiek organiseert Goed Gestemd muzikale netwerkborrels waar je gelijkgestemden kunt ontmoeten</p>
          <SpacR height="16px"/>
          <a class="button purple txt light size20" style="width: fit-content;" href="/event">LEES MEER</a>
        </div>
      </Container>

      <Container class="lessons">
        <div class="pure-u-1-1 pure-u-md-1-2" style="display: flex; flex-direction: column; justify-content: center;">
          <h2>Muziekles</h2>
          <SpacR height="16px"/>
          <p>Altijd al een instrument willen leren? Goed Gestemd bied de mogelijkheid voor een lage instap</p>
          <SpacR height="16px"/>
          <a class="button purple txt light size20" style="width: fit-content;" href="/lessons">LEES MEER</a>
        </div>
        <div class="pure-u-1-1 pure-u-md-1-2">
          <Image src="/assets/images/lessons.png" atl=""></Image>
        </div>
      </Container>

      <Container class="studio">
        <div class="pure-u-1-2">
          <Image src="/assets/images/networking.png" atl=""></Image>
        </div>
        <div class="pure-u-1-2" style="display: flex; flex-direction: column; justify-content: center;">
          <h2>Studio</h2>
          <SpacR height="16px"/>
          <p>Goed Gestemd heeft een gemeenschapsaudio beschikbaar voor lessen, repetities, opnames en productie!</p>
          <SpacR height="16px"/>
          <a class="button purple txt light size20" style="width: fit-content;" href="/studio">LEES MEER</a>
        </div>
      </Container>
      <SpacR height="128px"/>

    </LayoutDefault>
  )
}