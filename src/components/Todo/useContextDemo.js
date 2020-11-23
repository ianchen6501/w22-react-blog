import React, { useState, useContext, createContext } from 'react'

//const TitleContext = createContext() //傳入 TitleContext 的初始值
const ColorContext = createContext()

function DemoInnerBoxContent() {
  //const [title, setTitle] = useContext(TitleContext)
  const colors = useContext(ColorContext)
  return (
    <div>
      <button style= {{
        color: colors.primary
      }}
        onClick={() => {
          //setTitle(Math.random())
        }}
      >
        update Title!
      </button>
    </div>
  ) 
}

function DemoInnerBox() {
  return (
  <ColorContext.Provider value={{
    primary: 'green'
  }}>
    <DemoInnerBoxContent/>
  </ColorContext.Provider>
  )
}

function DemoInner() {
  return <DemoInnerBox/>
}

export default function Demo() {
  const [colors, setColors] = useState({
    primary: '#ff0000'
  })

  return (
    <ColorContext.Provider value={colors}>
      <div>
        <button onClick={() => {
          setColors({
            primary: '#0000ff'
          })
        }}>change color</button>
        <DemoInner/>
      </div>
    </ColorContext.Provider>
  )
}