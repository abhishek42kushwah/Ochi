
import BackScaleRight from "../assets/Fyde_Illustration_Crypto_2-663x551.png"
import BackScaleLeft from "../assets/Vise_front2-663x551.jpg";
import ah from "../assets/Frame-481692-1-663x551.png";
import Pb from "../assets/PB-Front-4-663x551.png"
import trawa from "../assets/Frame-3875-663x551-2.jpg"
function Future() {
  return (
    <div className="w-full text-black py-20 bg-[#F1F1F1]">
      <div className="text-[3.5vw] px-20 border-b border-[#655f5f] pb-8  font-['Neue_Montreal'] tracking-tight">
        <h1>Featured projects</h1>
      </div>
      <div className="space-y-16"> 
      <div className="px-20 pt-10">
        <div className="cards w-full flex gap-10 pt-10 ">
          <div className="cardContainer relative w-1/2 h-[75vh] ">
            <div className="flex items-center gap-x-2.5 font-['Neue_Montreal']">
              <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
              <h2>FYDE</h2>
            </div>
            <h1 className="absolute font-extrabold -translate-x-[50%] top-1/2 z-[9] text-[5.5vw] left-full leading-none tracking-tight font-['Neue_Montreal'] text-[#CDEA68] ">
            {"FYDE".split('').map((item,index)=>(<span key={index}>{item}</span>))}
            </h1>
             <div className="card w-full h-full mt-6  overflow-hidden  rounded-xl">
              <img className="w-full h-full bg-cover" src={BackScaleRight} />
            </div>  
            <div className="start flex items-center pt-4 gap-3  font-['Neue_Montreal']">
                    <div className=" t text-zinc-700 border-[1px] hover:bg-black hover:text-white border-gray-600 px-3 py-1 rounded-full text-sm  font-light uppercase ">audit</div>
                    <div className=" text-zinc-700 border-[1px] hover:bg-black hover:text-white border-gray-600 px-3 py-1 rounded-full text-sm  font-light uppercase ">copywriting</div>
                    <div className=" text-zinc-700 border-[1px] hover:bg-black hover:text-white border-gray-600 px-3 py-1 rounded-full text-sm  font-light uppercase ">sales deck</div>
                    <div className=" text-zinc-700 border-[1px] hover:bg-black hover:text-white border-gray-600 px-3 py-1 rounded-full text-sm  font-light uppercase ">slides design</div>
                </div>
          </div>
          <div className="cardContainer relative w-1/2  h-[75vh] ">
            <div className="font-['Neue_Montreal'] flex items-center gap-x-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-black "></div>
              <h1>VISE</h1>
            </div>
            <h1 className="absolute font-extrabold translate-x-[40%] top-1/2 z-[9] text-[5.5vw] right-full leading-none tracking-tight font-['Neue_Montreal'] text-[#CDEA68] ">
            {"VISE".split('').map((item,index)=>(<span key={index}>{item}</span>))}
            </h1>
           
            <div className="card w-full h-full bg-green-500 overflow-hidden mt-6 rounded-xl">
              <img className="w-full h-full bg-cover" src={BackScaleLeft} />
            </div>
            <div className="start flex items-center pt-4 gap-3  font-['Neue_Montreal']">
                    <div className="  text-zinc-700 border-[1px] hover:bg-black hover:text-white border-gray-600 px-3 py-1 rounded-full text-sm  font-light uppercase ">agency</div>
                    <div className=" text-zinc-700 border-[1px] hover:bg-black hover:text-white border-gray-600 px-3 py-1 rounded-full text-sm  font-light uppercase ">company presentation </div>
                   
                </div>
          </div>
        </div>
      </div>
      <div className="px-20 pt-10">
        <div className="cards w-full flex gap-10 pt-10 ">
          <div className="cardContainer relative w-1/2 h-[75vh] ">
            <div className="flex items-center gap-x-2.5 font-['Neue_Montreal']">
              <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
              <h2>AH2 & Matt Horn</h2>
            </div>
            <h1 className="absolute font-extrabold -translate-x-[50%] top-1/2 z-[9] text-[5.5vw] left-full leading-none tracking-tight font-['Neue_Montreal'] text-[#CDEA68] ">
            {"AH2 & Matt Horn".split('').map((item,index)=>(<span key={index}>{item}</span>))}
            </h1>
             <div className="card w-full h-full mt-6  overflow-hidden  rounded-xl">
              <img className="w-full h-full bg-cover" src={ah} />
            </div>  
            <div className="start flex items-center pt-4 gap-3  font-['Neue_Montreal']">
                    <div className=" t text-zinc-700 border-[1px] hover:bg-black hover:text-white border-gray-600 px-3 py-1 rounded-full text-sm  font-light uppercase ">pitch deck</div>
                    
                </div>
          </div>
          <div className="cardContainer relative w-1/2  h-[75vh] ">
            <div className="font-['Neue_Montreal'] flex items-center gap-x-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-black "></div>
              <h1>Trawa</h1>
            </div>
            <h1 className="absolute font-extrabold translate-x-[40%] top-1/2 z-[9] text-[5.5vw] right-full leading-none tracking-tight font-['Neue_Montreal'] text-[#CDEA68] ">
            {"Trawa".split('').map((item,index)=>(<span key={index}>{item}</span>))}
            </h1>
            <div className="card w-full h-full bg-green-500 overflow-hidden mt-6 rounded-xl">
              <img className="w-full h-full bg-cover" src={trawa} />
            </div>
            <div className="start flex items-center pt-4 gap-3  font-['Neue_Montreal']">
                    <div className="  text-zinc-700 border-[1px] hover:bg-black hover:text-white border-gray-600 px-3 py-1 rounded-full text-sm  font-light uppercase ">brand identity</div>
                    <div className=" text-zinc-700 border-[1px] hover:bg-black hover:text-white border-gray-600 px-3 py-1 rounded-full text-sm  font-light uppercase ">design research </div>
                    <div className=" text-zinc-700 border-[1px] hover:bg-black hover:text-white border-gray-600 px-3 py-1 rounded-full text-sm  font-light uppercase ">investor deck </div>
                </div>
          </div>
        </div>
      </div>
      <div className="px-20 pt-10">
        <div className="cards w-full flex gap-10 pt-10 ">
          <div className="cardContainer relative w-1/2 h-[75vh] ">
            <div className="flex items-center gap-x-2.5 font-['Neue_Montreal']">
              <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
              <h2>Premium Blend</h2>
            </div>
            <h1 className="absolute font-extrabold text-[6vw] ml-20 pt-[35%] leading-none tracking-tight font-['Neue_Montreal'] text-[#CDEA68] ">
            {"Premium Blend".split('').map((item,index)=>(<span key={index}>{item}</span>))}
            </h1>
             <div className="card w-full h-full mt-6  overflow-hidden  rounded-xl">
              <img className="w-full h-full bg-cover" src={Pb}/>
            </div>  
            <div className="start flex items-center pt-4 gap-3  font-['Neue_Montreal']">
                    <div className=" t text-zinc-700 border-[1px] hover:bg-black hover:text-white border-gray-600 px-3 py-1 rounded-full text-sm  font-light uppercase ">pitch deck</div>
                    
                </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Future
