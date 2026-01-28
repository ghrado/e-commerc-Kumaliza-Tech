import React from 'react'
import LightButtom from '/home/ghrado/Documents/ghKali/frontend2/src/assets/website/light-mode-button.png'
import DarkButtom from '/home/ghrado/Documents/ghKali/frontend2/src/assets/website/dark-mode-button.png'

const DarkMode = () => {
const [theme, setTheme] = React.useState(localStorage.getItem('theme')? localStorage.getItem('theme') : 'light'
)

const element = document.documentElement
console.log(element)

React.useEffect(() => {
    localStorage.setItem('theme', theme)
    if(theme =='dark'){
        element.classList.add('dark')
        element.classList.add('dark')
    } else {
        element.classList.remove('light')
        element.classList.remove('dark')
    }
}, [theme])

  return (
    <div className='relative'>
        <img
        onClick={() => setTheme (theme == 'dark' ? 'light' : 'dark')} 
        src={LightButtom} alt=''
        className={`w-9 cursor-pointer absolute right-0 z-10 ${theme === 'dark' ? 'opacity-100' : 'opacity-100'} transition-all duration-300`}
        />
        <img
        onClick={() => setTheme (theme == 'dark' ? 'light' : 'dark')}  
        src={DarkButtom} alt=''
        className={`w-9 cursor-pointer `}
        />
    </div>
  )
}

export default DarkMode