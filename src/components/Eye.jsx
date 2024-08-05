import { useEffect, useState } from "react"

function Eye() {
 
  const [rotate,setRotate] = useState(0)

  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2 
      let deltaY = mouseY - window.innerHeight/2
      var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)
      setRotate(angle-180)
    })
  })

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-full bg-cover bg-center relative  bg-[url('/src/assets/backenground_eyes.jpg')] ">
        <div className="absolute flex justify-center items-center gap-10 w-1/2  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="w-[14vw] flex items-center justify-center  h-[14vw] bg-zinc-100 rounded-full ">
            <div className=" w-[10vw] h-[10vw] relative bg-black rounded-full ">
            <div  style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className="line   absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-1/4">
           <div className="w-[2vw] h-[2vw] bg-white rounded-full "></div>
           </div>
            </div>
          </div>
          <div className="w-[14vw] h-[14vw] flex justify-center items-center bg-zinc-100 rounded-full ">
          <div className=" w-[10vw] h-[10vw] relative bg-black rounded-full ">
          <div  style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className="line   absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-1/4">
           <div className="w-[2vw] h-[2vw] bg-white rounded-full "></div>
           </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Eye
