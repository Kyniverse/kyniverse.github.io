import { LayoutDefault } from "@/layouts";
import { Lander } from "@/components/lander";
import { Container } from "@/components/container";
import { SpacR } from "@/components/spacr";
import { Image } from "@/components/image";
import { Button } from "@/components/button";

export default function Index() {
  return (
    <LayoutDefault class="home">
      {/* <Lander /> */}

      <Container>
        <SpacR height="256px" />
        <Button text="LEES MEER" class="hover:gradient:b2pu txt:dark txt:hover:dark"/>
        <Button text="LEES MEER" class="blue hover:red txt:dark txt:hover:dark"/>
        <Button text="LEES MEER" class="test txt:dark txt:hover:dark"/>
      </Container>

    </LayoutDefault>
  )
}