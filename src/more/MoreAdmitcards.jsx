import React from 'react';
import MoreAdmitcard from './MoreAdmitcard';

function MoreAdmitcards() {
  return (
   
    <>
     <div>
       <dialog id="my_modal_2" className="modal">
         <div className="modal-box">
           <h3 className="font-bold text-lg rounded-full">All Jobs notification</h3>
           <MoreAdmitcard />
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

export default MoreAdmitcards

