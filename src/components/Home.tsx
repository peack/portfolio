import React, { type FC } from "react"

interface HomeProps {
  children?: React.ReactNode
}

const Home: FC<HomeProps> = ({ children }) => {
  return <div className="main-content content-box grow overflow-x-hidden overflow-y-auto">{children}</div>
}

export default Home
