<<<<<<< HEAD
import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"
=======
import { Toaster as Sonner, toast } from "sonner"
import { useThemeCustom } from "@/hooks/use-theme"
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
<<<<<<< HEAD
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
=======
  const { resolvedTheme } = useThemeCustom()

  return (
    <Sonner
      theme={resolvedTheme as ToasterProps["theme"]}
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
