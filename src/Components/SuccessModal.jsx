import React from 'react'

function SuccessModal({toggleSuccessModal, decreasePledges,
   isSuccessOpen, totalBacked, newValue, setRadio}) {

    if(!isSuccessOpen){
        return null;
      }

    const handleCloseSuccessModal = () =>{     
        totalBacked()
        decreasePledges(newValue)
        toggleSuccessModal()
        
        setRadio(null)
    }  


  return (
    <div className='px-96 py-40 fixed inset-0 '>
        <div className='bg-white rounded-xl text-center py-10 px-10 mx-10'>
            <div className='flex justify-center mb-5'><img src="/images/icon-check.svg" alt="" /></div> 
            <h1 className='text-3xl font-bold mb-5'>Thanks for your support!</h1>
            <p>Your pedge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide.
                You will get an email once our campaign is completed. </p>
            <button onClick={handleCloseSuccessModal}
            className='px-6 py-3 bg-cyan-500 hover:bg-teal-600 rounded-2xl my-5'>Got it!</button>  
        </div>
    </div>
  )
}

export default SuccessModal
