import { useContext } from 'react'
import { ThemeContext } from '@contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/pro-duotone-svg-icons'

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div className="w-full flex flex-row justify-end items-center">
      <button
        className="p-4 flex flex-row justify-start items-center space-x-2 outline-none focus:outline-none"
        onClick={() => setTheme(theme === `light` ? `dark` : `light`)}
      >
        <FontAwesomeIcon
          icon={theme === `light` ? faMoon : faSun}
          fixedWidth={true}
          className="text-xl text-coolGray-800 dark:text-coolGray-300"
        />

        <span className="text-coolGray-800 dark:text-coolGray-300 text-xs font-medium uppercase">
          Toggle Theme
        </span>
      </button>
    </div>
  )
}
