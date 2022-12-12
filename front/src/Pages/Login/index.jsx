import { useContext } from "react";
import { Header } from "../../Component/Header";
import { TokenContext } from "../../Providers/Token";
import { useHistory } from "react-router-dom";
import { Container, FormLogin, InputContainer } from "./style";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ThemeInput } from "../../Component/ThemeInput/style";
import api from "../../Services";

export const Login = () => {

    const history = useHistory();
    const { token, setToken  } = useContext(TokenContext);

    const schema = yup.object().shape({
        email: yup.string().required("Informe seu email").email("Email inválido"),
        password: yup.string().required("Senha obrigatória")
        .min(6, "Senha incorreta")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

  
    function onSubmitFunction(data) {
        fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then((res) => {
            // setToken(res.data.token)
            console.log(res);
            // localStorage.setItem("@localApp:token", JSON.stringify(res.data.token))
        })
        .then((_) => history.push("/home"))
        .catch((err) => console.log(err))
    }
  
  return(
    <>
        <Header>
        </Header>
        <Container>
            <FormLogin onSubmit={handleSubmit(onSubmitFunction)}>
                <h2>Login</h2>
                <InputContainer>
                <label>Email<span> {errors.email?.message}</span></label>
                <ThemeInput 
                    placeholder="Email"
                    {...register("email")}
                />
                </InputContainer>
                <InputContainer>
                    <label>Senha <span> {errors.password?.message}</span></label>
                    <ThemeInput 
                        placeholder="Senha"
                        type={"password"}
                        {...register("password")}
                    />
                </InputContainer>
                <button onClick={handleSubmit}>Entrar</button>
            </FormLogin>
        </Container>
    </>
  );
}