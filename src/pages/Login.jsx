import {useForm,handleSubmit} from "react-hook-form"

const Login = () => {

    // React Hook Form here

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit())}>
                <input type="email" /><br /><br />
                <input type="password" /><br /><br />
                <input type="submit" placeholder="submit"/>

        </form>
        
        </>
    );
};

export default Login;