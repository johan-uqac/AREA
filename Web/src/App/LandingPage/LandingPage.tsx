import { Card, Link } from '@mui/material'
import AOS from 'aos';
import { useEffect } from 'react';

type AuthentificationLayoutProps = {
  children: React.ReactNode
  title: string
}

export default function LandingPage() {
  useEffect(() => {
    AOS.init();
  }, [])
  const assets = {
    pic: require('../Components/assets/pic.png'),
    backgroundImage: require('../Components/assets/background.jpg'),
  }
  var sectionStyle = {
    backgroundImage: `url(${assets.backgroundImage})`,
  }
 
  
  return (
  <div>
    <section className="w-full px-8 text-gray-700 bg-white">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
            <div className="relative flex flex-col md:flex-row">
                <a href="#_" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                    <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">Tp3<span className="text-teal-600">Web</span></span>
                </a>
            </div>
            <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-slate-900 border border-transparent rounded-md shadow-sm hover:bg-slate-900 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-slate-900">
                    Sign in
                </a>
                <a href="#" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-teal-600 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-teal-600">
                    Sign up
                </a>
            </div>
        </div>
    </section>
    <section className="px-2 py-32 bg-white md:px-0">
    <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
      <div className="flex flex-wrap items-center sm:-mx-3">
        <div className="w-full md:w-1/2 md:px-3">
          <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Sign Up and discover how to </span>
              <span className="block text-teal-600 xl:inline">automatize</span>
            </h1>
            <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Our intuitive platform allows you to seamlessly connect your favorite applications, bringing to life smooth and efficient workflows.</p>
            <div className="relative flex flex-col sm:flex-row sm:space-x-4">
              
              <a href="https://fr.wikipedia.org/wiki/Zapier" className="flex items-center px-6 py-3 text-gray-0 bg-teal-600 rounded-md hover:bg-gray-200 hover:text-gray-600">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              <img src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="computer"/>
            </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 bg-white">
  <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
    <div className="flex flex-wrap items-center -mx-3">
      <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div className="w-full lg:max-w-md">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">How does it works ?</h2>
          <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">It s never been easier to free your team from time-consuming tasks to focus on innovation and growth. :</p>
          <ul>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
              <span className="font-medium text-gray-500">Quick Signup</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
            <span className="font-medium text-gray-500">Select Your Applications </span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 512 512"><path d="M464 6.1c9.5-8.5 24-8.1 33 .9l8 8c9 9 9.4 23.5 .9 33l-85.8 95.9c-2.6 2.9-4.1 6.7-4.1 10.7V176c0 8.8-7.2 16-16 16H384.2c-4.6 0-8.9 1.9-11.9 5.3L100.7 500.9C94.3 508 85.3 512 75.8 512c-8.8 0-17.3-3.5-23.5-9.8L9.7 459.7C3.5 453.4 0 445 0 436.2c0-9.5 4-18.5 11.1-24.8l111.6-99.8c3.4-3 5.3-7.4 5.3-11.9V272c0-8.8 7.2-16 16-16h34.6c3.9 0 7.7-1.5 10.7-4.1L464 6.1zM432 288c3.6 0 6.7 2.4 7.7 5.8l14.8 51.7 51.7 14.8c3.4 1 5.8 4.1 5.8 7.7s-2.4 6.7-5.8 7.7l-51.7 14.8-14.8 51.7c-1 3.4-4.1 5.8-7.7 5.8s-6.7-2.4-7.7-5.8l-14.8-51.7-51.7-14.8c-3.4-1-5.8-4.1-5.8-7.7s2.4-6.7 5.8-7.7l51.7-14.8 14.8-51.7c1-3.4 4.1-5.8 7.7-5.8zM87.7 69.8l14.8 51.7 51.7 14.8c3.4 1 5.8 4.1 5.8 7.7s-2.4 6.7-5.8 7.7l-51.7 14.8L87.7 218.2c-1 3.4-4.1 5.8-7.7 5.8s-6.7-2.4-7.7-5.8L57.5 166.5 5.8 151.7c-3.4-1-5.8-4.1-5.8-7.7s2.4-6.7 5.8-7.7l51.7-14.8L72.3 69.8c1-3.4 4.1-5.8 7.7-5.8s6.7 2.4 7.7 5.8zM208 0c3.7 0 6.9 2.5 7.8 6.1l6.8 27.3 27.3 6.8c3.6 .9 6.1 4.1 6.1 7.8s-2.5 6.9-6.1 7.8l-27.3 6.8-6.8 27.3c-.9 3.6-4.1 6.1-7.8 6.1s-6.9-2.5-7.8-6.1l-6.8-27.3-27.3-6.8c-3.6-.9-6.1-4.1-6.1-7.8s2.5-6.9 6.1-7.8l27.3-6.8 6.8-27.3c.9-3.6 4.1-6.1 7.8-6.1z"/></svg>
              <span className="font-medium text-gray-500">Build Your Automations</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 512 512"><path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>              
            <span className="font-medium text-gray-500">Launch and Optimize</span>
            </li>
          </ul>
        </div>
      </div>
    <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full" src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="robot hand"/></div>
    </div>
  </div>
</section>
<section className="text-gray-700 body-font bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading text-teal-600">Meet our Team !</h2>
      <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6" >
    Meet the dynamic trio from the world of IT. Hailing from diverse backgrounds but united by a shared passion for technology</p>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-40 h-40 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-8" src="https://images.unsplash.com/photo-1619476006517-75d535a84652?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <h2 className="text-gray-900 title-font font-medium">Gabrielle <h2 className="text-teal-600 title-font font-medium"> Walgraef</h2> </h2>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-40 h-40  bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-8" src="https://images.unsplash.com/photo-1641761934425-af2fe6a2cc0d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          <h2 className="text-teal-600 title-font font-medium">Mathieu<h2 className="text-gray-900 title-font font-medium"> Muty</h2> </h2>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-40 h-40  bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-8" src="https://images.unsplash.com/photo-1535062311770-93adb0401917?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          <h2 className="text-gray-900 title-font font-medium">Johan <h2 className="text-teal-600 title-font font-medium"> Ch</h2> </h2>
        </div>
      </div>
      </div>
      </div>
    </section>
  </div>
);
}

