import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { ThemeInput } from "../../Styles/ThemeInput";
import ThemeButton from "../../Styles/ThemeButton";
import { useContext } from "react";
import { ApiContext } from "../../Providers/Api";
import { toast } from "react-toastify";
import { UserContext } from "../../Providers/User";

export const FormsLogin=()=>{

    const history = useHistory();

    const schema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Campo Obrigatório"),
        password: yup
            .string()
            .min(6, "Mínimo de 8 dígitos")
            .required("Campo Obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

  const onSubmitFunction = async (data) => {
    const res = await loginUser(data);
    if (res.name !== "AxiosError") {
      localStorage.setItem(
        "@churraskenzie:token",
        JSON.stringify(res.data.accessToken)
      );
      localStorage.setItem(
        "@churraskenzie:user",
        JSON.stringify(res.data.user)
      );
      setUser(res.data.user)
      history.push("/");
      toast("✔️ Usuário logado com sucesso!", {
        className: "toastify-color-progress-success",
      });
    } else {
      toast('❌ Usuário ou senha inválidos', {className: "toastify-color-progress-error"})
    }
  };

    return(
        <form onSubmit={handleSubmit(onSubmitFunction)}>
        <p>Login</p>

        <ThemeInput
          label="Email"
          name="email"
          placeholder="Digite seu email"
          error={errors.email?.message}
          register={register}
        />

        <ThemeInput
          label="Senha"
          name="password"
          placeholder="Digite sua senha"
          type="password"
          error={errors.password?.message}
          register={register}
        />

        <ThemeButton schema="var(--red-2)" large type="submit">
          Entrar
        </ThemeButton>
        <span>Ainda não possui uma conta?</span>
        <Link to="/register">
          <ThemeButton schema="var(--grey-2)" large>
            Cadastre-se
          </ThemeButton>
        </Link>
      </form>

    )
}