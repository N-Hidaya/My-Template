

const Footer = () => {
    
    return (
        <footer className="bg-[#402D29] w-full md:h-20 p-2 flex flex-col justify-evenly items-center py-15">
            <nav >
              <ul className="flex flex-row">
                <li className="px-4">
                  <a target="_blank" href="/TOS" rel="noopener noreferrer" className="text-white">Terms of Service</a>
                </li>
                <li className="px-4">
                  <a target="_blank" href="/PriPol" rel="noopener noreferrer" className="text-white">Privacy Policy</a>
                </li>
              </ul>
            </nav>
            <p className="text-white items-center">&copy; 2023 AI Daya. All rights reserved.</p>
    </footer>
  );
            
    
}

export default Footer