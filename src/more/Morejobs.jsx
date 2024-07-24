import React from 'react'
import Morejob from './Morejob';

function Morejobs() {
  return (
   
   <>
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg rounded-full">All Jobs notification</h3>
          <a className='btn btn-block p-0 bg-gray-300 text-start font-medium mt-1' href="/Itbp-constable-tradesman">ITBP Constable/Tradesman</a>
          <a className='btn btn-block p-0 bg-gray-300 text-start font-medium mt-0.5' href="Sbisco2024">SBI SCO Recruitment 2024</a>
          <a className='btn btn-block p-0 bg-gray-300 text-start font-medium mt-0.5' href="/india-post-gds">India Post Gramin Dak Sewak 2024</a>
          <Morejob />
          <div className=""></div>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
    </>
   
  );
}

export default Morejobs;
