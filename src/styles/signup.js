import styled from "styled-components"
import { Link } from "gatsby"

export const BackScreen = styled.div`
  margin: 30px auto;
  max-width: 320px;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;

    strong {
      font-size: 22px;
      color: #128c7e;
    }
  }
`

export const FormSignUp = styled.form`
  margin: 10px auto;
  text-align: center;
  max-width: 320px;

  h1 {
    font-size: 30px;
    color: #128c7e;
  }

  p {
    font-size: 16px;
    color: #999999;
    padding: 15px;
    line-height: 24px;

    span {
      font-weight: bold;
    }
  }

  input {
    width: 90%;
    border: 1px solid #25d366;
    padding: 15px;
    border-radius: 6px;
    margin-top: 20px;
  }

  input[type="text"] {
    margin-top: 120px;
  }

  a {
    text-decoration: none;
  }
`
export const Linking = styled(Link)`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    font-size: 14px;
    color: #999999;
    transition: 400ms;

    span {
      font-weight: 600;
      margin-left: 5px;
    }

    &:hover {
      color: gray;
    }
  }
`

export const ButtonLink = styled(Link)`
  background: #128c7e;
  color: #ffffff;
  padding: 15px;
  border: 0;
  border-radius: 6px;
  margin-top: 20px;
  transition: 400ms;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background: #128c56;
  }
`
