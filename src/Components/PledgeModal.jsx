import React, { useState } from 'react'

function PledgeModal({isOpen, togglePledgeModal, handleRadio,
   newValue, totalBacked, handlePledge, inpVal, decreasePledges, data}) {

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

  const handleSubmit = () =>{

    if (inpVal < data.amount){
      setShowError(true)
      return null;
    }
    totalBacked()
    decreasePledges(newValue);
  }
  

  return (
    <div className='fixed inset-0 my-10 mx-48 px-10 py-10 bg-white w-7/12 ml-64 left-7
      rounded-lg overflow-y-auto max-h-screen'>
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
            <div className='mb-10 border px-10 py-10 border-gray-300 rounded-lg'>
                <div key={item.id} className='flex gap-5 mb-2'>
                    <input onClick={() => handleRadioClick(item.id)} 
                    className='text-5xl' type="radio" name="pledgeOption"/>
                    <h1 className='text-lg font-bold'>{item.title}</h1>
                </div>
                <p className='text-slate-500'>{item.reward}</p>
                {item.id === newValue && 
                  <div className='flex justify-between py-5 mt-5 border-t'>
                    <p className='text-slate-500 text-md pt-2'>Enter your pledge</p>
                    <div className='flex gap-5 relative'>
                      <input value={inpVal} onChange={handleInputChange} 
                      className={`px-8 py-3  rounded-3xl border border-gray-300`} type="text" placeholder='0.00' />
                      <p className='absolute font-bold text-slate-500 pt-3 pl-3 text-md'>$</p>
                      <button onClick={() => handleSubmit(item.id)} 
                      className='bg-teal-500 rounded-3xl px-5 text-white'>Continue</button>
                    </div> 
                  </div>
                }      
            </div>
           : 
           <div key={item.id} className='border border-gray-300 rounded-lg px-5 py-10 mb-10'>
              <div className='flex justify-between mb-2 '>
                <div className='flex gap-5 mb-2'>
                    <input onClick={() => handleRadioClick(item.id)} 
                    className='text-5xl' type="radio" name="pledgeOption" />
                    <h1 className={`text-lg font-bold ${item.pledges <= 0 && 'text-slate-500'}`}>{item.title}</h1>
                    <p className='text-cyan-500 font-semibold'>Pledge ${item.amount} or more</p>
                </div>
                <div className='flex gap-3'>
                    <h1 className='text-ll font-extrabold'>{item.pledges}</h1> 
                    <p className='text-slate-500 '> left</p> 
                </div>
              </div>
              <p className='text-slate-500 mb-5'>{item.reward}</p>
              {item.id === newValue &&
                <div className='flex justify-between py-5 mt-5 border-t'>
                  <p className='text-slate-500  text-md pt-2'>Enter your pledge</p>
                  <div className='flex gap-5 relative'>
                    <input value={inpVal} onChange={handleInputChange} disabled={item.pledges <= 0}
                     className={`px-8 py-3 rounded-3xl border  
                     ${item.pledges <= 0 ? 'border-gray-100 bg-slate-300': 'border-gray-300' }`}
                      type="text" placeholder='0.00' />
                    <p className='absolute font-bold text-slate-500 pt-3 pl-3 text-md'>$</p>
                    <button onClick={handleSubmit} className='bg-teal-500 rounded-3xl px-5 text-white'>Continue</button>
                  </div> 
                </div> 
              }    
           </div>
        ))}
      </div>
    </div>
  )
}

export default PledgeModal
