import React, { useState } from "react";
import Select from "react-select";
import drugData from "./medicineReference";
import DosageDateRange from "./DosageDateRange";

function DosageDropdown() {
  const data = [
    {
      value: 1,
      label: "cerulean",
    },
    {
      value: 2,
      label: "fuchsia rose",
    },
    {
      value: 3,
      label: "true red",
    },
    {
      value: 4,
      label: "aqua sky",
    },
    {
      value: 5,
      label: "tigerlily",
    },
    {
      value: 6,
      label: "blue turquoise",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedOption(e);
    console.log(e);
    console.log(
      drugData.concerta.dose_range.max + drugData.concerta.dose_range.min
    );
  };

  const renderedDates = (e) => {
    return (
<div>

    selectedOption.map((item, key) => {
      return <DosageDateRange />;
    });
</div>

    )
  };

  return (
    <div>
      <Select
        isMulti
        placeholder="Select Option"
        value={selectedOption} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />
      {renderedDates}
    </div>
  );
}

export default DosageDropdown;
