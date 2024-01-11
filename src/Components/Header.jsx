import React from 'react'

function Header({toggleBookMark, bookMark, backProject}) {

  const handleBookMark = ()=>{
    toggleBookMark()
  }

  const handleBackProject = () => {
    backProject()
  }

  return (
    <>
      <div className="md:bg-[url('/images/image-hero-desktop.jpg')] bg-[url('/images/image-hero-mobile.jpg')]  
         bg-cover pt-10 pb-80  md:px-36 px-5">
          <div className='md:flex justify-between'>
            <h1 className='text-white text-3xl font-bold'>Crowdfund</h1>
            <div className='text-white md:flex  gap-10 font-semibold'>
              <a href="#">About</a>
              <a href="#">Discover</a>
              <a href="#">Get Started</a>
            </div>
          </div>
        <div className='relative md:mx-28 bg-red-600'>
        <div className='bg-white w-full py-10 md:px-20 px-3 absolute  top-64   rounded-xl text-center'>
          <h1 className='font-bold text-3xl mb-5'>Mastercraft Bamboo Monitor Riser</h1>
          <p className='mb-5 text-slate-500'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
          <div className='flex justify-between relative'>
            <button onClick={handleBackProject} className='text-white font-semibold px-1 md:px-5 py-3
             rounded-3xl bg-cyan-500 hover:bg-teal-600'>Back this project</button>
            <button onClick={handleBookMark} className='flex gap-5 bg-white rounded-3xl pr-2'>
              <span><img src="/images/icon-bookmark.svg" alt="" />
              </span>{bookMark ? (<h1 className='pt-3 md:visible hidden text-teal-500'>Bookmarked</h1>) 
              : (<h1 className='pt-3 md:visible hidden text-slate-500'>Bookmark</h1>)}</button>
            <img className='absolute md:left-80 left-28 bottom-56 md:bottom-40 mb-2' src="/images/logo-mastercraft.svg" alt="" />
        </div> 
      </div>     
      </div>
      
    </div>
  </>  
  )
}

export default Header
