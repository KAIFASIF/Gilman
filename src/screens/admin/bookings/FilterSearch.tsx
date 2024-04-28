import React from "react";
import RHFTextField from "../../../libraries/form-fields/RHFTextField";
import Button from "../../../components/Button";



interface filterSearchProps {
  placeholder?: string;
  clearFilter?: () => void;
  resetFilter?: () => void;
  onSubmit: () => void;
}
const FilterSearch: React.FC<filterSearchProps> = ({
  placeholder,
//   clearFilter,
//   resetFilter,
  onSubmit,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:gap-2">
      <RHFTextField name="search" placeholder={placeholder} />
      <RHFTextField
        name="startDate"
        type="date"
        shrinkLabel="From Date"
        InputLabelProps={{ shrink: true }}
      />
      <RHFTextField
        name="endDate"
        type="date"
        shrinkLabel="To Date"
        InputLabelProps={{ shrink: true }}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:md:grid-cols-6  gap-2 md:col-span-3 lg:col-span-2 ">
        <Button
          label="Clear"
          className="btn btn-primary-outline"
          onClick={()=>alert()}
          //   onClick={clearFilter}
          />
        <Button
          label="Reset"
          className="btn btn-primary-outline"
          onClick={()=>alert()}
          //   onClick={resetFilter}
        />
        <Button label="Submit" className="btn btn-primary" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default React.memo(FilterSearch);