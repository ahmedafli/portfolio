'use client';

import { Play, ArrowUpRight, Github, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'Moodboard Creator',
        desc: 'Automated interior design tool that turns product URLs into professional moodboards.',
        tags: ['Nextjs', 'Reactjs', 'Automation', 'Tailwind Css', 'UI/UX Design', 'Google Sheets API', 'Web Scraping'],
        videoUrl: 'https://www.youtube.com/embed/qTmLqu0wOxk?autoplay=1',
        featured: true,
        details: {
            problem: 'Interior designers manually browse showroom websites, screenshot products, compile pricing in spreadsheets, and create presentations - a tedious, error-prone process that wastes billable hours.',
            solution: 'An automated workflow tool that transforms product URLs into professional moodboards with integrated pricing documentation.',
            features: [
                'Intelligent Web Scraping Engine: Extracts product data from multiple showrooms',
                'Visual Moodboard Builder: Drag-and-drop interface',
                'Google Sheets API Integration: Auto-generates integrated pricing docs',
                'One-Click Export: Professional presentation generation'
            ],
            impact: 'Reduces moodboard creation time by 80%, eliminates manual data entry errors, and provides clients with professional presentations.'
        }
    },
    {
        id: 2,
        title: 'WhatsApp Travel Agent',
        desc: 'Conversational AI agent that handles travel booking inquiries 24/7, ensuring zero missed opportunities.',
        tags: ['WhatsApp API', 'Telegram API', 'javascript', 'Automation', 'Database Management'],
        videoUrl: 'https://www.youtube.com/embed/fuMbyvskHF0?autoplay=1',
        featured: false,
        details: {
            problem: 'Transportation service owners lose clients due to delayed responses, miss inquiries during off-hours, and waste time on repetitive booking questions - costing them revenue and growth.',
            solution: 'An intelligent WhatsApp bot that instantly engages customers, collects trip details, and facilitates real-time booking approval through the business owner.',
            features: [
                'Conversational AI Interface: Natural dialogue flow asking relevant questions',
                'Telegram Integration: Forwards structured booking requests to owner for instant review',
                'Real-Time Price Quoting: Owner replies with price, bot formats and sends quote',
                'Automated Confirmation Flow: Handles confirmation and notifies owner',
                '24/7 Availability: Captures 100% of client inquiries instantly'
            ],
            impact: 'Eliminates response delays, captures 100% of inquiries, reduces manual workload by 90%, and provides instant professional service.'
        }
    },
    {
        id: 3,
        title: 'Bedline E-Commerce Platform',
        desc: 'A complete online store with integrated payment processing and automated communication system for seamless order-to-delivery workflow.',
        tags: ['Next.js', 'Stripe', 'WhatsApp API', 'Supabase'],
        imageUrl: 'public/lamsa.png',
        featured: false,
        details: {
            problem: 'Small bedline businesses struggle with managing online sales, processing payments securely, and keeping customers informed - leading to missed sales and poor customer experience.',
            solution: 'A fully functional e-commerce website with secure payment processing and automated WhatsApp/email notifications that streamline the entire purchase workflow.',
            features: [
                'Product Catalog & Shopping Cart: Browse bedline products with detailed descriptions',
                'Secure Payment Integration: Process transactions safely with integrated gateway',
                'Automated WhatsApp Notifications: Instant order confirmations and updates',
                'Order Management Dashboard: Track and manage customer orders efficiently'
            ],
            impact: 'Provides complete digital storefront, automates customer communication reducing manual work by 85%, and increases conversion rates.'
        }
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

    return (
        <>
            <div className="h-full flex flex-col p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2 group cursor-default">
                        <span className="w-2 h-2 rounded-full bg-white group-hover:bg-green-500 transition-colors duration-300"></span>
                        Projects
                    </h3>
                    <button className="text-xs text-zinc-500 hover:text-white transition-colors">View All</button>
                </div>

                <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                    {projects.map((project, i) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className={`group relative rounded-xl border border-white/5 bg-black/20 overflow-hidden hover:bg-white/5 transition-all duration-300 cursor-pointer ${project.featured ? 'min-h-[220px]' : 'min-h-[140px]'}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

                            <div className="absolute bottom-0 left-0 p-5 w-full z-20">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">{project.title}</h4>
                                        <p className="text-sm text-zinc-400 mb-3 line-clamp-2 md:line-clamp-none">{project.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.slice(0, 3).map(tag => (
                                                <span key={tag} className="text-[10px] px-2 py-1 rounded bg-white/10 text-zinc-300 border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-zinc-500 border border-white/5">
                                                    +{project.tags.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                        <button className="p-2 rounded-full bg-white text-black hover:scale-110 transition-transform">
                                            <Play className="w-4 h-4 fill-current" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-6xl bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col lg:flex-row max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* VIDEO - Full width on Mobile, Left on Desktop */}
                            <div className="w-full lg:w-[55%] bg-black relative aspect-video lg:aspect-auto">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={selectedProject.videoUrl}
                                    title={selectedProject.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                ></iframe>
                            </div>

                            {/* DETAILS - Scrollable Content */}
                            <div className="w-full lg:w-[45%] p-6 lg:p-10 flex flex-col bg-zinc-950 border-l border-white/10 overflow-y-auto">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    {/* Problem / Solution */}
                                    <div className="grid gap-4">
                                        <div className="space-y-2">
                                            <h3 className="text-sm font-mono text-red-400 uppercase tracking-widest flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> The Problem
                                            </h3>
                                            <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-red-500/20 pl-4">
                                                {selectedProject.details.problem}
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-sm font-mono text-green-400 uppercase tracking-widest flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> The Solution
                                            </h3>
                                            <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-green-500/20 pl-4">
                                                {selectedProject.details.solution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-3">
                                        <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Key Features</h3>
                                        <ul className="space-y-2">
                                            {selectedProject.details.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                                                    <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Impact */}
                                    {selectedProject.details.impact && (
                                        <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                                            <h3 className="text-sm font-bold text-blue-400 mb-1 flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4" /> Impact
                                            </h3>
                                            <p className="text-zinc-400 text-sm italic">"{selectedProject.details.impact}"</p>
                                        </div>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="mt-8 pt-8 border-t border-white/5 flex gap-3">
                                    <button className="flex-1 py-3 bg-white text-black rounded-xl font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                                        Visit Project <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                    <button className="px-5 py-3 bg-zinc-900 border border-white/10 text-white rounded-xl hover:bg-zinc-800 transition-colors">
                                        <Github className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
