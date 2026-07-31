import {useForm} from "react-hook-form"

const Login = () => {

    // React Hook Form here
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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