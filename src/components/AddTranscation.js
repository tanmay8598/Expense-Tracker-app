import React from 'react'

const AddTranscation = () => {
  return (
    <>
      <h3>Add new Transcation</h3>
      <form action=''>
        <div className='form-control'>
          <label htmlFor='text'>
            Text <br />
          </label>
          <input type='text' placeholder='E.g. Resturant Bill' />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount
            <br />
            (negative - expense, positive - income)
          </label>
          <input type='number' placeholder='Enter Amount...' />
        </div>
        <button className='submit-btn'>Add transcation</button>
      </form>
    </>
  )
}

export default AddTranscation
