import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';
import { 
  CircleDollarSign, 
  CreditCard, 
  Briefcase,
  BadgeDollarSign,
  ShieldCheck,
  Search
} from 'lucide-react';

// Project data for scalability
const projectsData = [
  {
    id: 1,
    title: 'Circle Wealth App',
    description: 'A comprehensive fintech application that allows users to manage investments, bank accounts, and cryptocurrency transactions in one place.',
    contributions: [
      'Led end-to-end QA strategy and implementation',
      'Created automated test suite covering critical user flows',
      'Performed extensive API testing and integration validation',
      'Reduced critical bugs in production by 78%'
    ],
    icon: <CircleDollarSign size={24} />,
    tags: ['Fintech', 'Mobile', 'API Testing', 'Automation'],
    category: 'QA Testing'
  },
  {
    id: 2,
    title: 'CredPal Crypto Testing',
    description: 'A cryptocurrency payment gateway that enables secure transactions between multiple blockchain networks and traditional banking systems.',
    contributions: [
      'Implemented test framework for cryptocurrency transactions',
      'Conducted security testing for wallet integrations',
      'Created performance tests for high-volume transaction scenarios',
      'Established CI/CD test pipeline integration'
    ],
    icon: <CreditCard size={24} />,
    tags: ['Crypto', 'Security Testing', 'Performance', 'CI/CD'],
    category: 'QA Testing'
  },
  {
    id: 3,
    title: 'Topcoder Freelance Testing',
    description: 'Participated in multiple competitive testing challenges across various industries, ranking in the top 5% of all QA professionals on the platform.',
    contributions: [
      'Executed exploratory testing for 12+ applications',
      'Identified critical security vulnerabilities in banking applications',
      'Provided detailed defect reports with reproduction steps',
      'Won "Best Test Strategy" award for healthcare platform challenge'
    ],
    icon: <Briefcase size={24} />,
    tags: ['Freelance', 'Cross-industry', 'Exploratory Testing', 'Security'],
    category: 'QA Testing'
  },
  {
    id: 4,
    title: 'PaymentIQ Integration',
    description: 'Validated the integration of a payment processing system with multiple merchant systems across various countries and currencies.',
    contributions: [
      'Tested integration with 15+ payment providers',
      'Created cross-browser compatibility test suite',
      'Verified compliance with financial regulations',
      'Performed load testing for high-traffic scenarios'
    ],
    icon: <BadgeDollarSign size={24} />,
    tags: ['Payments', 'Integration Testing', 'Compliance', 'Cross-browser'],
    category: 'QA Testing'
  },
  {
    id: 5,
    title: 'SecureNet Penetration Testing',
    description: 'Conducted ethical hacking and vulnerability assessment for a network security company\'s client portal and internal dashboard.',
    contributions: [
      'Identified and documented 7 critical security vulnerabilities',
      'Performed SQL injection testing and prevention',
      'Executed cross-site scripting (XSS) assessment',
      'Created security test automation framework'
    ],
    icon: <ShieldCheck size={24} />,
    tags: ['Cybersecurity', 'Ethical Hacking', 'Vulnerability Assessment', 'OWASP'],
    category: 'Security'
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get unique categories for filter
  const categories = ['All', ...new Set(projectsData.map(project => project.category))];
  
  // Filter projects based on category and search query
  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <AnimatedSection>
            <h1 className="text-4xl font-bold mb-6">My Portfolio</h1>
            <p className="text-gray-600 text-lg max-w-3xl">
              Explore my projects and professional work in quality assurance, security testing, and prompt engineering.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-gray-200">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-md transition-all ${
                    filter === category 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.1}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    contributions={project.contributions}
                    icon={project.icon}
                    tags={project.tags}
                  />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found matching your criteria.</p>
              <button 
                onClick={() => {setFilter('All'); setSearchQuery('');}}
                className="mt-4 text-blue-600 hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Portfolio Note */}
      <section className="py-10 bg-gray-50">
        <div className="container">
          <AnimatedSection>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-3">About This Portfolio</h3>
              <p className="text-gray-600">
                This portfolio website was conceptualized, structured, and built using AI tools, showcasing real-world prompt engineering skills. The process demonstrates how effective collaboration between human creativity and AI assistance can produce professional, high-quality results.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;