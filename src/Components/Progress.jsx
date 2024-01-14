import React from 'react'

function Progress({backed, backers, progressPercentile}) {
  return (
    <div className='md:flex justify-center  mb-10 '>
        <div className=' rounded-xl w-full bg-white md:px-20 px-5 py-10 text-center'>
            <div className='md:flex justify-between'>
                <div className=' md:border-r py-2 border-b px-5 md:mb-0 mb-5'>
                    <h1 className='text-4xl font-bold'>${backed}</h1>
                    <h1 className='text-slate-500'>of $100,000 backed</h1>
                </div>
                <div className=' border-b px-5 py-2 md:mb-0 mb-5'>
                    <h1 className='text-4xl font-bold'>{backers}</h1>
                    <h1 className='text-slate-500'>total backers</h1>
                </div>
                <div className=' px-5 py-2 md:mb-0 mb-5'>
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
