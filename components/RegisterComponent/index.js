import React from "react";

const RegisterComponent = () => {
  return (
    <div>
      <header class="header">
        <img
          class="header__img"
          src="public/images/alfa-romeo.svg"
          alt="logo"
          width="50px"
        />
      </header>
      <section class="login">
        <section class="login__container">
          <h2>Registrarse</h2>
          <form class="login__container-form">
            <input class="input" type="text" placeholder="Correo" />
            <input class="input" type="password" placeholder="Contraseña" />
            <button class="button">Iniciar Sesion</button>
            <div class="login__container--remember-me">
              <label>
                <input type="checkbox" id="box1" value="checkbox" />
                Recuerdame
              </label>
              <a href="http://">Olvidé mi Contraseña</a>
            </div>
          </form>
          <section class="login__container--social-media">
            <div>
              <img src="public/images/icons8-twitter-48.png" alt="twitter" />
              Inicia Sesión con Twitter
            </div>
            <div>
              <img src="public/images/icons8-google-48.png" alt="google" />
              Inicia sesión con Google
            </div>
          </section>
          <p class="login__container--register">
            No tienes ninguna cuenta
            <a href="register.html">Regístrate</a>
          </p>
        </section>
      </section>

      <footer class="footer">
        <a href="/">Términos de Uso</a>
        <a href="/">Declaración de Privacidad</a>
        <a href="/">Centro de Ayuda</a>
      </footer>
    </div>
  );
};

export default RegisterComponent;
