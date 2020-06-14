import styled from 'styled-components';

export const BackScreen = styled.div`
  margin: 30px auto;
  max-width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 22px;
    color: #128C7E;
  }
`;

export const FormSignUp = styled.form`
  margin: 10px auto;
  text-align: center;
  max-width: 320px;

  h1 {
    font-size: 30px;
    color: #128C7E;
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
    border: 1px solid #25D366;
    padding: 15px;
    border-radius: 6px;
    margin-top: 20px;
  }

  input[type="text"] {
    margin-top: 120px;
  }

  button {
    width: 100%;
    background: #128C7E;
    color: #FFFFFF;
    padding: 12px;
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
      background: #FFFFFF;
      
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
  }

  button:hover {
    background: #128C56;
  }

  a {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    font-size: 14px;
    color: #999999;
    text-decoration: none;
    transition: 400ms;

    span {
      font-weight: 600;
      margin-left: 5px;
    }
  }

  a:hover {
    color: gray;
  }
  
`;
