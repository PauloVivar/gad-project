//import React from "react";

function CardInfo(data) {
  return (
    <div
      className='Card border border-slate-300
    dark:bg-gray-700 dark:border-slate-600'>
      {/* <div className='w-full h-3/5 bg-catedral2 bg-cover rounded-t-lg'></div> */}
      <img
        className='w-full h-3/5 object-cover rounded-t-lg'
        src={data.data.image}
        alt='Destacados'
      />
      {/* App.css Card:nth-child */}
      <div className='w-full h-2/5 rounded-b-lg'>
        <p className='font-bold text-xl px-4 py-2 truncate mr-2'>{data.data.title}</p>
        <p className='px-3 truncate mr-2'>{data.data.description}</p>
      </div>
    </div>
  );
}

export default CardInfo;
