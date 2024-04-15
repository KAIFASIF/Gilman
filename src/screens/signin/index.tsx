import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import axios from "axios";
import Layout from "../../components/Layout";
import RHFTextField from "../../libraries/form-fields/RHFTextField";
import Button from "../../components/Button";
import { authAtom } from "../../recoil/authAtom";
import { useSetRecoilState } from "recoil";

const Signin = ({setIsModalOpen}:any) => {
  const setAuth = useSetRecoilState(authAtom);
  const methods = useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);
 

  const onSubmit = async (data: any) => {
    const updatedData = { ...data, mobile: parseInt(data?.mobile) };
    try {
      const res = await axios.post("http://localhost:9000/signin", updatedData);
      if (res?.status === 200) {
        setAuth({
          isLoggedin: true,
          user: res?.data,
        });
        setIsModalOpen(false)
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
