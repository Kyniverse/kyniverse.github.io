import { LayoutDefault } from "@/layouts";
import { Lander } from "@/components/lander";
import { Container } from "@/components/container";
import { SpacR } from "@/components/spacr";

export default function Index() {
  return (
    <LayoutDefault class="home">
      <Lander />

      <Container >
        <h1 class="txt dark">Event</h1>
        <p class="txt dark size20">
          Op 29 Augustus zal de 2de Jam-Together van Goed Gestemd plaatsvinden! Benieuwd wat
          er allemaal te verwachten staat? Neem dan snel een kijkje!
        </p>
        <SpacR height="16px"/>
        <a class="button purple txt light size20" href="/event">
          LEES MEER
        </a>
      </Container>

      <SpacR height="512px"/>

    </LayoutDefault>
  )
}