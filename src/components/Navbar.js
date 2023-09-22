import React from 'react'

function Navbar() {
    const style = {fontSize: '40px'}
    
  return (
    <nav>
        <div className="nav-center">
            <h3>useReducer</h3>
            <div className="nav-container">
                <i className="fas fa-bars" style={style}></i>
                <div className="amount-container">
                    <p className="total-amount">0</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
