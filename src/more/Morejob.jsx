import React from 'react';
import Job from '../components/Job';
import list from "../../public/list.json";

function Morejob() {
    const filterData = list.filter((data) => data.category === "Job");
    console.log(filterData);
  return (
    <>
      <div>
        {filterData.map((item) => (
          <Job item={item} key={item.id} /> 
        ))}
      </div>
    </>
  );
}

export default Morejob;
