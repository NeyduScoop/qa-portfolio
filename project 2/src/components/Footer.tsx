import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ojinmah Chinedu Christian</h3>
            <p className="text-gray-400 mb-4">Building quality and security into technology — from idea to execution.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/NeyduScoop" target="_blank" rel="noopener noreferrer" className="footer-link">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/chinedu-ojinmah-4b520b198" target="_blank" rel="noopener noreferrer" className="footer-link">
                <Linkedin size={20} />
              </a>
              <a href="mailto:ojinmahchinedu15@gmail.com" className="footer-link">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/portfolio" className="footer-link">Portfolio</a></li>
              <li><a href="/blog" className="footer-link">Blog</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Feel free to reach out for collaborations or just a friendly hello!</p>
            <a href="mailto:contact@kanalagalo.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              contact@ojinmahchinedu.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {currentYear} Ojinmah Chinedu Christian. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">Built with ❤️ and AI tools like ChatGPT and GitHub Copilot.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;