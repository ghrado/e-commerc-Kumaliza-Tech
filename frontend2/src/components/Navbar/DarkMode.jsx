import React from 'react'
import LightButtom from '/home/ghrado/Documents/ghKali/frontend2/src/assets/website/light-mode-button.png'
import DarkButtom from '/home/ghrado/Documents/ghKali/frontend2/src/assets/website/dark-mode-button.png'

const DarkMode = () => {
const [theme, setTheme] = React.useState(localStorage.getItem('theme')? localStorage.getItem('theme') : 'light'
)

const element = document.documentElement //aceso do element html
console.log(element)

//set theme to localstorage e html element
React.useEffect(() => {
    console.log('theme changed to', theme)
    console.log('Opacidade Light', theme === 'dark' ? '100' : '0')
    console.log('Opacidade Dark', theme === 'dark' ? '0' : '100')


    localStorage.setItem('theme', theme)
    if(theme ==='dark'){
        element.classList.add('dark')
        element.classList.remove('light')
    } else {
        element.classList.add('light')
        element.classList.remove('dark')
    }
}, [theme])

const toggleTheme = () => {
    setTheme (theme === 'dark' ? 'light' : 'dark')
}

  return (
    <div className='relative p-2 bg-gray-100 dark:bg-gray-800 rounded-full items-center'>
        <img
        onClick={toggleTheme} 
        src={LightButtom} alt=''
        className={`w-9 cursor-pointer absolute right-0 z-10 transition-all duration-300
            ${theme === 'dark' ? 'opacity-100' : 'opacity-0'} 
            `}/>
        <img
        onClick={toggleTheme}  
        src={DarkButtom} alt=''
        className={`w-9 cursor-pointer absolute right-0 z-10 transition-all duration-300
            ${theme === 'dark' ? 'opacity-0' : 'opacity-100'} 
        `}/>
    </div>
  )
}

export default DarkMode