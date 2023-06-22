import { useCallback } from 'react'
import { THEMES } from '../../types/styles/theme'

interface ThemeButtonSwitchProps {
  appTheme: THEMES
  setAppTheme: React.Dispatch<React.SetStateAction<THEMES>>
}

const ThemeButtonSwitch: React.FC<ThemeButtonSwitchProps> = ({
  appTheme,
  setAppTheme,
}): JSX.Element => {
  const handleButtonClick = useCallback(() => {
    if (appTheme === THEMES.DARK) setAppTheme(THEMES.LIGHT)
    if (appTheme === THEMES.LIGHT) setAppTheme(THEMES.DARK)
  }, [appTheme, setAppTheme])

  return <button onClick={handleButtonClick}>Change theme</button>
}

export default ThemeButtonSwitch
