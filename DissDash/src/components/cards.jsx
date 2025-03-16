import React from "react";

function Card({OutletName}) {
  return (
    <>
      <div className="flex flex-col w-100 bg-blue-500 rounded-2xl transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer ">
            <div>
            <img className="rounded-t-2xl p-2"
                src="https://static.sociofyme.com/thumb/imgsize-321670,msid-98331207,width-400,resizemode-4/98331207.jpg"
                alt=""
            />
            </div>

            <div className="bg-white h-5">  


            </div>

            <div className=" bg-blue-500 text-white text-center p-2 rounded-b-2xl ">
            <h2 className="font-bold text-2xl mb-2">{OutletName}</h2>
            <p>Welcome to the world of {OutletName}</p>
            </div>

      </div>
    </>
  );
}

export default Card;
