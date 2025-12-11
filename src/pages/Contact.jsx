import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-blue-100 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Get in touch with us for more information about our SNR Agriculture project
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8">
                We'd love to hear from you about our SNR Agriculture project in
                Chin State. Reach out to us for more information or collaboration
                opportunities.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base">Email</h3>
                    <p className="text-gray-600 text-sm md:text-base">phyomyatmin646@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base">Phone</h3>
                    <p className="text-gray-600 text-sm md:text-base">+95 9455507081</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base">Address</h3>
                    <p className="text-gray-600 text-sm md:text-base">Chin State, Near Kalay City, Myanmar</p>
                  </div>
                </div>
              </div>

             
              <div className="mt-8">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&h=300&fit=crop"
                  alt="Contact Location"
                  className="w-full h-[200px] md:h-[250px] object-cover rounded-lg shadow-md"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x300/1e3a8a/ffffff?text=Contact+Us';
                  }}
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm md:text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm md:text-base"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm md:text-base"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-sm md:text-base"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-sm md:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;