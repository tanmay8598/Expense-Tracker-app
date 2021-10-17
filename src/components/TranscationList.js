import React from 'react'

const TranscationList = () => {
  return (
    <div>
      <h3>History</h3>
      <ul className='list'>
        <li className='minus'>
          Cash <span>- ₹ KFC bill</span>
          <button className='delete-btn'>x</button>
        </li>
      </ul>
    </div>
  )
}

export default TranscationList
