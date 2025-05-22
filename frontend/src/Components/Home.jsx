import React from 'react'
import { Navi } from './Navi'

export const Home = () => {
  return (
    <div className='container-fluid'>
      <div className="row" style={{ minHeight: "100vh" }}>
        <Navi />
        <main className="col p-4">
          <h1>the rest</h1>
        </main>
      </div>
    </div>
  )
}
