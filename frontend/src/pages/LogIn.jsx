import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Form from "../components/Form";
import { logInSchema } from "../validator/userValidationSchema";

const onSubmit = async (data, e) => {
    console.log(data);
    e.target.reset();
};

const inputs = [
    {
        inputName: "email",
        type: "email",
        icon: <MdEmail />,
    },
    {
        inputName: "password",
        type: "password",
        icon: <FaLock />,
    }
];

export default function LogIn() {
    return (
        <Form heading="Login" inputs={inputs} onSubmit={onSubmit} btnText="LOGIN" schema={logInSchema} subHeading="Don't" text="Start your journey in one click" linkText="SIGN UP" to='/register' />
    );
}
