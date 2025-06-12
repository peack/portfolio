import React from "react"
import MyHero from "./MyHero"

interface HomePageProps {
  id: string
}

const HomePage: React.FC<HomePageProps> = ({ id }) => {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <MyHero id={id} />
    </div>
  )
}

export default HomePage
