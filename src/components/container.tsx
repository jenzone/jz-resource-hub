export const Container = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className="mx-auto max-w-screen-2xl px-8">{children}</div>
}
