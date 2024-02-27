import React, { useState } from "react"


const Navbar = ({}) => {

const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <div className="sticky top-0 z-50 bg-purple-700 border-2 border-black flex justify-between items-center px-10 py-0 bg-purple-700">
            <div className="max-w-screen-lg ">
                <h3 className="text-purple-200 text-lg my-2">
                    <span className="text-2x1">🍿</span>usePopcorn
                </h3>
                <button className="block md:hidden text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                    <img src="/path/to/open-menu.svg" alt="Open Menu" className="h-6 w-6" />
                    ) : (
                    <img src="/path/to/close-menu.svg" alt="Close Menu" className="h-6 w-6" />
                    )}
                    </button>
                <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                        <a href="#" className="text-purple-200 hover:text-white px-3 py-2">Search</a>
                </div>

            </div>
        </div>
    )

}


export default Navbar