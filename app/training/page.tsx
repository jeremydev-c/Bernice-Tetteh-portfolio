'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function Training() {
  const trainingPrograms = [
    {
      title: 'VMS Data Analysis using QGIS',
      institution: 'Norway',
      date: 'May 2025',
      type: 'International Training',
      description: 'Advanced training in vessel monitoring system data analysis using QGIS for spatial data visualization and analysis. This comprehensive program covered advanced GIS techniques for marine data analysis.',
      skills: ['QGIS', 'VMS Data Analysis', 'Spatial Data Visualization', 'Marine Data'],
      icon: MapPin,
      color: 'from-cyan-500 to-teal-600',
    },
    {
      title: 'Introductory Data Analysis with R-Programming',
      institution: 'KNUST',
      date: 'February 2025',
      type: 'Professional Development',
      description: 'Comprehensive training in data analysis using R programming for statistical analysis and data visualization. Covered data manipulation, statistical modeling, and visualization techniques.',
      skills: ['R Programming', 'Statistical Analysis', 'Data Visualization', 'Data Manipulation'],
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Monitoring and Evaluation of Development Projects',
      institution: 'KNUST',
      date: 'February 2025',
      type: 'Short Course',
      description: 'Short course covering project monitoring, evaluation frameworks, and impact assessment methodologies. Focused on M&E systems, logical frameworks, and results-based management.',
      skills: ['Project Monitoring', 'Evaluation Frameworks', 'Impact Assessment', 'M&E Systems'],
      icon: Award,
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Fisheries Compliance Training',
      institution: 'OCPP',
      date: 'March 2025',
      type: 'Specialized Training',
      description: 'Specialized training in fisheries compliance, regulatory frameworks, and enforcement procedures. Covered compliance monitoring, regulatory requirements, and enforcement strategies.',
      skills: ['Fisheries Compliance', 'Regulatory Frameworks', 'Enforcement Procedures', 'Compliance Monitoring'],
      icon: Award,
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Monitoring and Surveilling Vessels using VMS',
      institution: 'CLS FRANCE',
      date: 'October 2024',
      type: 'International Training',
      description: 'International training on advanced vessel monitoring systems and surveillance techniques. Comprehensive program on VMS operations, data analysis, and vessel tracking technologies.',
      skills: ['VMS Operations', 'Vessel Surveillance', 'Marine Technology', 'Data Analysis'],
      icon: MapPin,
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'FMC and Inspection',
      institution: 'OCPP',
      date: 'December 2023',
      type: 'Professional Training',
      description: 'Training on Fisheries Monitoring Centre operations and vessel inspection procedures. Covered FMC management, inspection protocols, and compliance verification processes.',
      skills: ['FMC Operations', 'Vessel Inspection', 'Compliance Verification', 'Maritime Law'],
      icon: GraduationCap,
      color: 'from-teal-500 to-cyan-600',
    },
    {
      title: 'Monitoring Control of Fishing Activities',
      institution: 'OCPP',
      date: 'July-August 2024',
      type: 'Comprehensive Training',
      description: 'Comprehensive training on monitoring and controlling fishing activities, regulatory compliance, and enforcement strategies. Focused on sustainable fisheries management and compliance monitoring.',
      skills: ['Fishing Activities Monitoring', 'Regulatory Compliance', 'Enforcement Strategies', 'Sustainable Fisheries'],
      icon: Award,
      color: 'from-indigo-500 to-blue-600',
    },
  ];

  const certificates = [
    {
      title: '5.0 Professional Gen A.I. + Power BI + Excel',
      issuer: 'Professional Training',
      date: '2025',
      description: 'Comprehensive certification in AI, Power BI, and Excel for data analytics and business intelligence.',
    },
    {
      title: 'Copernicus Marine Essentials',
      issuer: 'CMEMS (Copernicus Marine Service)',
      date: '2025',
      description: 'Certification in marine data analysis and oceanographic data utilization from Copernicus Marine Service.',
    },
    {
      title: '#MarineData4Africa 2025',
      issuer: 'Copernicus & Mercator Ocean International',
      date: '2025',
      description: 'Certificate of attendance for the Marine Data 4 Africa workshop on marine data science and applications.',
    },
    {
      title: '10Alytics Global Hackathon',
      issuer: '10Alytics',
      date: '2025',
      description: 'Participation in global data analytics hackathon, demonstrating problem-solving and data analysis skills.',
    },
  ];

  return (
    <div className="min-h-screen bg-ocean-gradient particle-bg">
      <Navigation activePage="training" />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-4 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 px-4">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400" />
              <span className="text-xs sm:text-sm text-teal-400 uppercase tracking-widest font-semibold">
                Continuous Learning
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-gradient px-4">
              Continuous Excellence Through Learning
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4 mb-4">
              A commitment to continuous professional development in fisheries management, 
              advanced data analysis, and compliance monitoring
            </p>
            <p className="text-sm sm:text-base text-teal-400/80 max-w-2xl mx-auto px-4">
              From international training in Norway to specialized programs across Africa and Europe—each certification 
              represents a dedication to staying at the forefront of marine data science and fisheries management excellence.
            </p>
          </motion.div>

          {/* Training Programs */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-4 px-4">International Training Programs</h2>
              <p className="text-gray-300 max-w-2xl mx-auto px-4 text-sm sm:text-base mb-2">
                Comprehensive, world-class training programs covering advanced marine data analysis, fisheries compliance, 
                vessel monitoring systems, and professional development from leading international institutions
              </p>
              <p className="text-teal-400/70 max-w-2xl mx-auto px-4 text-xs sm:text-sm">
                Training from Norway, France, Ghana, and international organizations • 7+ specialized programs • 
                Advanced VMS, AIS, and compliance expertise
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {trainingPrograms.map((training, index) => {
                const Icon = training.icon;
                return (
                  <motion.div
                    key={training.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card"
                  >
                    <div className={`bg-gradient-to-br ${training.color} p-3 sm:p-4 rounded-lg mb-4 sm:mb-6`}>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold text-white break-words">{training.title}</h3>
                          <p className="text-xs sm:text-sm text-white/80 mt-1">{training.type}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                        <div className="flex items-center gap-2 text-teal-400">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="break-words">{training.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>{training.date}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {training.description}
                      </p>

                      <div>
                        <p className="text-teal-400 text-xs sm:text-sm font-semibold mb-2">Key Skills Acquired:</p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {training.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 sm:px-3 py-1 bg-teal-500/10 text-teal-400 border border-teal-500/30 rounded-full text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-4 px-4">Professional Certifications</h2>
            <p className="text-gray-300 max-w-2xl mx-auto px-4 text-sm sm:text-base">
              Recognized certifications in data analytics, marine science, and professional development
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-20">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-gradient mb-2 break-words">{cert.title}</h3>
                    <p className="text-teal-400 text-xs sm:text-sm mb-1 break-words">{cert.issuer}</p>
                    <p className="text-gray-400 text-xs mb-2 sm:mb-3">{cert.date}</p>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="card max-w-2xl mx-auto px-4 sm:px-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-3 sm:mb-4">
                Committed to Excellence
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Continuous professional development ensures up-to-date expertise in fisheries management, 
                marine data analysis, and compliance monitoring. Always learning, always growing.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-teal-400">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold text-sm sm:text-base text-center">7+ Training Programs Completed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

