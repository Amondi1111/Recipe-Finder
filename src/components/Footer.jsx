import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'

function Footer() {
    return (
        <footer className="bg-[#9B3131] text-gray-300 py-8 mt-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">


              <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-bold text-white">You can be a Recipe Master yaay!</h2>
                <p className="text-sm text-[#FF6347]">Find, cook and Enjoy</p>


                </div> 
                 {/*Navigation Links */}
                 <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="/" className="hover:text-white transition-colors">Home</a>
                    <a href="/Login" className="hover:text-white transition-colors">Login</a>
                    <a href="/Signup" className="hover:text-white transition-colors">Signup</a>
                
                 </div>

                 {/* Social Links */}
                 <div className="flex gap-4 mt-4 md:mt-0 text-xl">
                    <a href="#" className="hover:text-white transition-colors">
                        <FaFacebookF />
                        </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <FaYoutube />
                        </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <FaTwitter />
                        </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <FaInstagram />
                        </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <SiTiktok />
                        </a>
                 </div>
            </div>
            <div className="text-center text-[#FF6347] text-sm mt-6">
                &copy; {new Date().getFullYear()} Become Recipe Master. All rights reserved.

            </div>
        </footer>
    );
}

export default Footer;