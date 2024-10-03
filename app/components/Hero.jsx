'use client'
const Hero = () => {
    return (
      <div className="bg-cover bg-center h-screen text-white flex flex-col justify-center "
        style={{ backgroundImage: "url('/banner1.png')" }}
      >
        <div className="bg-white text-black bg-opacity-80 mt-[300px] rounded-2xl p-5 text-center mx-[20%] mb-[100px] items-center">
          <h1 className="text-3xl md:text-4xl font-bold">Find Real Estate & Get Your Dream Place</h1>
          
        </div>
        <div className="mr-[10%] ml-[30%] text-right">
            <p className="md:text-lg text-md  mt-10 ">
        Ullamco dolore ad labore ea excepteur ex dolor ea qui labore qui mollit ea. Ea proident ea cillum pariatur. Et et cillum quis deserunt et occaecat nisi. Aliqua enim laboris deserunt excepteur. Velit duis aliquip exercitation sit veniam elit tempor anim sit aliqua pariatur fugiat aliqua sint. Consectetur sit nostrud ea aliquip.
          </p>
        </div>
        
      </div>
    );
  };
  
  export default Hero;
  