import Link from "next/link";
import { Anchor, Nav, List, Figure, Div, Button, ButtonA } from "./styles";

const Navigation = () => {
  return (
    <Div>
      <Nav>
        <Figure>
        <img src="images/menu.png"
        height={50}
        alt="Logo de CheapFetch"
        />
      </Figure> 
        <List>
          <li>
            <Link href="/">
              <Anchor> Home </Anchor>
            </Link>
          </li>
          <li>
            <Link href="/categories">
              <Anchor> Categories </Anchor>
            </Link>
          </li>
          <li>
            <Link href="/stores">
              <Anchor> Stores </Anchor>
            </Link>
          </li>
          <li>
            <Button href="/stores">
              <ButtonA> Registro </ButtonA>
            </Button>
          </li>
          <li>
            <Button href="/">
              <ButtonA> Inicio </ButtonA>
            </Button>
          </li>
        </List>
      </Nav>
    </Div>
  );
};

export default Navigation;
