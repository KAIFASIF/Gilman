import React from "react";

import { useForm, useFieldArray, FormProvider } from "react-hook-form";
import { MdClose } from "react-icons/md";
import RHFSelectField from "../libraries/form-fields/RHFSelectField";
import RHFTextField from "../libraries/form-fields/RHFTextField";
import Button from "./Button";
const Form = ({ name, defaultValues, onSubmit }: any) => {

  const methods = useForm();
  
  const { control, reset } = useForm({ defaultValues });
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  return (
    <FormProvider {...methods}>
      <div className="w-full flex  justify-center items-center ">
        <div className="flex flex-col justify-center items-center w-[70%] bg-gray-200">
          <section className="flex flex-col gap-4  justify-center items-center  w-full px-10">
            {fields.map((_, index) => {
              return (
                <div className="w-full flex flex-col p-4" key={index}>
                  <div className=" w-full  grid grid-cols-6 place-items-center  gap-4 ">
                    <div className="w-full">
                      <RHFSelectField
                        name={`${name}.${index}.step`}
                        label="Step"
                        options={[
                          { id: 1, label: "True", value: true },
                          { id: 2, label: "False", value: false },
                        ]}
                        defaultValue={true}
                      />
                    </div>

                    <div className="w-full -mb-2">
                      <RHFTextField
                        name={`${name}.${index}.description`}
                        label="Description"
                      />
                    </div>
                    <div className="w-full -mb-2">
                      <RHFTextField
                        name={`${name}.${index}.command`}
                        label="Command"
                      />
                    </div>
                    <div className="w-full -mb-2">
                      <RHFTextField
                        name={`${name}.${index}.index`}
                        label="Index"
                        // value={index+1}
                      />
                    </div>
                    <div className="w-full">
                      <RHFSelectField
                        name={`${name}.${index}.ostype`}
                        label="OS type"
                        options={[
                          { id: 1, label: "Windows", value: "windows" },
                          { id: 2, label: "Linux", value: "linux" },
                          { id: 3, label: "Commands", value: "commands" },
                        ]}
                        defaultValue="windows"
                      />
                    </div>
                    <div className="w-full  flex self-center mt-8">
                      <MdClose
                        onClick={() => remove(index)}
                        className="text-red-600 text-4xl cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </section>

          <section className="flex gap-4 w-[50%] justify-center items-center mt-10  mb-10">
            <Button
              label="Append"
              className="bg-zinc-900"
              onClick={() => {
                append({
                  step: "",
                  description: "",
                  ostype: "windows",
                  command: "",
                });
              }}
            />

            <Button
              label="Reset"
              className="bg-zinc-900"
              onClick={() =>
                reset({
                  [name]: [
                    {
                      step: "",
                      description: "",
                      ostype: "windows",
                      command: "",
                    },
                  ],
                })
              }
            />

            <Button
              label="Submit"
              className="bg-zinc-900"
              onClick={methods.handleSubmit(onSubmit)}
            />
          </section>
        </div>
      </div>
    </FormProvider>
  );
};

export default React.memo(Form);
