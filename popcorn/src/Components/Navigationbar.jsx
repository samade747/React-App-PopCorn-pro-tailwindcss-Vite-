import React, { useState } from "react"


const Navbar = ({ inputValue, setInputValue }) => {

const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <div className="sticky top-0 z-50 bg-purple-700 border-2 border-black flex justify-between items-center px-10 py-0 bg-purple-700">
            <div className="max-w-screen-lg flex items-center justify-between gap-40 p-5">
                <div className="text-purple-200 text-lg my-2">
                    <span className="text-2x1">🍿</span>usePopcorn
                </div>

                <div className="flex justify-between items-center border border-gray-300 rounded-md p-2">
                    <input type="text" placeholder="Movies Search.." 
                    className="w-64 sm:w-auto md:w-auto px-2 py-1 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
                    onChange={(e) => {
                    console.log(e.target.value);
                    setInputValue(e.target.value)
                    }}
                    />
                    </div>



                <button className="block md:hidden lg:hidden text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (<img src="/path/to/open-menu.svg" alt="Open Menu" className="h-6 w-6" />)
                    : (<img src="/path/to/close-menu.svg" alt="Close Menu" className="h-6 w-6" />)}</button>
                    
                    <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:hidden lg:hidden`}>
                    <a href="#" className="text-purple-200 hover:text-white px-3 py-2">Search</a>
                </div>

                
            </div>
        </div>
    )

}


export default Navbar