import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Code2, 
  Terminal, 
  BrainCircuit,
  ArrowRight
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import BlogPostCard from '../components/BlogPostCard';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Hi, I'm Kana Azibabari Lagalo
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
                Software QA Engineer & Prompt Engineer
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Building quality and security into technology — from idea to execution.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/portfolio" className="btn btn-primary flex items-center">
                  View My Work
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get In Touch
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block"
            >
              <img 
                src="https://res.cloudinary.com/dmjxpa5gy/image/upload/v1745764743/photo_2024-01-30_14.52.44_tzpuvw_c_crop_ar_1_1_hmxo5o.jpg" 
                alt="Professional workspace" 
                className="rounded-lg shadow-lg w-[90%] mx-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlight Cards */}
      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title text-center mb-12">My Expertise</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection delay={0.1}>
              <div className="highlight-card">
                <ShieldCheck size={32} className="text-gray-900 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  Ensuring software meets the highest standards of quality, reliability, and user experience.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="highlight-card">
                <Code2 size={32} className="text-gray-900 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Test Automation</h3>
                <p className="text-gray-600">
                  Implementing efficient automated tests to increase coverage and save time.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="highlight-card">
                <Terminal size={32} className="text-gray-900 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
                <p className="text-gray-600">
                  Identifying and addressing security vulnerabilities through penetration testing.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="highlight-card">
                <BrainCircuit size={32} className="text-gray-900 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Prompt Engineering</h3>
                <p className="text-gray-600">
                  Creating effective prompts for AI models to generate high-quality, relevant outputs.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <AnimatedSection>
            <div className="flex justify-between items-center mb-12">
              <h2 className="section-title">Featured Projects</h2>
              <Link to="/portfolio" className="text-gray-900 hover:text-gray-700 flex items-center">
                View All Projects
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection delay={0.1}>
              <div className="card h-full">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Circle Wealth App</h3>
                  <p className="text-gray-600 mb-4">
                    Led comprehensive QA efforts for a fintech application managing crypto investments and banking services.
                  </p>
                  <Link to="/portfolio" className="text-gray-900 hover:underline inline-flex items-center">
                    View Details
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="card h-full">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">CredPal Crypto Testing</h3>
                  <p className="text-gray-600 mb-4">
                    Implemented automated test frameworks for a cryptocurrency payment gateway, ensuring transaction integrity.
                  </p>
                  <Link to="/portfolio" className="text-gray-900 hover:underline inline-flex items-center">
                    View Details
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <div className="flex justify-between items-center mb-12">
              <h2 className="section-title">Latest Blog Posts</h2>
              <Link to="/blog" className="text-gray-900 hover:text-gray-700 flex items-center">
                View All Posts
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <BlogPostCard
                title="How I Use Prompt Engineering for QA"
                excerpt="Leveraging AI tools to enhance and streamline the software testing process..."
                date="May 10, 2025"
                category="Prompt Engineering"
                imageUrl="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <BlogPostCard
                title="Getting Started with API Testing"
                excerpt="A comprehensive guide to testing APIs effectively, including tools and best practices..."
                date="April 22, 2025"
                category="QA Testing"
                imageUrl="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link to="/contact" className="inline-block bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors duration-200">
              Get In Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;