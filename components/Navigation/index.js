import Link from "next/link";
import { Anchor, Nav, List } from "./styles";

const Navigation = () => {
  return (
    <Nav>
      <List>
        <li>
          <Link href="/login">
            <Anchor> Login </Anchor>
          </Link>
        </li>
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
        {/* <li>
          <Link href="/">
            <Anchor> About </Anchor>
          </Link>
        </li> */}
        <li>
          <Link href="/stores">
            <Anchor> Stores </Anchor>
          </Link>
        </li>
      </List>
    </Nav>
  );
};

export default Navigation;
