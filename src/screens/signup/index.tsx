import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Layout from "../../components/Layout";
import RHFTextField from "../../libraries/form-fields/RHFTextField";
import Button from "../../components/Button";
import { handleToastMessage } from "../../utilities/utils";
import Toast from "../../components/taost";
import {
  emailRegx,
  mobileRegx,
  nameNumRegx,
  nameRegx,
  passwordRegx,
} from "../../utilities/regex";
import { signupUser } from "../../services/userApiServices/userApiService";

const Signup = ({ setIsModalOpen }: any) => {
  const methods = useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<"success" | "error">("success");
  const [timeoutId, setTimeoutId] = useState<any>(null);

  useEffect(() => {
    return () => {
      handleClearTimeout();
    };
  }, []);

  const handleClearTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };
  const handleToast = () => setOpen(false);

  const onSubmit = async (data: any) => {
    try {
      const { password, confirmPassword, email } = data;
      if (password !== confirmPassword) {
        handleToastMessage(
          setMessage,
          setSeverity,
          setOpen,
          "password did not match",
          "error",
          true
        );
        return;
      }
      const payload = {
        ...data,
        mobile: parseInt(data?.mobile),
        email: email ? email : null,
        role: "USER",
      };
      const res = await signupUser(payload);
      if (res?.status === 201) {
        handleToastMessage(
          setMessage,
          setSeverity,
          setOpen,
          "You have sucessfully signed up",
          "success",
          true
        );

        const id = setTimeout(() => {
          setIsModalOpen(false);
        }, 2000);

        setTimeoutId(id);
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      if (error?.response?.status === 502) {
        handleToastMessage(
          setMessage,
          setSeverity,
          setOpen,
          error?.response?.data,
          "error",
          true
        );
      }
    }
  };

  return (
    <Layout isLoading={isLoading}>
      <Toast
        message={message}
        open={open}
        severity={severity}
        handleClose={handleToast}
      />
      <FormProvider {...methods}>
        <div className="w-full flex flex-col space-y-4">
          <div className="w-full">
            <RHFTextField
              name="name"
              label="Name"
              required
              pattern={nameRegx}
            />
          </div>
          <div className="w-full">
            <RHFTextField
              name="username"
              label="Username"
              required
              pattern={nameNumRegx}
            />
          </div>
          <div className="w-full">
            <RHFTextField name="email" label="Email" pattern={emailRegx} />
          </div>

          <div className="w-full">
            <RHFTextField
              name="mobile"
              label="Mobile"
              required
              pattern={mobileRegx}
            />
          </div>
          <div className="w-full mt-4">
            <RHFTextField
              name="password"
              label="Password"
              required
              type="password"
              pattern={passwordRegx}
            />
          </div>
          <div className="w-full mt-4">
            <RHFTextField
              name="confirmPassword"
              label="Confirm password"
              required
              type="password"
              pattern={passwordRegx}
            />
          </div>

          <div className="flex justify-center mt-10">
            <Button
              label="Submit"
              onClick={methods.handleSubmit(onSubmit)}
              className="bg-primary"
            />
          </div>
        </div>
      </FormProvider>
    </Layout>
  );
};

export default React.memo(Signup);
