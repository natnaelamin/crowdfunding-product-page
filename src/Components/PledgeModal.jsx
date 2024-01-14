import React, { useState } from 'react'

function PledgeModal({isOpen, togglePledgeModal, toggleSuccessModal, handleRadio, 
   newValue, handlePledge, inpVal, data}) {

    const [showError, setShowError] = useState(false)
    

  if(!isOpen){
    return null;
  } 
  
  const handleCloseModal = () =>{
    togglePledgeModal() 
  }

  const handleRadioClick = (id) => {
    handleRadio(id)
  }
  const handleInputChange = (e) =>{
    const inputValue = e.target.value;
    handlePledge(inputValue)
  }

  const handleSubmit = () => {
    // Find the selected pledge based on newValue
    const selectedPledge = data.find((item) => item.id === newValue);
  
    // Check if the selected pledge exists and if inpVal is less than the amount
    if (selectedPledge && inpVal < selectedPledge.amount) {
      setShowError(true);
      return null;
    }
    setShowError(false);
    toggleSuccessModal();
    togglePledgeModal()
    
  };

  return (
    <div className='fixed inset-0 md:px-64 py-8'>
      <div className='px-5 md:px-10 py-10  bg-white w-full  
        rounded-lg overflow-y-auto h-full '>
        <div>
          <div className='flex justify-end'>
            <button onClick={handleCloseModal}><img  src="/images/icon-close-modal.svg" alt="" /></button>
            </div>
          <h1 className='text-xl font-bold mb-5'>Back this project</h1>
          <p className='text-slate-500 mb-10'>Want to support us in bringing Mastercraft Bamboo
          Monitor Riser out in the world?</p>
        </div>
        <div>
          {data.map((item)=>(
            item.id === 0 ?  
              <div className={`mb-10 border-2 ${item.id === newValue? 'border-cyan-500': 'border-gray-300'}
                  md:px-10 px-5 py-10  rounded-lg`}>
                  <div key={item.id} className='flex  gap-5  mb-2'>
                      <input onClick={() => handleRadioClick(item.id)} 
                      className='text-5xl' type="radio" name="pledgeOption"/>
                      <h1 className='text-lg font-bold hover:text-teal-600'>{item.title}</h1>
                  </div>
                  <p className='text-slate-500'>{item.reward}</p>
                  {item.id === newValue && 
                    <div className='md:flex justify-between py-5 mt-5 border-t '>
                      <p className='text-slate-500 text-md pt-2 md:pb-0 pb-5'>Enter your pledge</p>
                      <div className='md:flex grid grid-cols-2 gap-5  relative'>
                        <input value={inpVal} onChange={handleInputChange} 
                        className={`md:px-8 px-5 py-3  rounded-3xl border border-gray-300`} type="text" placeholder='0.00' />
                        <p className='absolute font-bold text-slate-500 pt-3 md:pl-3 pl-2 text-md'>$</p>
                        <button onClick={() => handleSubmit(item.id)} 
                        className='bg-teal-500 rounded-3xl px-5 text-white'>Continue</button>
                      </div> 
                    </div>
                  }      
              </div>
            : 
            <div key={item.id} className={`border-2  ${item.id === newValue? 'border-cyan-500': 'border-gray-300'} 
                rounded-lg px-5 py-10 mb-10`}>
                <div className='flex justify-between mb-2 '>
                  <div className='flex gap-5 mb-2'>
                      <input onClick={() => handleRadioClick(item.id)} 
                      className='text-5xl' type="radio" name="pledgeOption" />
                      <div className='md:flex gap-5'>
                        <h1 className={`text-lg font-bold hover:text-teal-600 ${item.pledges <= 0 && 'text-slate-500'}`}>{item.title}</h1>
                        <p className='text-cyan-500 font-semibold'>Pledge ${item.amount} or more</p>
                      </div>
                  </div>
                  <div className='hidden md:block'>
                    <div className='flex gap-3'>
                      <h1 className='text-ll font-extrabold'>{item.pledges}</h1> 
                      <p className='text-slate-500 '> left</p> 
                    </div>
                  </div>
                </div>
                <p className='text-slate-500 mb-5'>{item.reward}</p>
                <div className=' md:hidden'>
                    <div className='flex gap-3'>
                      <h1 className='text-ll font-extrabold'>{item.pledges}</h1> 
                      <p className='text-slate-500 '> left</p> 
                    </div>
                  </div>
                {item.id === newValue &&
                  <div>
                    <div className='md:flex justify-between py-5 mt-5 border-t'>
                      <p className='text-slate-500 text-md pt-2 md:pb-0 pb-5'>Enter your pledge</p>
                      <div className='md:flex grid grid-cols-2 gap-5 relative'>
                        <input value={inpVal} onChange={handleInputChange} disabled={item.pledges <= 0}
                        className={`px-8 py-3 rounded-3xl border  
                        ${item.pledges <= 0 ? 'border-gray-100 bg-slate-300': 'border-gray-300' }`}
                          type="text" placeholder='0.00' />
                        <p className='absolute font-bold text-slate-500 pt-3 pl-3 text-md'>$</p>
                        <button disabled={item.pledges <= 0} onClick={handleSubmit} 
                        className={`${item.pledges <= 0 ? 'bg-slate-400': 'bg-cyan-500 hover:bg-teal-600'}
                         rounded-3xl px-5 text-white`}>{item.pledges <= 0 ? 'Out of Stock' : 'Continue'}</button>
                      </div>  
                    </div>
                    {showError && <p className='text-red-500 text-right'>please enter ${item.amount} or more.</p> }
                    
                  </div> 
                }    
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PledgeModal
