import { MdEmail } from "react-icons/md";
import Form from "../components/Form";
import { VerifySchema } from "../validator/userValidationSchema";

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
];

export default function LogIn() {
    return (
        <Form heading="Verify" inputs={inputs} onSubmit={onSubmit} btnText="VERIFY" schema={VerifySchema} subHeading="Don't" text="Start your journey in one click" linkText="SIGN UP" to='/register' />
    );
}
