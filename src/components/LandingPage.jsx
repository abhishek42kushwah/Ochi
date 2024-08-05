import { FaLongArrowAltUp } from "react-icons/fa";
function LandingPage() {
    return (
        <div className="w-full h-screen bg-zinc-900 border-t-2">
            <div className="text-structure mt-40 px-20 font-['Founders_Grotesk_X_Condensed'] ">
                <div className="uppercase masker leading-[7vw] ] 
                 flex flex-col text-[9vw] text-white font-bold">
                    <h1>
                        we create
                    </h1> 
                   <div className="flex  items-center">
                   <div className="w-[9vw] h-[13vh] mb-12 rounded-md relative mr-[1vw] bg-red-500 ">
                    </div>
                    <h1>eye-opening</h1>
                   </div>
                    <h1>presentations</h1>
                </div>
            </div>
            <div className="border-t-[1px] font-['Neue_Montreal'] bg-zinc-900 leading-none mt-[3vw] flex justify-between items-center border-zinc-800 py-5 px-20 " >
                {["For Public and Private Companies",
                    "From the first pitch to IPO ",
                ].map((item, index) => (
                    <p key={index} className="text-md  font-light text-gray-400  tracking-tight leading-none ">{item}</p>
                ))}
                <div className="start flex items-center justify-center gap-3 ">
                    <div className=" text-white border-[1px] border-gray-300 px-5 py-2 rounded-full text-md  font-light uppercase ">Start the project</div>
                    <div className="w-8 h-8 flex items-center justify-center border-[1px] border-gray-300 rounded-full ">
                        <span className="rotate-[45deg]">
                            <FaLongArrowAltUp />
                        </span>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default LandingPage