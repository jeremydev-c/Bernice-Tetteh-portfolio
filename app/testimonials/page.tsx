'use client';

import { motion } from 'framer-motion';
import { Quote, Star, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mad Samira',
      text: "Bernice's expertise in vessel tracking is unmatched. Her diligence and attention to detail have helped us streamline our activities, reducing delays and increasing efficiency. She's a valuable asset to any team!",
      rating: 5,
    },
    {
      name: 'Mr. Joseph Y.',
      text: "A rockstar when it comes to vessel tracking! Her calm and diligent approach ensures our fleet is always on schedule and running smoothly. She's the MVP of our logistics team! 👍",
      rating: 5,
    },
    {
      name: 'Serwaa A.',
      text: "Bernice's analytical prowess is impressive! Her vessel tracking skills are top-notch, and her ability to interpret complex data drives informed decisions. She's a standout professional with exceptional skills!",
      rating: 5,
    },
    {
      name: 'Emmanuel A.',
      text: "She's an expert in data analysis, proficient in R programming, Excel, and Power BI. Her skills in data visualization and interpretation have greatly benefited our operations. She's a valuable asset to any data-driven team!",
      rating: 5,
    },
    {
      name: 'Richard Y.',
      text: "Invaluable team member, bringing expertise in vessel tracking and data analysis. Her skills in QGIS, R, Excel and Power BI drive results. Her dedication and work ethic make her an asset to any organization!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-ocean-gradient particle-bg">
      <Navigation activePage="testimonials" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Quote className="w-8 h-8 text-teal-400" />
              <span className="text-sm text-teal-400 uppercase tracking-widest font-semibold">
                Client Testimonials
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              What People Say
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Testimonials from colleagues and clients highlighting expertise, 
              professionalism, and impact
            </p>
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900/50 border border-teal-500/20 rounded-full">
              <Users className="w-5 h-5 text-teal-400" />
              <span className="text-gray-300">
                <span className="text-teal-400 font-semibold">{testimonials.length}</span> Testimonials
              </span>
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-3 rounded-lg flex-shrink-0">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-teal-400 text-teal-400" />
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-gradient">{testimonial.name}</h3>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>

                <div className="pt-4 border-t border-teal-500/20">
                  <div className="flex items-center gap-2 text-sm text-teal-400">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span>Verified Testimonial</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="card max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Work With Bernice
              </h3>
              <p className="text-gray-300 mb-6">
                Join the organizations that have benefited from Bernice's expertise 
                in vessel tracking, data analysis, and fisheries compliance.
              </p>
              <a href="/contact" className="btn-primary inline-block">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

