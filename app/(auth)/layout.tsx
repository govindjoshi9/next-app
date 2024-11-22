
export default function Authlayout({
    children
}: {
    children: React.ReactNode
}) {
    
  return (
    <div className="flex items-center justify-center h-full pt-11   ">
      {children}
    </div>
  )
}
