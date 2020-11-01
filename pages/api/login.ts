import auth0 from "../../utils/auth0";

//Documentation to all the endpoints https://auth0.com/blog/ultimate-guide-nextjs-authentication-auth0/

//autenticarse
export default async function login(req, res) {
  try {
    await auth0.handleLogin(req, res, {});
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
