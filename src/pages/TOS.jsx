
import Navbar from "../components/Landing/Navbar";
import Footer from "../components/Landing/Footer";
const Home = () => {
  return (
    <div>
      
        <Navbar/>
        <div className=" p-4 md:pr-24 md:pl-10 flex flex-col items-start ">
          <div>
          <p className=" flex md:text-5xl text-3xl font-bold text-slate-700 mt-20 mb-11  md:mt-32 " >Terms of Services </p>
          </div>
          
          <div>
            <p className=" flex text-xl md:text-2xl font-light text-slate-700 mb-9" >Welcome to Thecomet Terms of Service!</p>
            <p className=" text-justify md:text-lg flex text-sm font-light text-slate-700 mb-11 ">
            These Terms of Service govern your use of Thecomet, a cutting-edge video conferencing platform 
            designed to connect individuals and facilitate seamless communication. By accessing or using 
            Thecomet's website and services, you agree to comply with these Terms, which form a legal agreement
           between you and Thecomet.
            </p>
           {/* list of terms */}
           
            <div>
             <ol className=" list_inside  pl-6 ">
                <li className="text-slate-700 ">
                   <p className=" mb-5 text-xl font-medium ">1.Acceptance of Terms</p>
                   <p  className=" md:text-lg text-justify flex text-sm font-light text-slate-700 mb-11">By accessing or using Thecomet, 
                   you acknowledge that you have read, understood, and agree to be 
                   bound by these Terms. If you do not agree with any part of these 
                   Terms, please do not use Thecomet's services.</p>
                 </li>
                <li className="text-slate-700 mb-11">
                    <p className="mb-5 text-xl font-medium ">2.Use of Thecomet</p>
                    <p className=" md:text-lg text-justify flex text-sm font-light text-slate-700 mb-3">2.1 Eligibility: You must be at 
                    least 18 years old to use Thecomet. By using Thecomet, you represent
                    and warrant that you are 18 years of age or older.</p>
                    <p className=" md:text-lg text-justify flex text-sm font-light text-slate-700 mb-3">2.2 User Account: In order to use certain
                     features of Thecomet, you may be required to create a user account. You 
                     are responsible for maintaining the confidentiality of your account 
                     information and for all activities that occur under your account.</p>
                     <div>
                     <p className=" md:text-lg text-justify flex text-sm font-light text-slate-700 mb-3">2.3 Prohibited Activities: When using 
                     Thecomet, you agree not to engage in any of the following prohibited 
                     activities:</p>
                     <div className=" ml-9">
                         <ul className="list-disc text-justify text-sm font-light text-slate-700 mb-3">
                            <li className="mb-3 md:text-lg " >Violating any applicable laws or regulations.</li>
                            <li className="mb-3 md:text-lg" >Uploading, transmitting, or sharing any content that 
                              is unlawful, harmful, defamatory, or infringing upon 
                              the rights of others.</li>
                            <li className="mb-3 md:text-lg">Interfering with the operation of Thecomet or any 
                              other user's use of the platform.</li>
                           <li className="mb-3 md:text-lg">Engaging in any unauthorized access or use of
                             Thecomet's systems or networks.</li>
                           <li className="mb-3 md:text-lg">Impersonating any person or entity or misrepresenting 
                            your affiliation with any person or entity.</li>
                          </ul>
                       </div>
                     
                     </div>
                    
                </li>
               <li className="text-slate-700">
                    <p className="mb-5 text-xl font-medium">3.Intellectual Property</p>
                   <p className=" md:text-lg text-justify flex text-sm font-light text-slate-700 mb-11">
                    Thecomet and its associated trademarks,
                    logos, and content are the intellectual property of Thecomet and its 
                    licensors. You are granted a limited, non-exclusive, non-transferable 
                    license to use Thecomet's services and content for your personal use
                     only. You must not copy, modify, distribute, or otherwise exploit
                      Thecomet's intellectual property without prior written consent.</p>
               </li>
               <li className="text-slate-700">
                    <p className="mb-5 text-xl font-medium">4.Limitation of Liability</p>
                   <p className=" md:text-lg text-justify flex text-sm font-light text-slate-700 mb-11">
                    To the maximum extent permitted by law, Thecomet and its affiliates shall
                     not be liable for any direct, indirect, incidental, consequential, or
                      punitive damages arising out of or in connection with your use of Thecomet. 
                      This includes, but is not limited to, any loss of data, loss of profits,
                      or interruption of business</p>
               </li>
               <li className="text-slate-700">
                    <p className="mb-5 text-xl font-medium">5.Privacy Policy</p>
                   <p className="md:text-lg text-justify flex text-sm font-light text-slate-700 mb-11">
                   Please refer to our Privacy Policy for information on how we collect, use,
                    and disclose personal information. By using Thecomet, you consent to the 
                    collection, use, and disclosure of your personal information as described 
                    in our Privacy Policy.</p>
               </li>
               <li className="text-slate-700">
                    <p className="mb-5 text-xl font-medium">6.Governing Law and Jurisdiction</p>
                   <p className=" md:text-lg text-justify flex text-sm font-light text-slate-700 mb-11">
                   These Terms shall be governed by and construed in accordance with the laws of 
                   Algeria. Any disputes arising out of or in connection with these Terms shall
                    be submitted to the exclusive jurisdiction of the courts of Algeria</p>
               </li>
               <li className="text-slate-700">
                    <p className="mb-5 text-xl font-medium">7.Changes to the Terms</p>
                   <p className=" md:text-lg text-justify flex text-sm font-light text-slate-700 mb-11">
                   Thecomet reserves the right to modify or update these Terms at any time without
                    prior notice. Any changes to the Terms will be effective upon posting the revised 
                    version on Thecomet's website. It is your responsibility to review the Terms periodically 
                    for any updates.</p>
               </li>
             </ol>
             
            </div>
            <p className=" md:text-lg text-justify flex text-sm font-light text-slate-700 mb-6 ">
            Thank you for reading and agreeing to our Terms of Service. We hope that you have a clear 
            understanding of your rights and responsibilities when using TheComet. If you have any questions
             or concerns regarding these Terms, please contact us at our email : thecometproject@gmail.com or 
             our phone number: +213 555 555 555 .
            </p>
            <p className=" md:text-lg text-justify flex text-sm font-light text-slate-700 mb-6 ">
            By continuing to use TheComet's services, you signify your acceptance of these Terms. We encourage
             you to revisit this page periodically to stay informed of any updates or changes.
            </p>
            <p className=" md:text-lg text-justify flex text-sm font-light text-slate-700 mb-11 ">
            We value your trust and are committed to providing you with a secure and reliable video conferencing
             experience. Thank you for choosing TheComet.
            </p>
            <p className=" md:text-lg text-justify flex text-sm font-light text-slate-600 mb-11" >Last updated: 05/06/2023.</p>
          </div>

        </div>
      
        <Footer/>
    </div>
  );
};

export default Home;