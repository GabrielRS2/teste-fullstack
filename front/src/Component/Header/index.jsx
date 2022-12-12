import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { TokenContext } from "../../Providers/Token";
import { HeaderContainer } from "./style";

export const Header = () => {
    const [isLogged, setIsLogged] = useState(false);
    const { token, setToken  } = useContext(TokenContext);
    const history = useHistory();

    useEffect(() => {
        setToken(JSON.parse(localStorage.getItem("@localApp:token")))
        if(token) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    },[token, setToken])

    function handleLogout() {
        setToken(false)
        setIsLogged(false);
        localStorage.clear();
        history.push("/");
    }

    return (
        <>
            <HeaderContainer>
                <div>
                    <h1>Kontatos</h1>
                </div>
                <div className="userOptions">
                    {isLogged ? (
                        <>
                            <button>
                                Perfil
                            </button>
                            <button handleClick={handleLogout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <button handleClick={() => history.push("/register")}>
                                Cadastrar
                            </button>
                            <button>
                                Login
                            </button>
                        </>
                    )}
                </div>
            </HeaderContainer>
        </>
    );
};