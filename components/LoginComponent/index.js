import React from "react";
import {
  Header,
  Header__img,
  Login,
  Login__container,
  Login__container_form,
  Login__container__remember_me,
  Login__container__remember_me_a,
  Login__container__social_media,
  Login__social_media__img,
  Login__container__register,
  Login__container__register_a,
  Input,
  Button,
  Footer,
  Footer__a,
} from "./styles";

const LoginComponent = () => {
  return (
    <div>
      <Header>
        <Header__img src="images/alfa-romeo.svg" alt="logo" width="50px" />
      </Header>
      <Login>
        <Login__container>
          <h2>Inicia Sesion</h2>
          <Login__container_form>
            <Input type="text" placeholder="Correo" />
            <Input className="input" type="password" placeholder="Contraseña" />
            <Button>Iniciar Sesion</Button>
            <Login__container__remember_me>
              <label>
                <Input type="checkbox" id="box1" defaultValue="checkbox" />
                Recuerdame
              </label>
              <Login__container__remember_me_a href="http://">
                Olvidé mi Contraseña
              </Login__container__remember_me_a>
            </Login__container__remember_me>
          </Login__container_form>

          <Login__container__social_media>
            <div>
              <Login__social_media__img
                src="images/icons8-twitter-48.png"
                alt="twitter"
              />
              Inicia Sesión con Twitter
            </div>
            <div>
              <Login__social_media__img
                src="images/icons8-google-48.png"
                alt="google"
              />
              Inicia sesión con Google
            </div>
          </Login__container__social_media>

          <Login__container__register>
            No tienes ninguna cuenta
            <Login__container__register_a>
              {" "}
              Regístrate{" "}
            </Login__container__register_a>
          </Login__container__register>
        </Login__container>
      </Login>

      <Footer>
        <Footer__a>Términos de Uso</Footer__a>
        <Footer__a>Declaración de Privacidad</Footer__a>
        <Footer__a>Centro de Ayuda</Footer__a>
      </Footer>
    </div>
  );
};

export default LoginComponent;
