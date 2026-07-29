export function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function scrollToSection(id: string): void {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
