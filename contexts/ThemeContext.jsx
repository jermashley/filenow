import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(``)

  useEffect(() => {
    if (window && window.matchMedia) {
      const prefersColorScheme = window.matchMedia(
        `(prefers-color-scheme: light)`,
      )

      const localTheme = window.localStorage.getItem(`filenow-theme`)

      if (!localTheme) {
        window.localStorage.setItem(
          `filenow-theme`,
          prefersColorScheme.matches ? `light` : `dark`,
        )

        setTheme(prefersColorScheme.matches ? `light` : `dark`)
      }

      if (localTheme) {
        setTheme(localTheme)
      }

      prefersColorScheme.addEventListener(`change`, (e) => {
        setTheme(e.matches ? `light` : `dark`)
      })

      // On unmount, remove event listener for prefers-color-scheme
      return () =>
        prefersColorScheme.removeEventListener(`change`, (e) =>
          console.log(e.matches),
        )
    }
  }, [])

  useEffect(() => {
    if (window && window.matchMedia) {
      const localTheme = window.localStorage.getItem(`filenow-theme`)

      if (
        (!localTheme.length && theme.length) ||
        (localTheme !== theme && theme.length)
      ) {
        window.localStorage.setItem(`filenow-theme`, theme)
      }
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
