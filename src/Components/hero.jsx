import imageMockup from "../assets/images/image-mockups.png"
const Hero = () => {
  return (
    <div className='bg-[#fafafa]'>
        <div className=" flex flex-col-reverse md:flex-row justify-between items-center px-3 py-10 text-center md:text-left container mx-auto">
        <div className=' w-fit md:w-[350px] flex flex-col mt-10 justify-center md:items-start'>
          <h3 className="font-bold text-3xl md:text-4xl">Next Generation digital banking</h3>
          <p className="mt-4 text-lg text-[#2d314d]">
            Take your financial life online. Your Eazy bank account will be a
            one stop shop for spending, saving, budgeting, investing and much
            more.
          </p>
          <button
            className="bg-gradient-to-r from-[#31d35c] to-[#2bb7da] 
              py-2 px-6 rounded-2xl text-[#fff] text-sm mt-9 text-center "
          >
            Request Invite
          </button>
         
        </div>
        
        <div className='mt-15 bg-cover bg-[url("../assets/images/bg-intro-desktop.svg")]'>
          <img
            className="w-[500px] -top-5 z-30"
            src={imageMockup}
            alt="mock"
          />
        </div>
    </div>
    </div>
    
  );
}

export default Hero
