import React from 'react'

function Progress({backed, backers, progressPercentile}) {
  return (
    <div className='flex justify-center  mb-10 '>
        <div className=' rounded-xl w-7/12 bg-white px-20 py-10'>
            <div className='flex justify-between'>
                <div className=' border-r px-5'>
                    <h1 className='text-4xl font-bold'>${backed}</h1>
                    <h1 className='text-slate-500'>of $100,000 backed</h1>
                </div>
                <div className=' border-r px-5'>
                    <h1 className='text-4xl font-bold'>{backers}</h1>
                    <h1 className='text-slate-500'>total backers</h1>
                </div>
                <div className='px-5'>
                    <h1 className='text-4xl font-bold'>56</h1>
                    <h1 className='text-slate-500'>days left</h1>
                </div>
            </div>
            <div className='h-4 bg-slate-300 rounded-xl w-full relative mt-5'>
            <div className='absolute top-0 left-0 h-full bg-cyan-500 rounded-xl' style={{ width: `${progressPercentile<= 100? progressPercentile: 100}%` }}></div>
        </div>    
        </div>
    </div>
)
}

export default Progress
