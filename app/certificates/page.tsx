'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, FileText, Download, ExternalLink, Calendar, Waves } from 'lucide-react';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';
import { useState } from 'react';

export default function Certificates() {
  const [baseUrl, setBaseUrl] = useState('');

  if (typeof window !== 'undefined' && !baseUrl) {
    setBaseUrl(window.location.origin);
  }

  // Helper function to properly encode PDF paths for URLs
  const encodePdfPath = (path: string) => {
    // Remove leading slash, split into segments, encode each segment, then rejoin
    const segments = path.startsWith('/') ? path.slice(1).split('/') : path.split('/');
    return '/' + segments.map(segment => encodeURIComponent(segment)).join('/');
  };

  const certificates = [
    {
      title: "5.0 Professional Gen A.I. + Power BI + Excel",
      issuer: "Professional Training",
      date: "2025",
      description: "Comprehensive certification covering Generative AI, Power BI dashboards, and advanced Excel analytics. Demonstrates expertise in modern data analysis tools and AI-powered analytics.",
      skills: ["AI", "Power BI", "Excel", "Data Analytics", "Generative AI"],
      pdf: "/CERTIFICATES/5.0_Professional__Gen_A.I._+_Power_BI_+_Excel_in_08_hours_Certificate_6783f089_2.pdf",
      icon: Award,
      color: "from-cyan-500 to-blue-600",
      type: "Professional Certification"
    },
    {
      title: "10Alytics Global Hackathon 2025",
      issuer: "10Alytics",
      date: "2025",
      description: "Recognition for outstanding performance in the global data hackathon, demonstrating problem-solving skills, innovation, and technical expertise in data analytics.",
      skills: ["Hackathon", "Problem Solving", "Innovation", "Data Analytics"],
      pdf: "/CERTIFICATES/Bernice Tetteh - Hackathon Certificate.pdf",
      icon: Trophy,
      color: "from-yellow-500 to-orange-600",
      type: "Hackathon Achievement"
    },
    {
      title: "MarineData4Africa 2025",
      issuer: "Copernicus Marine Service & Mercator Ocean International",
      date: "March 2025",
      description: "Certificate of attendance for the Marine Data 4 Africa workshop, focusing on marine data applications and oceanographic data analysis for African waters.",
      skills: ["Marine Data", "Oceanography", "Data Science", "Conference"],
      pdf: "/CERTIFICATES/Certificate of Attendance - #MarineData4Africa 2025.pdf",
      icon: Waves,
      color: "from-teal-500 to-cyan-600",
      type: "Conference Attendance"
    },
    {
      title: "CMEMS Essentials Session #2",
      issuer: "Copernicus Marine Service",
      date: "April 2025",
      description: "Training on Copernicus Marine Essentials, covering marine data access, visualization, and analysis tools for oceanographic research and applications.",
      skills: ["Marine Data", "Oceanography", "Data Analysis", "CMEMS"],
      pdf: "/CERTIFICATES/Certificate of Attendance - CMEMS Essentials Session #2_2.pdf",
      icon: FileText,
      color: "from-blue-500 to-indigo-600",
      type: "Training Attendance"
    },
    {
      title: "CMEMS Essentials Session #3",
      issuer: "Copernicus Marine Service",
      date: "April 2025",
      description: "Advanced training session on Copernicus Marine Service essentials, focusing on practical applications of marine data for fisheries and ocean monitoring.",
      skills: ["Marine Data", "Oceanography", "Data Analysis", "CMEMS"],
      pdf: "/CERTIFICATES/Certificate of Attendance - CMEMS Essentials Session #3.pdf",
      icon: FileText,
      color: "from-indigo-500 to-purple-600",
      type: "Training Attendance"
    },
  ];

  return (
    <div className="min-h-screen bg-ocean-gradient particle-bg">
      <Navigation activePage="certificates" />

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
              <Award className="w-8 h-8 text-teal-400" />
              <span className="text-sm text-teal-400 uppercase tracking-widest font-semibold">
                Credentials & Achievements
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Internationally Recognized Certifications & Achievements
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
              World-class professional certifications and achievements in fisheries management, 
              marine data analysis, compliance monitoring, and advanced data visualization
            </p>
            <p className="text-base text-teal-400/80 max-w-2xl mx-auto">
              Hackathon Winner • Copernicus Marine Service Certified • AI & Power BI Expert • 
              11+ Professional Certifications • Continuous Professional Development
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="card text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">5+</div>
              <div className="text-sm text-gray-400">Certificates</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="card text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">2025</div>
              <div className="text-sm text-gray-400">Current Year</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="card text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">100%</div>
              <div className="text-sm text-gray-400">Verified</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="card text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">MSc</div>
              <div className="text-sm text-gray-400">Education</div>
            </motion.div>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card card-hover overflow-hidden"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${cert.color} p-6 rounded-lg mb-6`}>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-12 h-12 text-white" />
                      <Award className="w-8 h-8 text-white/80" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-white/90 text-sm mb-1">{cert.issuer}</p>
                    <div className="flex items-center gap-2 text-white/70 text-xs">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">{cert.description}</p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-400 mb-3 uppercase">Skills Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-slate-800/50 border border-teal-500/20 rounded text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={`/api/view-pdf${encodePdfPath(cert.pdf)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center text-sm py-2 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View PDF
                    </a>
                    <a
                      href={cert.pdf}
                      download
                      className="px-4 py-2 bg-slate-800/50 border border-teal-500/20 rounded-lg text-gray-300 hover:bg-slate-800 transition-colors flex items-center justify-center"
                      title="Download Certificate"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

