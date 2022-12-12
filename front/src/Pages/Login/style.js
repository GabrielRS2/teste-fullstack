import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
    width: 100%;
    height: 100vh;
    max-width: 100vw;
    padding: 20vh 12px;

`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    gap: 17.65px;
    width: 100%;
    margin-top: 5px;
    font-weight: 400;
    font-size: 12px;

    color: gray;

    label {
        font-size: 9.77px;
    }

    label span {
        color: red;
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
    height: 300px;
    border-radius: 4px;

    background-color:  #f0f8ff;

    h2 {
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        color: gray;
    }

    a {
        margin-top: 10px;
        font-style: normal;
        font-weight: 600;
        font-size: 9.62602px;
        line-height: 14px;
        color: gray;
    }

    button {

        width: 10vw;
        border-radius: 5px;
        color: gray;
        font-size: 16px;

        background-color: #B0E0E6;
    }
`;