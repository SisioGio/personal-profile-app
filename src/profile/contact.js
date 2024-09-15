import React, { useState } from "react";
import axios from 'axios'
const Contact = () =>{
    const [data,setData] = useState({
        name: "",
        email:"",
        phone: "",
    })
    const [sending,setSending] = useState(false)
    const [message,setMessage] = useState(null)
    const sendEmail = async (event)=>{
        event.preventDefault();
        setSending(true)
        try {
            // Sending the form data to a server endpoint
            const response = await axios.post('https://q3oazozow7.execute-api.eu-central-1.amazonaws.com/prod/contact-email', data);
            console.log('Response:', response.data);
            setMessage("Congrats! Your contact request was sent, I'll come back to you asap.")
          } catch (error) {
            console.error('Error:', error);
          } finally{
            setSending(false)
          }
    }

    const navigation = [
        {
          name: "Home",
          href: "#",
          target: "/home#home",
          current: true,
          visible: true,
          onClick: null,
        },
    
       
        
        {
          name: "Expertise",
          target: "/home#expertise",
          href: "#contact",
          current: false,
          visible: true
        },
        {
          name: "Familiarities",
          target: "/home#familiarities",
          href: "#familiarties",
          current: false,
          visible: true
        },
        {
          name: "Projects",
          target: "/home#projects",
          current: false,
          visible: true
        },
        {
          name: "Playground",
          target: "/home#playground",
          current: false,
          visible: true
        },
        {
          name: "About Me",
          target: "/home#about",
          href: "home#about",
          current: false,
          visible: true,
          onClick: null,
        },
        {
          name: "CV",
          target: "/home#cv",
          current: false,
          visible: true
        },
        {
          name: "Contact",
          target: "/home#contact",
          current: false,
          visible: true
        }
      ];

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };


return (
    <div class="w-full py-40 flex items-center justify-center bg-black -translate-y-1" id='contact'>
    <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div class="w-full text-3xl md:text-4xl lg:text-5xl font-bold ">
            <h1 class="w-full  text-center">How can we help you. get
                in touch</h1>
        </div>
        
        <div class="relative flex items-top justify-center   dark:bg-gray-900 sm:items-center sm:pt-0">
  <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-2 overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
              <div class="p-6 mr-2   text-white sm:rounded-lg">
                 
                  <p class="text-normal text-lg sm:text-2xl   mt-2">
                      Fill in the form to start a conversation
                  </p>

                  <div class="flex  flex-col gap-3 md:flex-row items-center mt-8 ">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      <div class="ml-4 text-md tracking-wide  ">
                          Munich, Germany
                      </div>
                  </div>

                  <div class="flex flex-col gap-3 md:flex-row items-center mt-4 font-light">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      <div class="ml-4 text-md tracking-wide  ">
                          +49 170 126 1151
                      </div>
                  </div>

                  <div class="flex flex-col gap-3 md:flex-row items-center mt-2 font-light">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <div class="ml-4 text-md tracking-wide  ">
                          alessiogiovannini23@gmail.com
                      </div>
                  </div>
              </div>

              <form class="p-6 flex order-first md:order-last flex-col justify-center ">
                  <div class="flex flex-col">
                      <label for="name" class="hidden">Full Name</label>
                      <input type="name" name="name" onChange={handleChange} value={data.name} id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-900 border-gray-400 dark:border-gray-700 ont-semibold focus:border-indigo-500 text-white  focus:outline-none"></input>
                  </div>

                  <div class="flex flex-col mt-2">
                      <label for="email" class="hidden">Email</label>
                      <input type="email" name="email"  onChange={handleChange} value={data.email} id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-900 border-gray-400 dark:border-gray-700 font-semibold focus:border-indigo-500 text-white focus:outline-none"></input>
                  </div>

                  <div class="flex flex-col mt-2">
                      <label for="tel" class="hidden">Number</label>
                      <input type="tel" name="phone" id="tel" onChange={handleChange} value={data.phone}  placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-900 border-gray-400 dark:border-gray-700 text-white  font-semibold focus:border-indigo-500 focus:outline-none"></input>
                  </div>

                  <button  disabled={sending} onClick ={(event) => sendEmail(event)} type="submit" class="md:w-full bg-indigo-600 hover:bg-blue-dark text-white font-medium py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                      {sending ? "Sending Email...":"Submit"}
                  </button>
                    {message && (
                        <small className="py-2 text-green-600 text-base">Thank you for reaching out! Your contact request has been received, and I’ll get back to you as soon as possible.</small>
                    )}
                  
              </form>
          </div>
      </div>
  </div>
</div>




        <div class="flex flex-col">
            <div class="flex mt-24 mb-12 flex-row justify-between">
                <div class="">
                    <a class="hidden md:block cursor-pointer text-white hover:text-white uppercase">Alessio Giovannini </a>
                </div>

                {navigation.map((item)=>{
                    return (
<a class="hidden xl:block cursor-pointer text-gray-600 hover:text-white uppercase" href="#home">{item.name}</a>
                    )
                })}
                
             
            </div>
            <hr class="border-gray-600"/>
            <p class="w-full text-center my-5 text-gray-600">Copyright © 2024 Alessio Giovannini</p>
        </div>
    </div>
</div>
)
 

} 


export default Contact;
