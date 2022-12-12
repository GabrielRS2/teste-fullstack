import { useContext } from "react";
import { Header } from "../../Component/Header";
import { TokenContext } from "../../Providers/Token";

export const Home = () => {

    const { token } = useContext(TokenContext);

    return (
        <>
            <Header>
            </Header>
        </>
    );
};