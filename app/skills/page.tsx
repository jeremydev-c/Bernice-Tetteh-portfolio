'use client';

import { motion } from 'framer-motion';
import { Database, BarChart3, Shield, Waves, Code, MapPin, Users, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function Skills() {
  const skillCategories = [
    {
      title: "Marine Data Systems",
      icon: Waves,
      color: "from-cyan-500 to-teal-600",
      skills: [
        { name: "Vessel Monitoring System (VMS)", level: "Expert" },
        { name: "OpenVMS (VMS)", level: "Expert" },
        { name: "Automatic Identification System (AIS)", level: "Expert" },
        { name: "Marine Data Analysis", level: "Expert" },
        { name: "CMEMS (Copernicus Marine Service)", level: "Advanced" },
        { name: "Oceanographic Data", level: "Advanced" },
      ]
    },
    {
      title: "Data Analytics & Visualization",
      icon: BarChart3,
      color: "from-blue-500 to-indigo-600",
      skills: [
        { name: "Power BI", level: "Expert" },
        { name: "Microsoft Excel", level: "Expert" },
        { name: "Microsoft Office", level: "Expert" },
        { name: "Data Visualization", level: "Expert" },
        { name: "Business Intelligence", level: "Advanced" },
        { name: "Dashboard Creation", level: "Expert" },
        { name: "Data Collection", level: "Expert" },
      ]
    },
    {
      title: "Programming & Tools",
      icon: Code,
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "R Programming", level: "Intermediate" },
        { name: "QGIS", level: "Advanced" },
        { name: "AI & Machine Learning", level: "Intermediate" },
        { name: "Generative AI", level: "Intermediate" },
        { name: "Data Analysis Tools", level: "Expert" },
        { name: "Electronic Medical Record (EMR)", level: "Advanced" },
      ]
    },
    {
      title: "Fisheries Management",
      icon: Shield,
      color: "from-green-500 to-emerald-600",
      skills: [
        { name: "Fisheries Management", level: "Expert" },
        { name: "Sustainable Fisheries", level: "Expert" },
        { name: "Fisheries", level: "Expert" },
        { name: "IUU Fishing Detection", level: "Expert" },
        { name: "Fisheries Compliance", level: "Expert" },
        { name: "Port State Measures (PSMA)", level: "Expert" },
        { name: "Vessel Risk Analysis", level: "Expert" },
        { name: "Compliance Monitoring", level: "Expert" },
      ]
    },
    {
      title: "Maritime & Vessel Operations",
      icon: MapPin,
      color: "from-indigo-500 to-blue-600",
      skills: [
        { name: "Vessel Operations", level: "Expert" },
        { name: "Ship Maintenance", level: "Advanced" },
        { name: "Seafreight", level: "Advanced" },
        { name: "Maritime Law Enforcement", level: "Expert" },
        { name: "Surveillance", level: "Expert" },
        { name: "Prosecution", level: "Advanced" },
      ]
    },
    {
      title: "Leadership & Training",
      icon: Users,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "Leadership", level: "Expert" },
        { name: "Training Leadership", level: "Expert" },
        { name: "Training", level: "Expert" },
        { name: "Instructor-led Training", level: "Expert" },
        { name: "Training Workshops", level: "Expert" },
        { name: "Youth Mentoring", level: "Advanced" },
        { name: "Communication", level: "Expert" },
        { name: "Team Collaboration", level: "Expert" },
        { name: "Workshop Organization", level: "Advanced" },
      ]
    },
    {
      title: "Data Management & Reporting",
      icon: Database,
      color: "from-teal-500 to-cyan-600",
      skills: [
        { name: "Big Data Analysis", level: "Advanced" },
        { name: "Data Anomaly Detection", level: "Expert" },
        { name: "Report Writing", level: "Expert" },
        { name: "Report Preparation", level: "Expert" },
        { name: "Dossier Preparation", level: "Expert" },
        { name: "Electronic Record Keeping", level: "Expert" },
        { name: "Data Documentation", level: "Expert" },
        { name: "Data Privacy Training", level: "Advanced" },
      ]
    },
    {
      title: "Coordination & Compliance",
      icon: TrendingUp,
      color: "from-emerald-500 to-green-600",
      skills: [
        { name: "Interagency Coordination", level: "Expert" },
        { name: "Community Policing", level: "Advanced" },
        { name: "Directives", level: "Advanced" },
        { name: "Demand Response", level: "Advanced" },
        { name: "Unfair Trade Practices", level: "Intermediate" },
        { name: "Customer Service", level: "Advanced" },
      ]
    },
    {
      title: "Additional Skills",
      icon: Shield,
      color: "from-slate-500 to-gray-600",
      skills: [
        { name: "Creativity and Innovation", level: "Expert" },
        { name: "Animal Health", level: "Intermediate" },
        { name: "Puzzles", level: "Intermediate" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-ocean-gradient particle-bg">
      <Navigation activePage="skills" />

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
              <Database className="w-8 h-8 text-teal-400" />
              <span className="text-sm text-teal-400 uppercase tracking-widest font-semibold">
                Expertise & Competencies
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              World-Class Marine Data & Compliance Expertise
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
              Internationally recognized expertise in marine data analysis, fisheries compliance, 
              vessel monitoring systems, and advanced data visualization—protecting ocean resources 
              through cutting-edge technology
            </p>
            <p className="text-base text-teal-400/80 max-w-2xl mx-auto">
              Expert in 9 specialized domains • 10+ years of field experience • Industry-leading 
              compliance systems • Monitoring 1000+ vessels across multiple countries
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <div className={`bg-gradient-to-br ${category.color} p-4 rounded-lg mb-6 flex items-center gap-3`}>
                    <Icon className="w-8 h-8 text-white" />
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          skill.level === 'Expert' 
                            ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                            : skill.level === 'Advanced'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
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

