import React from "react"
import { SEO } from "../components"
import * as S from "../styles/signin"
import ImageLogin from "../images/login.svg"

const LoginPage = () => (
  <>
    <SEO title="login" />
    <S.FormSignIn>
      <h1>Bem vindo(a)</h1>
      <p>A plataforma criada para beneficio dos caminhoneiros.</p>
      <div>
        <img src={ImageLogin} />
      </div>
      <input
        type="number"
        name="phone"
        id="phone"
        placeholder="+55 99999-9999"
      />
      <br />
      <S.ButtonLink to="/news">ENTRAR</S.ButtonLink>
      <S.Linking to="/signup">
        Primeira vez aqui?<span> Cadastre-se</span>
      </S.Linking>
    </S.FormSignIn>
  </>
)

export default LoginPage
