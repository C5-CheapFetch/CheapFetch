import Link from "next/link";
import { Anchor, List, Button, ButtonA, Li } from "./styles";

const RightNav = () => {
  return (
        <List>
          <Li>
            <Link href="/">
              <Anchor> Home </Anchor>
            </Link>
          </Li>
          <Li>
            <Link href="/categories">
              <Anchor> Categories </Anchor>
            </Link>
          </Li>
          <Li>
            <Link href="/stores">
              <Anchor> Stores </Anchor>
            </Link>
          </Li>
          <Li>
            <Button href="/stores">
              <ButtonA> Registrarse </ButtonA>
            </Button>
          </Li>
          <Li>
            <Button href="/">
              <ButtonA> Inicio Sesion</ButtonA>
            </Button>
          </Li>
        </List>
  );
};

export default RightNav;
