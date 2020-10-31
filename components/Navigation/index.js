import Link from "next/link";
import { Anchor, Nav, List } from "./styles";

const Navigation = () => {
  return (
    <Nav>
      <List>
        <li>
          <Link href="/">
            <Anchor> Home </Anchor>
          </Link>{" "}
        </li>{" "}
        <li>
          <Link href="/categories">
            <Anchor> Categories </Anchor>
          </Link>{" "}
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
        <li key="/api/login">
          <Link href="/api/login">
            <Anchor> Login </Anchor>
          </Link>
        </li>
        <li key="/api/logout">
          <Link href="/api/logout">
            <Anchor> Logout </Anchor>
          </Link>
        </li>
        <li key="/api/me">
          <Link href="/api/me">
            <Anchor> Profile </Anchor>
          </Link>
        </li>
      </List>
    </Nav>
  );
};

export default Navigation;
