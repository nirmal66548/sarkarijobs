import React, { useEffect, useState } from 'react';
import Job from './Job';
import list from "../../public/list.json"


function Jobs() {
    const filterData = list.filter((data) => data.category === "NewJob");
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

export default Jobs;
