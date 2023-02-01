import React from 'react'
import { useSelector } from 'react-redux'
import Index from './routes/Index'

const App = () => {
  const bgColor = useSelector((state: any) => state.backgroundColor.color)
  const itemColor = useSelector((state: any) => state.itemColor.itemColorState)


  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: itemColor,
      }}
    >
      <Index />
    </div>
  )
}

export default App