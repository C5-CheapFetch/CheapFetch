import React from "react";

const LoginComponent = () => {
  return (
    <div>
      <header className="header">
        <img
          className="header__img"
          src="public/images/alfa-romeo.svg"
          alt="logo"
          width="50px"
        />
      </header>
      <section className="login">
        <section className="login__container">
          <h2>Inicia Sesion</h2>
          <form className="login__container-form">
            <input className="input" type="text" placeholder="Correo" />
            <input className="input" type="password" placeholder="Contraseña" />
            <button className="button">Iniciar Sesion</button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="box1" defaultValue="checkbox" />
                Recuerdame
              </label>
              <a href="http://">Olvidé mi Contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div>
              <img src="public/images/icons8-twitter-48.png" alt="twitter" />
              Inicia Sesión con Twitter
            </div>
            <div>
              <img src="public/images/icons8-google-48.png" alt="google" />
              Inicia sesión con Google
            </div>
          </section>
          <p className="login__container--register">
            No tienes ninguna cuenta
            <a href="register.html">Regístrate</a>
          </p>
        </section>
      </section>
      <footer className="footer">
        <a href="/">Términos de Uso</a>
        <a href="/">Declaración de Privacidad</a>
        <a href="/">Centro de Ayuda</a>
      </footer>
    </div>
  );
};

export default LoginComponent;
