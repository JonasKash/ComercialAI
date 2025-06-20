import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useThemeCustom } from "@/hooks/use-theme"

export function ThemeToggle() {
  const { toggleTheme, mounted, isDark } = useThemeCustom()

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
} 