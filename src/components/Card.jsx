import React from 'react'

function Card({ item }) {
  

  return (
    <>
        <div>
            <div className="card bg-base-100 sm:w-80 w-52 shadow-xl">
              <div className=" mycard sm:card-body ">
                <a href={item.apply_link}>
                  <h2 className="card-title">
                    {item.name} 
                  </h2>
                  <p>
                    {item.descriptionA}  
                  </p>
                  <p> 
                    {item.descriptionB}
                  </p>
                </a>
              </div>
            </div>
        </div>
    </>
  )
}

export default Card
