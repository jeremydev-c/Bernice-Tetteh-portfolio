'use client';

import { motion } from 'framer-motion';
import { Anchor, Waves, Database, BarChart3, Shield, Users, Award, Mail, Phone, MapPin, GraduationCap, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-ocean-gradient particle-bg">
      <Navigation activePage="home" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Waves className="w-8 h-8 text-teal-400" />
                <span className="text-sm text-teal-400 uppercase tracking-widest font-semibold">
                  Senior Fisheries Manager
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
                Bernice Ayorkor Tetteh
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                Leading Marine Data Analyst & Fisheries Compliance Expert
              </p>
              <p className="text-lg text-gray-400 mb-4 leading-relaxed">
                Senior Fisheries Manager with 10+ years of exceptional expertise in vessel monitoring systems (VMS), 
                automatic identification systems (AIS), and advanced marine data analytics. Recognized expert in detecting 
                and preventing IUU (Illegal, Unreported, Unregulated) fishing activities, ensuring fisheries compliance, 
                and transforming complex marine data into actionable intelligence that protects ocean resources and supports 
                sustainable fisheries management.
              </p>
              <p className="text-base text-teal-400/80 mb-8 leading-relaxed font-medium">
                Monitoring 1000+ vessels • Analyzing 50+ data projects • 11+ professional certifications • 
                Established industry-leading compliance systems
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link href="/certificates" className="btn-primary">
                  View Certificates
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get In Touch
                </Link>
              </div>
            </motion.div>

            {/* Right: Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-teal-500/30 shadow-2xl shadow-teal-500/20">
        <Image
                  src="/profile-photo.jpg"
                  alt="Bernice Ayorkor Tetteh"
                  fill
                  className="object-cover"
                  unoptimized
          priority
        />
              </div>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { icon: Award, label: 'Certificates', value: '11+' },
              { icon: Database, label: 'Years Experience', value: '10+' },
              { icon: BarChart3, label: 'Data Projects', value: '50+' },
              { icon: Shield, label: 'Vessels Monitored', value: '1000+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="card text-center"
              >
                <stat.icon className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">About Me</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Professional Background */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-6">
                <Anchor className="w-6 h-6 text-teal-400" />
                <h3 className="text-2xl font-bold text-gradient">Professional Background</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="text-teal-400 font-semibold mb-2">Current Position</h4>
                  <p className="text-lg font-semibold mb-1">Manager</p>
                  <p className="text-sm text-gray-400 mb-1">Senior Fisheries Manager</p>
                  <p className="text-sm text-gray-400">Monitoring, Control & Surveillance Division</p>
                  <p className="text-sm text-gray-400">Fisheries Commission, Ghana</p>
                </div>
                <div>
                  <h4 className="text-teal-400 font-semibold mb-2 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Education
                  </h4>
                  <div className="mb-3">
                    <p className="mb-1 font-semibold">MSc in Fisheries Management, Fisheries</p>
                    <p className="text-sm text-gray-400">University of Ghana, Legon (2017-2018)</p>
                  </div>
                  <div>
                    <p className="mb-1 font-semibold">BSc in Port and Shipping Administration</p>
                    <p className="text-sm text-gray-400">Regional Maritime University, Nungua-Accra (2010-2014)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Expertise */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-teal-400" />
                <h3 className="text-2xl font-bold text-gradient">Core Expertise</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-teal-400 font-semibold mb-2">Marine Data Analysis & Intelligence</h4>
                  <p className="text-gray-300 text-sm">
                    World-class expertise in analyzing massive vessel tracking datasets from multiple countries, detecting 
                    anomalies and suspicious patterns, and transforming complex marine data into clear, actionable intelligence. 
                    Leveraging advanced VMS and AIS systems to monitor 1000+ vessels and provide real-time insights that protect 
                    marine resources and ensure sustainable fishing practices.
                  </p>
                </div>
                <div>
                  <h4 className="text-teal-400 font-semibold mb-2">Fisheries Compliance & Enforcement</h4>
                  <p className="text-gray-300 text-sm">
                    Internationally recognized expert in IUU (Illegal, Unreported, Unregulated) fishing detection and prevention. 
                    Pioneered risk analysis frameworks for foreign vessels, established industry-leading compliance systems, and 
                    ensured adherence to Port State Measures Agreement (PSMA). Successfully coordinated vessel arrests and 
                    enforcement actions that protect marine ecosystems.
                  </p>
                </div>
                <div>
                  <h4 className="text-teal-400 font-semibold mb-2">Advanced Data Visualization & Analytics</h4>
                  <p className="text-gray-300 text-sm">
                    Master-level proficiency in Power BI, Excel, R Programming, QGIS, and AI-powered analytics tools. 
                    Creates comprehensive, interactive visualizations that transform complex marine data into intuitive dashboards, 
                    enabling stakeholders to make informed decisions quickly. Expert in spatial data analysis and geospatial 
                    visualization for marine applications.
                  </p>
                </div>
                <div>
                  <h4 className="text-teal-400 font-semibold mb-2">Work Responsibilities</h4>
                  <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
                    <li>Analyze risks for incoming foreign vessels through AREP</li>
                    <li>Establish high-risk IUU vessels through collaboration</li>
                    <li>Operate AIS and VMS systems effectively</li>
                    <li>Prepare daily, weekly, and monthly VMS Port State Measures reports</li>
                    <li>Organize interagency workshops with great outcomes</li>
                    <li>Mentor and supervise younger colleagues</li>
                    <li>Record infractions detected electronically</li>
                    <li>Prepare dossiers on all infractions detected electronically</li>
                    <li>Ensure vessels detected electronically are arrested at sea or in harbor</li>
                    <li>Monitor and report positions suspected to be under pirate attack, fire, flooding, or emergencies</li>
                    <li>Undertake quayside inspections of all fishing vessels</li>
                    <li>Undertake sea patrols by ships and boats and provide reports</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Key Achievements</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Vessel Compliance & Enforcement',
                description: 'Established system requiring all national and foreign industrial vessels to send AREP prior to port arrival. Ensure vessels detected electronically are arrested at sea or in harbor with sufficient details of infractions',
              },
              {
                icon: Users,
                title: 'Stakeholder Engagement & Coordination',
                description: 'Established contact with shipping agencies, educating them on IUU fishing and PSMA compliance. Coordinate with Ghana Navy and other organizations on emergency responses',
              },
              {
                icon: BarChart3,
                title: 'Data Analysis & Reporting',
                description: 'Analyze and visualize vessel tracking big data from various countries, detecting data anomalies. Provide daily, weekly, and monthly VMS reports',
              },
              {
                icon: Anchor,
                title: 'Field Operations',
                description: 'Undertake quayside inspections of all fishing vessels and sea patrols by ships and boats, providing comprehensive reports',
              },
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <achievement.icon className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gradient mb-3">{achievement.title}</h3>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Professional Development Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Training & Professional Development</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Continuous learning and professional development in fisheries management, data analysis, and compliance monitoring
            </p>
            <Link href="/training" className="btn-primary inline-block">
              View All Training Programs
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'VMS Data Analysis using QGIS',
                institution: 'Norway',
                date: 'May 2025',
              },
              {
                title: 'Data Analysis with R-Programming',
                institution: 'KNUST',
                date: 'February 2025',
              },
              {
                title: 'Fisheries Compliance Training',
                institution: 'OCPP',
                date: 'March 2025',
              },
            ].map((training, index) => (
              <motion.div
                key={training.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <h3 className="text-lg font-bold text-gradient mb-2">{training.title}</h3>
                <p className="text-teal-400 text-sm mb-1">{training.institution}</p>
                <p className="text-gray-400 text-xs">{training.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Core Competencies</h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { name: 'Leadership', icon: Users },
              { name: 'Integrity', icon: Shield },
              { name: 'Team Player', icon: Users },
              { name: 'Creativity', icon: BarChart3 },
              { name: 'Communication', icon: Mail },
            ].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center"
                >
                  <Icon className="w-10 h-10 text-teal-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gradient">{skill.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card"
          >
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Partner With a Marine Data Excellence Leader
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Ready to enhance your fisheries management, vessel monitoring, or marine data analytics capabilities? 
              Let's discuss how my expertise in VMS, AIS, compliance systems, and data visualization can drive your 
              organization's success and protect marine resources.
            </p>
            <p className="text-teal-400 mb-8 text-base font-medium">
              Available for consulting • Open to leadership opportunities • Specialized in government, NGO, and private sector fisheries management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5 text-teal-400" />
                <span>maaberny@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5 text-teal-400" />
                <span>0266236479 / 0559330805</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Linkedin className="w-5 h-5 text-teal-400" />
                <a 
                  href="https://www.linkedin.com/in/bernice-tetteh-87a3b491/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <Link href="/contact" className="btn-primary inline-block">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}
