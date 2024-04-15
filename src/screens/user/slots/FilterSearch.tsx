import React, { useEffect, ChangeEvent } from "react";
import RHFTextField from "../../../libraries/form-fields/RHFTextField";
import { FormProvider, useForm } from "react-hook-form";
import {  todaysDate } from "../../../utilities/utils";

interface filterSearchProps {
  fetchBookedSlots: (date: string) => void;
  urlDate: any;
}
const FilterSearch: React.FC<filterSearchProps> = ({
  fetchBookedSlots,
  urlDate,
}) => {
  const methods = useForm();
  const { setValue } = methods;
  const newUrl = "/slots";

  useEffect(() => {
    setValue("date", urlDate ? urlDate : todaysDate());
  }, [urlDate]);

  const handleFilterDate = (e: ChangeEvent<HTMLInputElement>) => {
    window.history.pushState({}, "", newUrl);
    const val = e.target.value;
    setValue("date", val);
    fetchBookedSlots(val);
  };

  const handleClearFilter = () => {
    window.history.pushState({}, "", newUrl);
    setValue("date", todaysDate());
    fetchBookedSlots(todaysDate());
  };

  return (
    <FormProvider {...methods}>
      <div className="flex justify-end items-center w-full ">
        <div className="w-1/3">
          <RHFTextField
            name="date"
            type="date"
            InputLabelProps={{ shrink: true }}
            onChange={handleFilterDate}
            inputProps={{
              min: todaysDate(),
            }}
          />
        </div>
        <p
          className="cursor-pointer text-lf font-semibold ml-4 mt-2"
          onClick={handleClearFilter}
        >
          Clear
        </p>
      </div>
    </FormProvider>
  );
};

export default React.memo(FilterSearch);
