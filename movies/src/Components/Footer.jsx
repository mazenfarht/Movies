import React from 'react';
const Footer = () => {
  
  return (
    <footer className="bg-black bg-opacity-30 text-white py-8 px-6 mt-12">
      <div className="max-w-screen-xl mx-auto text-sm">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-2">FAQ</h4>
            <ul>
              <li><a href="/home" className="hover:underline">Help Center</a></li>
              <li><a href="/home" className="hover:underline">Terms of Use</a></li>
              <li><a href="/home" className="hover:underline">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">About</h4>
            <ul>
              <li><a href="/home" className="hover:underline">About Us</a></li>
              <li><a href="/home" className="hover:underline">Careers</a></li>
              <li><a href="/home" className="hover:underline">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Social</h4>
            <ul>
              <li><a href="/home" className="hover:underline">Facebook</a></li>
              <li><a href="/home" className="hover:underline">Twitter</a></li>
              <li><a href="/home" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Legal</h4>
            <ul>
              <li><a href="/home" className="hover:underline">Cookies</a></li>
              <li><a href="/home" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="/home"className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Connect</h4>
            <ul>
              <li><a href="/home" className="hover:underline">Contact Us</a></li>
              <li><a href="/home" className="hover:underline">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Corporate</h4>
            <ul>
              <li><a href="/home" className="hover:underline">Investor Relations</a></li>
              <li><a href="/home" className="hover:underline">Partnerships</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} MAZENMOSTAFA. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
