import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 100vw;
    height: 10vh;
    padding: 0px 5vw;

    background-color: #f0f8ff;

    h1 {
        font-size: 24px;
    }

    .userOptions {
        display: flex;
        gap: 1rem;
        button {
            font-size: 16px;
            font-weight: 600;
            background-color: #f0f8ff;
        }
    }
`;