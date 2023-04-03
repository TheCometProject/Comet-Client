import { useState } from "react";
import img1 from './img/Logo.svg';
import img2 from './img/pic2.svg';

export default function () {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e){
    const {name, value} = e.target
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]:value
    }))
  }
function submit(){
  console.log(''); 
}
  return (
    
    <div className="bg-[#F8FAFC] w-full min-h-screen lg:flex whitespace-pre-wrap">
            {/*____________ pics _______________ */}

   <div className="lg:w-1/2 flex flex-col md:pl-[85px] pl-8" >
        <img src={img1} className=" items-start w-[130px] h-[33px] mt-4" />
        <img src={img2} className="lg:flex hidden mt-28" />
      </div>
      {/*____________ form _______________ */}
      <div className="lg:w-1/2 flex flex-col items-center lg:pl-[100px] md:mt-[90px] p-7 mt-10 lg:mr-16 text-[#334155]" >
       <p className="sm:text-5xl text-3xl font-bold text-center">Contact us</p>
         <div className="flex flex-col justify-center lg:justify-between">
          <form action="#">
             <input className="border flex border-blue-700 m-[25px] pl-5 sm:w-[400px] sm:h-[63px] w-[300px] h-[45px] bg-white rounded-md  hover:border-[1.5px]"
              type="text" name="name" value={formData.name} placeholder="First and last name" onChange={handleChange} />
             
             <input className="border flex  border-blue-700 m-[25px] pl-5 sm:w-[400px] sm:h-[63px] w-[300px] h-[45px] bg-white rounded-md hover:border-[1.5px]"
              type="email" name="email" value={formData.email} placeholder="E-mail" onChange={handleChange} 
              />
              <textarea className="border flex placeholder:align-top border-blue-700 m-[25px] pl-5 pt-5 sm:w-[400px] sm:min-h-[120px] w-[300px] min-h-[90px] bg-white rounded-md hover:border-[1.5px]"
              type="text" name="message" value={formData.message} placeholder="Write your message here... " onChange={handleChange}  >
              </textarea>
             {/*<input className="border flex placeholder:align-top border-blue-700 m-[25px] pl-5 w-[400px] h-[120px] pt-0 text-top bg-white rounded-md  focus:placeholder:invisible hover:border-[1.5px]"
              type="text" name="message" value={formData.message} placeholder="Write your message here... " onChange={handleChange} 
               />*/}
               {/* _______ button_______ */}
             <button className=" font-medium sm:w-[400px] sm:h-[70px] w-[300px] h-[50px] mr-[25px] ml-[25px] text-white bg-blue-700 text-xl rounded-lg hover:opacity-90 " 
             onClick={submit}>Send</button>
          </form>
        </div>
      </div>
    </div>
    
  );
}
