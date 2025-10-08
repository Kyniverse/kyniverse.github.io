import { LayoutDefault } from "@/layouts";
import { Lander } from "@/components/lander";
import { Container } from "@/components/container";
import { SpacR } from "@/components/spacr";
import { Image } from "@/components/image";
import { Button } from "@/components/button";

export default function Index() {
  return (
    <LayoutDefault class="home">
      <Lander />

      <Container>
        <SpacR height="256px" />
        <Button class="hover:gradient:b2pu txt:dark txt:hover:dark">LEES MEER</Button>
        <Button class="blue hover:red txt:dark txt:hover:dark">LEES MEER</Button>
        <Button class="test txt:dark txt:hover:dark">LEES MEER</Button>
      </Container>

    </LayoutDefault>
  )
}