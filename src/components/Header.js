import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="header--container">
        <img src={require('../images/logo.png')} className="header--img"/>
        <h1 className="header--h1">RevivingRetro</h1>
        <h2 className="header--h2">Menu</h2>
      </div>
    </header>
  )
}
