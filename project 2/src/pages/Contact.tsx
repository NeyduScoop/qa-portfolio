import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill in all required fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address.');
      return;
    }
    
    // In a real app, you would send the form data to a server here
    console.log('Form submitted:', formData);
    
    // Reset form and show success message
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setFormError('');
    setFormSubmitted(true);
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <AnimatedSection>
            <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
            <p className="text-gray-600 text-lg max-w-3xl">
              Have a question, project idea, or want to collaborate? I'd love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
                
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-0.5" size={20} />
                    <div>
                      <h3 className="text-green-800 font-medium">Message Sent!</h3>
                      <p className="text-green-600">Thank you for your message. I'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {formError && (
                      <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6 text-red-600">
                        {formError}
                      </div>
                    )}
                    
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 mb-2">Name <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input"
                        required
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary flex items-center">
                      Send Message
                      <Send size={18} className="ml-2" />
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="text-blue-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                      <a href="mailto:contact@kanalagalo.com" className="text-blue-600 hover:underline">
                        contact@kanalagalo.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Linkedin className="text-blue-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">LinkedIn</h3>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        linkedin.com/in/kanalagalo
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Github className="text-blue-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">GitHub</h3>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        github.com/kanalagalo
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-blue-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600">Remote - Working globally</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-4">Response Time</h3>
                  <p className="text-gray-600">
                    I typically respond to inquiries within 24-48 hours. For urgent matters, please indicate so in the subject line.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
          </AnimatedSection>
          
          <div className="space-y-6">
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">What services do you offer?</h3>
                <p className="text-gray-600">
                  I specialize in software quality assurance, test automation, prompt engineering, and basic penetration testing. My services include creating comprehensive test strategies, implementing automated test frameworks, and ensuring application security.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">Do you work remotely?</h3>
                <p className="text-gray-600">
                  Yes, I work remotely with clients worldwide. I have experience collaborating with distributed teams across different time zones and can adapt to your team's workflow.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">What are your rates?</h3>
                <p className="text-gray-600">
                  My rates vary depending on project scope, complexity, and timeline. Please contact me with details about your project, and I'll provide a customized quote based on your specific needs.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">Can you assist with short-term projects?</h3>
                <p className="text-gray-600">
                  Absolutely! I'm available for both short-term projects and long-term collaborations. Whether you need help with a specific testing phase or ongoing quality assurance, I can tailor my services to your timeline.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;