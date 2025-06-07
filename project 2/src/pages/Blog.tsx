import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import BlogPostCard from '../components/BlogPostCard';
import { Search, ArrowRight, ArrowLeft } from 'lucide-react';

// Blog post data for scalability
const blogPostsData = [
  {
    id: 1,
    title: 'How I Use Prompt Engineering for QA',
    excerpt: 'Leveraging AI tools to enhance and streamline the software testing process, improving efficiency and coverage.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nulla eget dui finibus facilisis. Nullam tristique nisl a sapien facilisis, eu commodo arcu pulvinar.',
    date: 'May 10, 2025',
    category: 'Prompt Engineering',
    imageUrl: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Getting Started with API Testing',
    excerpt: 'A comprehensive guide to testing APIs effectively, including tools and best practices for ensuring robust API functionality.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nulla eget dui finibus facilisis. Nullam tristique nisl a sapien facilisis, eu commodo arcu pulvinar.',
    date: 'April 22, 2025',
    category: 'QA Testing',
    imageUrl: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'The Future of Automated Testing',
    excerpt: 'Exploring emerging trends in test automation and how AI is transforming traditional QA approaches.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nulla eget dui finibus facilisis. Nullam tristique nisl a sapien facilisis, eu commodo arcu pulvinar.',
    date: 'March 15, 2025',
    category: 'Automation',
    imageUrl: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Security Testing for Modern Web Applications',
    excerpt: 'Essential security testing techniques for protecting web applications from common vulnerabilities and threats.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nulla eget dui finibus facilisis. Nullam tristique nisl a sapien facilisis, eu commodo arcu pulvinar.',
    date: 'February 28, 2025',
    category: 'Security',
    imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    title: 'Mobile Testing Challenges and Solutions',
    excerpt: 'Navigating the complexities of testing mobile applications across different devices and operating systems.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac nulla eget dui finibus facilisis. Nullam tristique nisl a sapien facilisis, eu commodo arcu pulvinar.',
    date: 'January 17, 2025',
    category: 'Mobile Testing',
    imageUrl: 'https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Get unique categories
  const categories = ['All', ...new Set(blogPostsData.map(post => post.category))];

  // Filter posts based on search and category
  const filteredPosts = blogPostsData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div>
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <AnimatedSection>
            <h1 className="text-4xl font-bold mb-6">Blog</h1>
            <p className="text-gray-600 text-lg max-w-3xl">
              Insights, tutorials, and thoughts on quality assurance, prompt engineering, and cybersecurity.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b border-gray-200">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-md transition-all ${
                    selectedCategory === category 
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
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container">
          {currentPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentPosts.map((post, index) => (
                  <AnimatedSection key={post.id} delay={index * 0.1}>
                    <BlogPostCard
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      category={post.category}
                      imageUrl={post.imageUrl}
                    />
                  </AnimatedSection>
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-12">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-md flex items-center justify-center ${
                      currentPage === 1 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <ArrowLeft size={20} />
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-md ${
                        currentPage === page 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-md flex items-center justify-center ${
                      currentPage === totalPages 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                className="mt-4 text-blue-600 hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <style>
              {`
                @font-face {
                  font-display: block;
                  font-family: Roboto;
                  src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
                }

                @font-face {
                  font-display: fallback;
                  font-family: Roboto;
                  font-weight: 600;
                  src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
                }

                @font-face {
                  font-display: fallback;
                  font-family: Roboto;
                  font-weight: 700;
                  src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
                }

                #sib-container input:-ms-input-placeholder {
                  text-align: left;
                  font-family: Helvetica, sans-serif;
                  color: #c0ccda;
                }

                #sib-container input::placeholder {
                  text-align: left;
                  font-family: Helvetica, sans-serif;
                  color: #c0ccda;
                }

                #sib-container textarea::placeholder {
                  text-align: left;
                  font-family: Helvetica, sans-serif;
                  color: #c0ccda;
                }
              `}
            </style>
            <div className="sib-form">
              <div id="sib-form-container" className="sib-form-container">
                <div id="error-message" className="sib-form-message-panel hidden" style={{fontSize:'16px', textAlign:'left', fontFamily:'Helvetica, sans-serif', color:'#661d1d', backgroundColor:'#ffeded', borderRadius:'3px', borderColor:'#ff4949',maxWidth:'540px'}}>
                  <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                    Your subscription could not be saved. Please try again.
                  </div>
                </div>
                <div id="success-message" className="sib-form-message-panel hidden" style={{fontSize:'16px', textAlign:'left', fontFamily:'Helvetica, sans-serif', color:'#085229', backgroundColor:'#e7faf0', borderRadius:'3px', borderColor:'#13ce66',maxWidth:'540px'}}>
                  <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                    Thanks for subscribing!
                  </div>
                </div>
                <div id="sib-container" className="sib-container--large sib-container--vertical" style={{textAlign:'center', backgroundColor:'rgba(255,255,255,1)', maxWidth:'540px', borderRadius:'3px', borderWidth:'1px', borderColor:'#C0CCD9', borderStyle:'dashed'}}>
                  <form id="sib-form" method="POST" action="https://sibforms.com/serve/MUIFAI_N0Jm7ywEw8tUfqVai5gds0Q7ykgXC_vwJEMNEucRvrRFCS26K9cI1HrTjFzPSDFrt95-hszX0s9UN2q0-ZVOW0J5PTNJVpkaDMdKycavItfVvCamnaVIWL_A8I-uLG78Z647QfR_1iaoGnJ-Wxp0Hp7RI8Q1WqUsuXvvHMa-Z8gkpCk2gaOi4-kHvs-VGaQdwbiffwd2c" data-type="subscription">
                    <div style={{padding: '8px 0'}}>
                      <div className="sib-input sib-form-block">
                        <div className="form__entry entry_block">
                          <div className="form__label-row">
                            <label className="entry__label" style={{fontWeight: '700', fontSize:'16px', textAlign:'left', fontFamily:'Helvetica, sans-serif', color:'#3c4858'}} htmlFor="EMAIL" data-required="*">
                              Enter your email address to subscribe
                            </label>
                            <div className="entry__field">
                              <input className="input" type="text" id="EMAIL" name="EMAIL" autoComplete="off" placeholder="" data-required="true" required />
                            </div>
                          </div>
                          <label className="entry__error entry__error--primary" style={{fontSize:'16px', textAlign:'left', fontFamily:'Helvetica, sans-serif', color:'#661d1d', backgroundColor:'#ffeded', borderRadius:'3px', borderColor:'#ff4949'}}></label>
                          <label className="entry__specification" style={{fontSize:'12px', textAlign:'left', fontFamily:'Helvetica, sans-serif', color:'#8390A4'}}>
                            Provide your email address to subscribe. I'll never share your email, and you can unsubscribe at any time.
                          </label>
                        </div>
                      </div>
                    </div>
                    <div style={{padding: '8px 0'}}>
                      <div className="sib-form-block" style={{textAlign: 'left'}}>
                        <button className="sib-form-block__button sib-form-block__button-with-loader" style={{fontSize:'16px', textAlign:'left', fontWeight:'700', fontFamily:'Helvetica, sans-serif', color:'#FFFFFF', backgroundColor:'#0460ec', borderRadius:'3px', borderWidth:'0px'}} form="sib-form" type="submit">
                          SUBSCRIBE
                        </button>
                      </div>
                    </div>
                    <input type="text" name="email_address_check" value="" className="input--hidden" />
                    <input type="hidden" name="locale" value="en" />
                  </form>
                </div>
              </div>
            </div>
            <script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Blog;