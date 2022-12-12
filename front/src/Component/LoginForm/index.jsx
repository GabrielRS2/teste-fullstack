import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 19.39px;
  width: 100%;
  height: 100vh;
  max-width: 100vw;
  padding: 0px 12px;
  background-color: var(--grey-4);
  h1 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 14px;
    color: var(--color-primary);
  }
  @media (min-width:768px) {
    gap: 35.7px;
    h1 {
      font-size: 20px;
    }
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17.65px;
  padding: 33.7px 1rem;
  max-width: 300px;
  width: 100%;
  height: 402.69px;
  background-color: var(--grey-3);
  box-shadow: 0px 4px 4px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  h2 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    color: var(--grey-0);
  }
  a {
    margin-top: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;
    color: var(--grey-1);
  }
  @media (min-width:768px) {
    max-width: 369px;
    height: 502px;
    gap: 22px;
    padding: 42px 1.4rem;
    a {
      margin-top: 12px;
      font-size: 12px;
      line-height: 18px;
    }
    h2 {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 17.65px;
  width: 100%;
  margin-top: 5px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 13px;
  color: var(--grey-0);
  label {
    font-size: 9.77px;
  }
  label span {
    color: var(--color-primary);
  }
  @media (min-width:768px) {
    gap: 22px;
    margin-top: 7px;
    
    label {
      font-size: 12px;
    }
  }
`;  