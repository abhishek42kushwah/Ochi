import homeImage from "../assets/Homepage-Photo-663x469.jpg" 
function About() {
  return (
    <div className="w-full text-black  bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl ">
      <div className="   leading-[3.5vw] p-20">
        <h1 className=" text-[3.9vw] font-['Neue_Montreal'] tracking-tight">
          Ochi is a strategic partner for fast-growing tech businesses that need to <span className="underline hover:underline-none">raise funds, sell products,
            explain complex ideas</span>, and <span className="underline">
            hire great people.
          </span>
        </h1>
      </div>
      <div className=" border-t p-20 pt-3 tracking-tight font-['Neue_Montreal']  border-[#655f5f] font-light">

        <div className="grid grid-cols-2 w-full ">
          <div>
            <h3>What you can expect:</h3>
          </div>
          <div className="w-[70vh] flex ml-10 ">
            <div className=" space-y-10 ">
              <h3>
                We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
              </h3>

              <h3>
                We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
              </h3>
            </div>
            <div className="space-y-7 pt-24 ml-20 ">
              <h3>S:</h3>
              <ul className="flex flex-col underline">
                <ui>Instagram</ui>
                <ui>Behance</ui>
                <ui>Facebook</ui>
                <ui>Linkedin</ui>
              </ul>
            </div>
          </div>
        </div>


      </div>

      <div className=" p-20 flex  border-t font-['Neue_Montreal'] border-[#655f5f]">
        <div className="flex flex-col justify-start space-y-5 w-1/2 ">
        <h1 className="text-[3.2vw]">
        Our approach:
        </h1>
        <button className="hover:bg-black flex items-center gap-9  justify-center bg-[#1d1818] p-6 rounded-full text-white w-[14vw] h-[9vh] ">
         READ MORE
         <div className="w-2.5 h-2.5 rounded-full bg-zinc-100"></div>
        </button>
        </div>
          <div className="w-1/2 h-[70vh] rounded-3xl overflow-hidden  ">
            <img src={homeImage} />
          </div>
      </div>



    </div>
  )
}

export default About
