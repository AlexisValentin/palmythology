import { useCallback, useContext } from 'react'
import { THEMES } from '../../types/styles/theme'
import { LOCAL_STORAGE_KEYS, setInLocalStorage } from '../../helpers/storage'
import { ThemeContext } from '../../App'

interface ThemeSwitcherProps {
  onClick: () => void
}

interface ThemeButtonSwitchProps {
  setAppTheme: React.Dispatch<React.SetStateAction<THEMES>>
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  onClick,
}): JSX.Element => (
  <div onClick={onClick}>
    <input type="checkbox" value="" className="sr-only peer" />
    <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
  </div>
)

const ThemeButtonSwitch: React.FC<ThemeButtonSwitchProps> = ({
  setAppTheme,
}): JSX.Element => {
  const appTheme = useContext(ThemeContext)

  const handleButtonClick = useCallback(() => {
    if (appTheme === THEMES.DARK) setAppTheme(THEMES.LIGHT)
    if (appTheme === THEMES.LIGHT) setAppTheme(THEMES.DARK)
    setInLocalStorage(LOCAL_STORAGE_KEYS.APP_THEME, appTheme)
  }, [appTheme, setAppTheme])

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <ThemeSwitcher onClick={handleButtonClick} />
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Thème sombre
      </span>
    </label>
  )
}

export default ThemeButtonSwitch
