import { Text } from "@radix-ui/themes"

const Layout = ({ children }) => {
  return (
    <div>
      <main className="w-full min-h-screen flex flex-col justify-between bg-stone-950">
       
        {/* header */}
        <div as="header"className="w-full h-20 flex justify-between items-center px-4 bg-amber-500">
            <Text as= "h3" className= "text-xl font-bold"> Todo Dapp</Text>
            <appkit-button />
        </div>
        <section className="flex-1">
            {children}
        </section>
       
        {/* Footer */}
        <footer className="w-full h-20 flex justify-center items-center">
            <Text as="p" className= "text-stone-200">Todo Dapp &copy; 2024. All Right Reserved.</Text>
        </footer>

      </main>
    </div>
  )
}

export default Layout
