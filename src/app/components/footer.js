import ThemeToggle from './ThemeToggle'

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex w-full items-center justify-center bg-transparent">
      <div className="flex w-full flex-col items-center px-4 md:w-2/3">
        <div className="my-12 flex flex-col items-center gap-4">
          <ThemeToggle />
          <div className="text-xs text-center text-slate-500 dark:text-slate-500">
            Designed and built by Tom Spencer © {year}
          </div>
        </div>
      </div>
    </div>
  )
}
