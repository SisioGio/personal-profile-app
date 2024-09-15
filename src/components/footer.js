import Fade from "react-reveal/Fade";
function Footer() {


  return (
    <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-6 md:px-12 text-center">
      {/* Links Section */}
      <div className="flex justify-center space-x-6 mb-6">
        <a href="/about" className="hover:underline">
          About
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
        <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6 fill-current text-white hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.65 9.12 8.44 9.88v-6.99h-2.54V12h2.54V9.87c0-2.53 1.5-3.93 3.8-3.93 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.25 0-1.64.78-1.64 1.58V12h2.78l-.44 2.89h-2.34v6.99C18.35 21.12 22 16.99 22 12z"/>
          </svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6 fill-current text-white hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.17 4.17 0 001.82-2.3 8.31 8.31 0 01-2.62 1A4.13 4.13 0 0015.5 4c-2.26 0-4.1 1.85-4.1 4.13 0 .32.03.63.1.93-3.41-.17-6.44-1.81-8.47-4.31a4.11 4.11 0 00-.56 2.08c0 1.43.73 2.69 1.83 3.42a4.11 4.11 0 01-1.86-.52v.05c0 2 .1 3.9 2.37 4.3a4.17 4.17 0 01-1.84.07c.51 1.61 2 2.79 3.76 2.82a8.32 8.32 0 01-5.16 1.78c-.33 0-.65-.02-.97-.06a11.74 11.74 0 006.36 1.86c7.63 0 11.8-6.32 11.8-11.81 0-.18 0-.36-.01-.53A8.47 8.47 0 0024 4.56a8.27 8.27 0 01-2.36.64A4.12 4.12 0 0022.46 6z"/>
          </svg>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6 fill-current text-white hover:text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.5 0h-19C1.12 0 0 1.12 0 2.5v19C0 22.88 1.12 24 2.5 24h19c1.38 0 2.5-1.12 2.5-2.5v-19C24 1.12 22.88 0 21.5 0zm-14 20H3V9h4.5v11zm-2.25-12.4a2.62 2.62 0 110-5.25 2.62 2.62 0 010 5.25zM21 20h-4.5v-5.61c0-1.34-.03-3.06-1.87-3.06-1.88 0-2.17 1.47-2.17 2.97V20H8V9h4.32v1.51h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3.01 5.4 6.93V20z"/>
          </svg>
        </a>
      </div>

      {/* Copyright Section */}
      <p className="text-sm">&copy; 2024 [Your Website Name]. All Rights Reserved.</p>
    </div>
  </footer>
  );
}

export default Footer;
