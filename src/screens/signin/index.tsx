import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";
import Layout from "../../components/Layout";
import RHFTextField from "../../libraries/form-fields/RHFTextField";
import Button from "../../components/Button";
import { authAtom } from "../../recoil/authAtom";
import { useRecoilState } from "recoil";
import { mobileRegx, passwordRegx } from "../../utilities/regex";
import { handleToastMessage } from "../../utilities/utils";
import Toast from "../../components/taost";

const Signin = ({ setIsModalOpen }: any) => {
  const methods = useForm();
  const [auth, setAuth] = useRecoilState(authAtom);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<"success" | "error">("success");

  const handleToast = () => setOpen(false);

  const onSubmit = async (data: any) => {
    const updatedData = { ...data, mobile: parseInt(data?.mobile) };
    try {
      const res = await axios.post(
        "http://localhost:9000/api/v1/user/signin",
        updatedData
      );
      if (res?.status === 200) {
        localStorage.setItem("token", JSON.stringify(res?.data?.token));
        setAuth({
          ...auth,
          isLoggedin: true,
          user: {
            id: res?.data?.id,
            mobile: res?.data?.mobile,
            name: res?.data?.name,
            role: res?.data?.role,
          },
        });

        setIsModalOpen(false);
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
        <div className="w-full">
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

export default React.memo(Signin);
