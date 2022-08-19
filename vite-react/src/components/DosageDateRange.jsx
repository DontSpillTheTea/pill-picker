import React, { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

function DosageDateRange() {
  const [value, onChange] = useState([new Date(), new Date()]);

  const handleDateChange = (event) => {
    onChange(event);
    getDaysBetween(event);
  };

  const getDaysBetween = ([startDate, endDate]) => {
    const diffInMs = new Date(endDate) - new Date(startDate);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    let dateIncrmnt = new Date(startDate);
    let dateList = [];
    for (let dayCnt = 0; dayCnt < diffInDays; dayCnt++) {
      dateList[
        dateList.length
      ] = `${dateIncrmnt.getMonth()}-${dateIncrmnt.getDate()}`;
      dateIncrmnt.setDate(dateIncrmnt.getDate() + 1);
    }
    console.log(dateList);
  };

  return (
    <div>
      <DateRangePicker onChange={handleDateChange} value={value} />
    </div>
  );
}

export default DosageDateRange;
