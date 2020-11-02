import Link from "next/link";
import { Anchor, List, Button, ButtonA, Li } from "./styles";
import { useFetchUser } from "../../utils/user";

const RightNav = () => {
  const { user, loading } = useFetchUser();
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
      {user && !loading
        ? [
            <Li key="/api/logout">
              <Link href="/api/logout">
                <Anchor> Log Out </Anchor>
              </Link>
            </Li>,
            <Li key="/api/me">
              <Link href="/api/me">
                <Anchor> Profile </Anchor>
              </Link>
            </Li>,
          ]
        : null}
      {!user && !loading ? (
        <Li key="/api/login">
          <Link href="/api/login">
            <Anchor> Log In </Anchor>
          </Link>
        </Li>
      ) : null}
    </List>
  );
};

export default RightNav;
