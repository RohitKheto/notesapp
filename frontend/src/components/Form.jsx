import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "../components/FormStyle.scss";
import { Button } from "./Button";
import { NavLinkTransparent } from "./NavLinkTransparent";
import { FormErrorMsg } from "./FormErrorMsg";
import { NavLink } from 'react-router-dom';

const Form = ({ heading, inputs, onSubmit, btnText, schema, subHeading, text, linkText, to }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    return (
        <div className="bg-gradient-to-r from-violet-300 to-blue-300 h-screen flex justify-center items-center ">
            <div className="items-center bg-gradient-to-r from-violet-800 to-blue-800 shadow-lg w-11/12 sm:w-9/12 md:w-5/6 xl:w-3/6 grid md:grid-cols-2">
                <div className="bg-white px-6 py-8 h-full">
                    <h1 className="mb-6 font-bold text-center bg-gradient-to-r from-violet-800 to-blue-800 bg-clip-text text-transparent text-3xl md:text-4xl">{heading}</h1>
                    <form
                        className="flex flex-col max-w-96 mx-auto gap-7 items-center"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {inputs.map((input, id) => (
                            <div key={id} className="relative w-full">
                                <div className={`relative flex gap-3 items-center border-solid border-2 form-input-container rounded-md px-3 ${errors[input.inputName] ? "border-red-500" : ""}`}>
                                    {input.icon}
                                    <input
                                        type={input.type}
                                        className="outline-none form-input z-10 bg-transparent p-2 w-full"
                                        placeholder=" "
                                        autoComplete="off"
                                        {...register(input.inputName)}
                                    />
                                    <label className="absolute text-sm form-label left-9 bg-white text-zinc-500 px-3">
                                        {input.label || input.inputName}
                                    </label>
                                </div>
                                {errors[input.inputName] && (
                                    <FormErrorMsg msg={errors[input.inputName].message} />
                                )}
                            </div>
                        ))}

                        <Button text={btnText} />
                    </form>
                    <p className="text-center mt-3 text-gray-600">Not verified? <NavLink to="/verify" className="text-blue-400 hover:text-blue-500 font-semibold">Verify now</NavLink></p>
                </div>

                <div className="flex flex-col items-center py-8 px-4">
                    <h1 className="font-semibold text-white text-center max-w-70 xl:max-w-96 text-4xl xl:text-5xl">{subHeading} have an account?</h1>
                    <p className="text-white opacity-80 mt-4 mb-10">{text}</p>
                    <NavLinkTransparent text={linkText} to={to} />
                </div>
            </div>
        </div>
    );
}

export default Form;
