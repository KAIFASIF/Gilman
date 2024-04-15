import React from "react";
import RHFTextField from "./form-fields/RHFTextField";
import RHFSelectField from "./form-fields/RHFSelectField";

const FormFields = ({ field }: any) => {
  switch (field?.type) {
    case "Text":
      return (
        <RHFTextField
          label={field?.label}
          name={field?.name}
          required={field?.required}
          pattern={eval(field?.rules?.pattern)}
        />
      );
      break;

    case "Select":
      return (
        <RHFSelectField
          label={field?.label}
          name={field?.name}
          options={field?.options}
          defaultValue={field?.defaultValue}
        />
      );
      break;

    default:
      return <h1>Error in redering the field</h1>;
  }
};

export default React.memo(FormFields);
