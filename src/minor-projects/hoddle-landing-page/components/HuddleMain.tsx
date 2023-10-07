import Banner from "./Banner"
import Nav from "./Nav"

const HuddleMain = () => {
   return (
      <div className="hero flex justify-center w-full h-[718px] md:h-full max-sm:h-full max-w-full bg-[#E5FFFF]">
         <div className="w-[1350px] py-10">
            <Nav />
            <Banner/>
         </div>
      </div>
   )
}

export default HuddleMain
