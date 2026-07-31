import {useForm} from "react-hook-form"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import dashboard from "./Dashboard"
const Login = () => {

    // React Hook Form here
    const { register, handleSubmit } = useForm();
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const onSubmit = (data) => {
        dispatch(login(data));
            navigate("/dashboard")
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
               <input
    type="email"
    {...register("email")}
/>
                <input
    type="password"
    {...register("password")}
/>
                <button type="submit">Login</button>

        </form>
        
        </>
    );
};

export default Login;