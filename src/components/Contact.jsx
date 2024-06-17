import React from "react";

function Contact() {
  return (
    <section id="Contacts">
      <div className="w-full min-h-screen bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] bg-cover bg-center relative">
        <div className="absolute w-full h-full bg-[#ffffff33]"></div>

        <div className="info w-full h-[40vh] flex flex-col items-center justify-center gap-5 text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase">contact</h1>
          <span className="w-6 h-1 bg-[#7843E9] rounded-[2vw]"></span>
          <p className="w-full md:w-[50%]">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        </div>

        <div className="form-cont flex items-center justify-center">
          <div className="form w-full md:w-[55%] min-h-[80vh] bg-[#FFFFFF] z-20 rounded-lg shadow-lg mb-10">
            <form action="#" className="flex flex-col p-5 gap-5">
              <label className="text-[#666666] capitalize font-bold text-sm">name</label>
              <input className="px-4 py-3 rounded-sm bg-[#F0F0F0] outline-none border-none" type="text" placeholder="Name" />

              <label className="text-[#666666] capitalize font-bold text-sm">email</label>
              <input className="px-4 py-3 rounded-sm bg-[#F0F0F0] outline-none border-none" type="email" placeholder="Email" />

              <label className="text-[#666666] capitalize font-bold text-sm">message</label>
              <textarea className="px-4 py-3 h-[20vh] bg-[#F0F0F0] outline-none border-none resize-none rounded-lg" name="message" placeholder="Message"></textarea>

              <input className="px-4 py-3 w-full md:w-[50%] mx-auto rounded-lg bg-[#7843E9] text-white font-bold duration-300 ease-in-out transform hover:-translate-y-1" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
