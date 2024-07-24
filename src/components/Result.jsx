import React from 'react';
import list from "../../public/list.json";
import Job from './Job';

function Result() {
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

export default Result;
