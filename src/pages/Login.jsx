import {useForm} from "react-hook-form"

const Login = () => {

    // React Hook Form here

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit())}>
                
        </form>
        
        </>
    );
};

export default Login;