import React from 'react'


function PledgeOptions({data, handleSelectReward}) {
   
    const handleSelectedReward = (id) => {
        
        handleSelectReward(id)   
    }
    

  return (
    <div>
        {data.filter((pledge) => pledge.id !== 0).map((pledge, key="id")=>(
            <div className='border border-gray-300 rounded-lg mb-10 px-5 py-5'>
                <div className='md:flex justify-between mb-5 '>
                    <h1 className={`${pledge.pledges <= 0 ? 'text-slate-500 font-extrabold': 'font-extrabold '}`}>
                        {pledge.title}</h1>
                    <p className='text-cyan-500 font-semibold'>Pledge ${pledge.amount} or more</p>
                </div>
                <p className='mb-5 text-slate-500'>{pledge.reward}</p>
                <div className='md:flex justify-between'>
                    <div className='flex gap-3 md:mb-0 mb-5'>
                        <h1 className={`text-3xl font-extrabold ${pledge.pledges <= 0 ?
                             'text-slate-500 font-normal': 'font-extrabold' }`}>{pledge.pledges}</h1> 
                        <p className='text-slate-500 pt-2'> left</p> 
                    </div>
                    <button disabled={pledge.pledges <= 0} onClick={()=> handleSelectedReward(pledge.id)} 
                    className={`text-white font-semibold px-5 py-3 rounded-3xl  
                    ${pledge.pledges <= 0 ? 'bg-slate-400': 'bg-cyan-500 hover:bg-teal-600'}`}
                     >{pledge.pledges <= 0 ? 'Out of Stock' : 'Select Reward'}</button>
                </div>
            </div>
        ))}
    </div> 
  )
}

export default PledgeOptions
