import React from 'react'
import ThemeContext from './ThemeContext'
import { useContext } from 'react'


function Page() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div className={theme}>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    )

}

export default Page