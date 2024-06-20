import React from 'react'

function UstawPersonalizacja() {
    document.documentElement.style.setProperty('--image-visibility','none')
    const handlesetDefault = () =>{
        document.documentElement.style.setProperty('--white-color','rgb(255,255,255)')
        document.documentElement.style.setProperty('--black-color','rgb(0,0,0)')
        document.documentElement.style.setProperty('--grey-color','rgb(207, 204, 204)')
        document.documentElement.style.setProperty('--black-font-color','rgb(0,0,0)')
        document.documentElement.style.setProperty('--light-green-color','rgb(77, 186, 77)')
        document.documentElement.style.setProperty('--green-color','rgb(0, 128, 0)')
        document.documentElement.style.setProperty('--dark-green-color','rgb(9, 50, 9)')
        document.documentElement.style.setProperty('--button-color','rgb(207, 204, 204)')
    }
    const handlesetDarkMode = () =>{
        document.documentElement.style.setProperty('--white-color','rgb(0,0,0)')
        document.documentElement.style.setProperty('--black-color','rgb(255,255,255)')
        document.documentElement.style.setProperty('--grey-color','rgb(20, 20, 20)')
        document.documentElement.style.setProperty('--black-font-color','rgb(215,215,215)')
        document.documentElement.style.setProperty('--light-green-color','rgb(31, 77, 31)')
        document.documentElement.style.setProperty('--green-color','rgb(2, 46, 2)')
        document.documentElement.style.setProperty('--dark-green-color','rgb(4, 21, 4)')
        document.documentElement.style.setProperty('--button-color','rgb(0,0,0)')
    }   
    return (
    <React.Fragment>
        <div className='personalizacja'><b>Personalizacja motywu</b>
        <div className='modeButtonsGroup'>
            <button onClick={handlesetDefault}> Light mode</button>
            <button onClick={handlesetDarkMode}> Dark mode</button>
        </div>
        </div>
    </React.Fragment>
  )
}

export default UstawPersonalizacja