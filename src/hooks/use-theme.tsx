import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function useThemeCustom() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const setThemeMode = (mode: 'light' | 'dark' | 'system') => {
    setTheme(mode)
  }

  return {
    theme,
    resolvedTheme,
    mounted,
    toggleTheme,
    setThemeMode,
    isDark: resolvedTheme === 'dark'
  }
} 