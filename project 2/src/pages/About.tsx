import AnimatedSection from '../components/AnimatedSection';
import SkillBadge from '../components/SkillBadge';
import { 
  Bug, 
  Code, 
  Smartphone, 
  Globe, 
  BrainCircuit, 
  ShieldCheck, 
  Database,
  RefreshCw
} from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <AnimatedSection>
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-gray-600 text-lg max-w-3xl">
              Get to know more about my professional journey, skills, and the passion that drives me in quality assurance, security and AI.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                src="https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Kana Azibabari Lagalo" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h2 className="section-title mb-6">My Story</h2>
              <p className="text-gray-700 mb-4">
                With over 3 years in software quality assurance, I've dedicated my career to ensuring digital products not only function flawlessly but also provide exceptional user experiences.
              </p>
              <p className="text-gray-700 mb-4">
                My journey began as a manual tester for a freelance plaforms and financial services application, where I discovered my passion for identifying issues before they reached users. Since then, I've evolved my skillset to include test automation, API testing, Performance testing, mobile and web application testing and basic security testing.
              </p>
              <p className="text-gray-700 mb-4">
                Most recently, I've expanded my expertise to include prompt engineering for AI systems and I'm currently exploring the fascinating world of cybersecurity through penetration testing certifications.
              </p>
              <p className="text-gray-700">
                I believe in a holistic approach to quality—one that considers not just functionality, but security, performance, and user delight as essential components of truly excellent software.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title text-center mb-12">My Skills</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatedSection delay={0.1}>
              <div className="highlight-card">
                <Bug className="text-gray-900 mb-4" size={32} />
                <h3 className="text-xl font-medium mb-3">Manual Testing</h3>
                <p className="text-gray-600">
                  Comprehensive exploratory and scenario-based testing to uncover issues that automated tests might miss.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="highlight-card">
                <Code className="text-gray-900 mb-4" size={32} />
                <h3 className="text-xl font-medium mb-3">Test Automation</h3>
                <p className="text-gray-600">
                  Creating automated test suites using Selenium, Cypress, and Maestro.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="highlight-card">
                <Smartphone className="text-gray-900 mb-4" size={32} />
                <h3 className="text-xl font-medium mb-3">Mobile Testing</h3>
                <p className="text-gray-600">
                  Testing native and hybrid mobile applications across multiple devices and OS versions.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="highlight-card">
                <Database className="text-gray-900 mb-4" size={32} />
                <h3 className="text-xl font-medium mb-3">API Testing</h3>
                <p className="text-gray-600">
                  Validating API endpoints for functionality, reliability, performance, and security using Postman and RestAssured.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <div className="highlight-card">
                <BrainCircuit className="text-gray-900 mb-4" size={32} />
                <h3 className="text-xl font-medium mb-3">Prompt Engineering</h3>
                <p className="text-gray-600">
                  Crafting effective prompts for AI systems to generate accurate, relevant, and helpful outputs.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6}>
              <div className="highlight-card">
                <ShieldCheck className="text-gray-900 mb-4" size={32} />
                <h3 className="text-xl font-medium mb-3">Cybersecurity</h3>
                <p className="text-gray-600">
                  Identifying vulnerabilities through security testing and implementing best practices.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.7}>
              <div className="highlight-card">
                <Globe className="text-gray-900 mb-4" size={32} />
                <h3 className="text-xl font-medium mb-3">Web Testing</h3>
                <p className="text-gray-600">
                  Testing web applications across browsers and devices to ensure consistent functionality and user experience.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.8}>
              <div className="highlight-card">
                <RefreshCw className="text-gray-900 mb-4" size={32} />
                <h3 className="text-xl font-medium mb-3">Regression Testing</h3>
                <p className="text-gray-600">
                  Ensuring new code changes don't affect existing functionality through comprehensive regression testing.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title mb-10">Tools & Technologies</h2>
          </AnimatedSection>
          
          <div className="flex flex-wrap gap-3">
            <AnimatedSection delay={0.1}>
              <SkillBadge icon={<span>🔍</span>} label="Selenium" />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <SkillBadge icon={<span>🧪</span>} label="Cypress" />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <SkillBadge icon={<span>🔄</span>} label="TestNG" />
            </AnimatedSection>
            <AnimatedSection delay={0.25}>
              <SkillBadge icon={<span>📱</span>} label="Appium" />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <SkillBadge icon={<span>📡</span>} label="Postman" />
            </AnimatedSection>
            <AnimatedSection delay={0.35}>
              <SkillBadge icon={<span>⚡</span>} label="RestAssured" />
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <SkillBadge icon={<span>🔧</span>} label="Jira" />
            </AnimatedSection>
            <AnimatedSection delay={0.45}>
              <SkillBadge icon={<span>📊</span>} label="TestRail" />
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <SkillBadge icon={<span>🚀</span>} label="Jenkins" />
            </AnimatedSection>
            <AnimatedSection delay={0.55}>
              <SkillBadge icon={<span>🔍</span>} label="Burp Suite" />
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <SkillBadge icon={<span>🤖</span>} label="ChatGPT" />
            </AnimatedSection>
            <AnimatedSection delay={0.65}>
              <SkillBadge icon={<span>✨</span>} label="GitHub Copilot" />
            </AnimatedSection>
            <AnimatedSection delay={0.7}>
              <SkillBadge icon={<span>☁️</span>} label="AWS" />
            </AnimatedSection>
            <AnimatedSection delay={0.75}>
              <SkillBadge icon={<span>🐳</span>} label="Docker" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-gray-900">
              <h2 className="text-2xl font-semibold mb-4">A Personal Note</h2>
              <p className="text-gray-700 mb-4">
                When I'm not hunting bugs or crafting test strategies, you'll find me deep-diving into cybersecurity courses, exploring the latest AI innovations, or mentoring aspiring QA professionals.
              </p>
              <p className="text-gray-700 mb-4">
                I'm currently pursuing a certification in ethical hacking to combine my QA background with more advanced security skills—a combination I believe will be increasingly valuable as digital products continue to evolve.
              </p>
              <p className="text-gray-700">
                I firmly believe that quality assurance is not just about finding defects but about being an advocate for the end user at every stage of the development process.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;