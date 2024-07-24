import React from 'react';
import Jobs from './Jobs';
import Morejobs from '../more/Morejobs';
import MoreAdmitcards from '../more/MoreAdmitcards';
import MoreResults from '../more/MoreResults';
import Admitcard from './Admitcard';
import Result from './Result';

function Notification() {
  return (
    <>
        <div className="max-w-screen-lg container mx-auto flex">
            <div className="w-1/3 border-2 border-fuchsia-600 rounded-md">
                <div className="text-center p-1 mt-1.5 h-96">
                    <h2 className="rounded-full border-2 border-rose-600 sm:text-2xl font-medium text-white bg-cyan-950 sm:p-1 mb-1">Jobs</h2>
                    <a className='btn btn-block p-0 bg-gray-300 sm:text-lg font-medium mt-0.5 px-0.5 mb-1' href="/Itbp-constable-tradesman">ITBP Constable / Tradesman</a>
                    <a className='btn btn-block p-0 bg-gray-300 sm:text-lg font-medium mt-0.5 px-0.5 mb-1' href="Sbisco2024">SBI SCO Recruitment 2024</a>
                    <a className='btn btn-block p-0 bg-gray-300 sm:text-lg md:text-lg font-medium mt-0.5 px-0.5 mb-1' href="Sbisco2024">SBI SCO Recruitment 2024</a>
                    <Jobs />
                    <div className="card-actions justify-end">
                        <button className=" btn btn-primary mt-1 text-xl" onClick={()=>document.getElementById('my_modal_1').showModal()}>More</button>
                        <Morejobs />
                    </div>
                                      
                </div>
            </div>
            <div className="w-1/3 border-2 border-fuchsia-600 rounded-md mx-1.5 h-96">
                <div className="text-center p-1 mt-1.5">
                    <h2 className="rounded-full border-2 border-rose-600 sm:text-2xl font-medium text-white bg-cyan-950 sm:p-1 mb-1">Jobs</h2>
                    <Admitcard />
                    <div className="card-actions justify-end">
                        <button className=" btn btn-primary mt-1 text-xl" onClick={()=>document.getElementById('my_modal_2').showModal()}>More</button>
                        <MoreAdmitcards />
                    </div>
                </div>
            </div>
            <div className="w-1/3 border-2 border-fuchsia-600 rounded-md h-96">
                <div className="text-center p-1 mt-1.5">
                    <h2 className="rounded-full border-2 border-rose-600 sm:text-2xl font-medium text-white bg-cyan-950 sm:p-1 mb-1">Jobs</h2>
                    <Result />

                    <div className="card-actions justify-end">
                        <button className=" btn btn-primary mt-1 text-xl" onClick={()=>document.getElementById('my_modal_3').showModal()}>More</button>
                        <MoreResults />
                    </div>
                </div>
            </div>
        </div>
        
    </>
  );
}

export default Notification;
