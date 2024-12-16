import React, { useRef, useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../../libs/schemas/AuthSchemas";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import FirstNameInput from "./FirstNameInput";
import LastNameInput from "./LastNameInput";
import EmailInput from "./EmailInput";
import UsernameInput from "./UsernameInput";
import CountryInput from "./CountryInput";
import PhoneInput from "./PhoneInput";
import PasswordInput from "./PasswordInput";
import ToastContainer, {
  ToastContainerHandle,
} from "../../error404s/toats/ToastContainer";

type RegisterFormInputs = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  country: string;
  phone: string;
  password: string;
};

const Registerfields: React.FC = () => {
  const navigate = useNavigate();
  const methods = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const { errors } = methods.formState;
  const toastRef = useRef<ToastContainerHandle>(null);

  const debounce = (func: Function, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const showErrorToast = debounce((message: string) => {
    toastRef.current?.addToast(message, "error");
  }, 1000);

  useEffect(() => {
    if (errors.firstName) {
      showErrorToast(errors.firstName.message);
    } else if (errors.lastName) {
      showErrorToast(errors.lastName.message);
    } else if (errors.username) {
      showErrorToast(errors.username.message || "Invalid username");
    } else if (errors.email) {
      showErrorToast(errors.email.message);
    } else if (errors.country) {
      showErrorToast(errors.country.message);
    } else if (errors.phone) {
      showErrorToast(errors.phone.message);
    } else if (errors.password) {
      showErrorToast(errors.password.message);
    }
  }, [errors]);

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      // Make an API call to the Flask backend for user registration
      const response = await axios.post("http://localhost:", {
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        email: data.email,
        country: data.country,
        phone: data.phone,
        password: data.password,
      });

      if (response.status === 201) {
        toastRef.current?.addToast("Registration successful!", "success");
        methods.clearErrors(); // Clear errors after successful submission
        navigate("/"); // Navigate to the home page
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        // Display the error message returned from the backend
        toastRef.current?.addToast(
          error.response.data.error || "Registration failed. Please try again.",
          "error",
        );
      } else {
        toastRef.current?.addToast("An unexpected error occurred.", "error");
      }
      console.error("Registration failed", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <>
        <ToastContainer ref={toastRef} /> {/* Render the ToastContainer */}
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="fade-in w-full h-full flex flex-col justify-center div-top-animation"
        >
          <FirstNameInput />
          <LastNameInput />
          <UsernameInput />
          <EmailInput />
          <div className="flex flex-col w-full md:flex-row md:gap-3">
            <CountryInput />
            <PhoneInput />
          </div>
          <PasswordInput />
          <button
            type="submit"
            className="bg-redGradient border-2 border-red-300 py-2 shadow-custom mt-5 rounded-full text-white font-bold text-lg w-full"
          >
            Sign Up
          </button>
        </form>
        <div className="flex gap-2 w-full justify-center">
          <span className="text-gray-500">Already have an account?</span>
          <Link to="/login" className="text-red-500">
            Login
          </Link>
        </div>
      </>
    </FormProvider>
  );
};

export default Registerfields;
