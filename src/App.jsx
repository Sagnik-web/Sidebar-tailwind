import { useState } from 'react'

import './App.css'

function App() {
 // State to toggle the sidebar visibility
 const [isOpen, setIsOpen] = useState(false);

 const toggleSidebar = () => {
   setIsOpen(!isOpen);
 };
 const handleClose=()=>{
  if(isOpen){

    document.getElementById('close').addEventListener('click',()=>{
     setIsOpen(false)
    })
  }
 }

 
  return (
    <div className="flex h-screen" >
    {/* Sidebar */}
    <div
      className={`fixed top-0 left-0 z-50 w-64 h-full bg-gray-800 transition-transform duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="text-white p-4">
        <h2 className="text-2xl font-bold">Sidebar</h2>
        <ul>
        <li className="mt-4" onClick={toggleSidebar}><a href="#" className="text-white">Close</a></li>
          <li className="mt-4"><a href="#" className="text-white">Home</a></li>
          <li className="mt-4"><a href="#" className="text-white">About</a></li>
          <li className="mt-4"><a href="#" className="text-white">Services</a></li>
          <li className="mt-4"><a href="#" className="text-white">Contact</a></li>
        </ul>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 p-8" id='close' onClick={handleClose} >
      <button
        onClick={toggleSidebar}
        className="px-4 py-2 text-white bg-blue-500 rounded-md mb-4"
      >
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
      <h1 className="text-4xl">Main Content</h1>
      <p>This is the content area. The sidebar can be toggled using the button above.</p>


        {/* Main Content Area with Dummy Text */}
        <h1 className="text-4xl mb-4">Main Content</h1>
        <button className=' absolute right-1' onClick={()=>console.log("Click Hear")}>Click</button>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Lorem Ipsum Dolor Sit Amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>
          
          <h2 className="text-2xl font-semibold">Lorem Ipsum Dolor Sit Amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>

          <h2 className="text-2xl font-semibold">Lorem Ipsum Dolor Sit Amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>
        </section>


          {/* Main Content Area with Dummy Text */}
          <h1 className="text-4xl mb-4">Main Content</h1>
        
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Lorem Ipsum Dolor Sit Amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>
          
          <h2 className="text-2xl font-semibold">Lorem Ipsum Dolor Sit Amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>

          <h2 className="text-2xl font-semibold">Lorem Ipsum Dolor Sit Amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>
        </section>

          {/* Main Content Area with Dummy Text */}
          <h1 className="text-4xl mb-4">Main Content</h1>
        
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Lorem Ipsum Dolor Sit Amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>
          
          <h2 className="text-2xl font-semibold">Lorem Ipsum Dolor Sit Amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>

          <h2 className="text-2xl font-semibold">Lorem Ipsum Dolor Sit Amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>
        </section>


          {/* Main Content Area with Dummy Text */}
          <h1 className="text-4xl mb-4">Main Content</h1>
        
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Lorem Ipsum Dolor Sit Amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>
          
          <h2 className="text-2xl font-semibold">Lorem Ipsum Dolor Sit Amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>

          <h2 className="text-2xl font-semibold">Lorem Ipsum Dolor Sit Amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
          </p>
        </section>
    </div>
  </div>
  )
}

export default App
