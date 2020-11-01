import React from 'react'
import { Burger } from "./styles";

const Burger = () => {
  return (
    <StyleBurger>
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
              <ButtonA> Registro </ButtonA>
            </Button>
          </Li>
          <Li>
            <Button href="/">
              <ButtonA> Inicio </ButtonA>
            </Button>
          </Li>
        </List>

    </StyleBurger>
  )
}

export default Burger
