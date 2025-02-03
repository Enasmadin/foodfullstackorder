import { Routes } from "@/constants/enums"
import Link from "../Link"
import Navbar from "./Navbar"

const Header = () => {
  return (
      <header>
          <div className="container">
           <Link href={Routes.ROOT}>🍕 Logo</Link>
            <Navbar />
          </div>
    </header>
  )
}

export default Header