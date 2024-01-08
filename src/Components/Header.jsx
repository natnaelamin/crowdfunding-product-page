import React from 'react'

function Header({toggleBookMark, bookMark, backProject}) {

  const handleBookMark = ()=>{
    toggleBookMark()
  }

  const handleBackProject = () => {
    backProject()
  }

  return (
    <div className="bg-[url('/images/image-hero-desktop.jpg')] 
      relative bg-cover flex justify-between  pt-10 pb-80 object-scale-fill px-36">
      <h1 className='text-white text-3xl font-bold'>Crowdfund</h1>
      <div className='text-white flex gap-10 font-semibold'>
        <a href="#">About</a>
        <a href="#">Discover</a>
        <a href="#">Get Started</a>
      </div>
      <div className='bg-white w-7/12 py-10 px-20 absolute left-64  top-80 ml-7 rounded-xl text-center'>
        <h1 className='font-bold text-3xl mb-5'>Mastercraft Bamboo Monitor Riser</h1>
        <p className='mb-5 text-slate-500'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        <div className='flex justify-between relative'>
          <button onClick={handleBackProject} className='text-white font-semibold px-5 py-3 rounded-3xl bg-cyan-500'>Back this project</button>
          <button onClick={handleBookMark} className='flex gap-5 bg-white rounded-3xl pr-2'>
            <span><img src="/images/icon-bookmark.svg" alt="" />
            </span>{bookMark ? (<h1 className='pt-3 text-teal-500'>Bookmarked</h1>) : (<h1 className='pt-3 text-slate-500'>Bookmark</h1>)}</button>
          <img className='absolute left-72 bottom-40 mb-2' src="/images/logo-mastercraft.svg" alt="" />
       </div> 
      </div>  
    </div>
  )
}

export default Header
