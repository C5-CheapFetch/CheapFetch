import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  background-color: #fac5c5;
`;

export const Header__img = styled.img`
  width: 100px;
  margin-left: 30px;
`;

export const Login = styled.div`
  background: linear-gradient(#fac5c5, #0000);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 30px;
  min-height: calc(100vh - 200px);
`;

export const Login__container = styled.section`
  border: 2px solid #fac5c5;
  border-radius: 40px;
  color: #1c1c1c;
  padding: 60px 68px 40px;
  min-height: 700px;
  width: 300px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  box-shadow: 0px 0px 5px 5px #1c1c1c;
`;

export const Login__container_form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #1c1c1c;
`;

export const Login__container__remember_me = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #1c1c1c;
`;

export const Login__container__social_media = styled.div`
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Login__container__register = styled.p`
  font-size: 14px;
`;

export const Login__container__register_a = styled.a`
  color: #1c1c1c;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
`;

export const Input = styled.input`
  background-color: transparent;
  border-left: 0px;
  border-top: 0px;
  border-right: 0px;
  border-bottom: 2px solid #1c1c1c;
  margin-bottom: 20px;
  padding: 20px 0px;
  outline: none;
`;

export const Button = styled.button`
  background-color: #1c1c1c;
  color: white;
  height: 40px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.5px;
  margin: 10px 0px;
`;

export const Login__social_media__img = styled.img`
  width: 30px;
  margin-right: 10px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
`;

export const Footer__a = styled.a`
  text-decoration: none;
  color: #1c1c1c;
  cursor: pointer;
  font-size: 14px;
  padding-left: 30px;
`;

export const Login__container__remember_me_a = styled.a`
  color: #1c1c1c;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
`;

//**
//@media only screen and (max-width: 600px) {
//.login__container {
//background-color: transparent;
//padding: 15px;
//width: 100%;
//}

//.footer {
//align-items: flex-start;
//flex-direction: column;
//}
//}
