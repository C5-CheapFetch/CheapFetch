import { initAuth0 } from "@auth0/nextjs-auth0";
import { FaProcedures } from "react-icons/fa";

// Se genera la instancia de auth0 con todas la props que necesitará
export default initAuth0({
  domain: process.env.domain,
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  scope: "openid profile",
  redirectUri: process.env.redirectUri,
  postLogoutRedirectUri: process.env.postLogoutRedirectUri,
  //Una vez que el usuario inicie sesión, proveerá al back de sus credenciales para generar una cookie correspondiente a sus sesión
  session: {
    cookieSecret: process.env.cookieSecret,
    cookieLifetime: 60 * 60 * 8,
    storeIdToken: false,
    storeAccessToken: false,
    storeRefreshToken: false,
  },
  oidcClient: {
    httpTimeout: 2500,
    clockTolerance: 10000,
  },
});
