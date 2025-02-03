import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Form from "../components/Form";
import { registerSchema } from "../validator/userValidationSchema";

const onSubmit = async (data, e) => {
  console.log(data);
  e.target.reset();
};

const inputs = [
  {
    inputName: "username",
    type: "text",
    icon: <FaUser />,
  },
  {
    inputName: "email",
    type: "email",
    icon: <MdEmail />,
  },
  {
    inputName: "password",
    type: "password",
    icon: <FaLock />,
  },
  {
    inputName: "confirmPassword",
    type: "password",
    icon: <FaLock />,
    label: "confirm password"
  }
];


export default function SignUp() {
  return (
    <Form heading="Create account" inputs={inputs} onSubmit={onSubmit} btnText="REGISTER" schema={registerSchema}
      subHeading="Already" text="Sign in with your email & password" linkText="SIGN IN" to='/login' />
  );
}
