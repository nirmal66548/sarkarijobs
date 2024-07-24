import React from 'react';
import Job from '../components/Job';
import list from "../../public/list.json";

function MoreResult() {
    const filterData = list.filter((data) => data.category === "ResultA");
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

export default MoreResult;
