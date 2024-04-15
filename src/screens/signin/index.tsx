import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import RHFTextField from "../../libraries/form/RHFTextField";
import axios from "axios";
import Layout from "../../components/Layout";
import RHFTextField from "../../libraries/form-fields/RHFTextField";
import Button from "../../components/Button";
import { authAtom } from "../../recoil/authAtom";
import { useSetRecoilState } from "recoil";
// import { useSetRecoilState } from "recoil";
// import { authAtom } from "../../recoil/authAtom";
// import Toast from "../../components/snackbar";
// import Layout from "../../components/Layout";
// import Button from "../../components/button";

const Signin = ({setIsModalOpen}:any) => {
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(authAtom);
  const methods = useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [open, setOpen] = useState<boolean>(false);
  // const [message, setMessage] = useState<string>("");
  // const [severity, setSeverity] = useState<"success" | "error">("success");
  // const handleToast = () => setOpen(false);

  const onSubmit = async (data: any) => {
    const updatedData = { ...data, mobile: parseInt(data?.mobile) };
    try {
      const res = await axios.post("http://localhost:9000/signin", updatedData);
      if (res?.status === 200) {
        // localStorage.setItem("token", JSON.stringify(res?.data?.token));
        setAuth({
          isLoggedin: true,
          user: res?.data,
        });
        setIsModalOpen(false)
        // navigate("/");
      }
      setIsLoading(false);
    } catch (error) {}
  };

  return (
    <Layout isLoading={isLoading}>
      <FormProvider {...methods}>
        <div className="w-full">
          <div className="w-full">
            <RHFTextField name="mobile" label="Mobile" required />
          </div>
          <div className="w-full mt-4">
            <RHFTextField
              name="password"
              label="Password"
              required
              type="password"
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
