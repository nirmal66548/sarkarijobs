import React from 'react';

function Job({ item }) {
  return (
    <>
        <div>
            <a className='btn btn-block p-0 bg-gray-300 sm:text-lg font-medium mt-0.5 px-0.5 mb-1' href={item.apply_link}>{item.name} </a>
        </div>
    </>
  );
}

export default Job;
