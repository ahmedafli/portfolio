'use client';

import { Code, Zap, MessageSquare, Bot, CreditCard, Layers, Workflow, Cloud, Terminal, Database, Globe, Cpu } from 'lucide-react';

export default function Skills() {
    const skills = [
        { icon: Globe, label: 'Web Scraping' },
        { icon: Database, label: 'Backend' },
        { icon: Code, label: 'React/Next.js' },
        { icon: Zap, label: 'Automation' },
        { icon: MessageSquare, label: 'API Integration' },
        { icon: Bot, label: 'Chatbots' },
        { icon: CreditCard, label: 'Payments' },
        { icon: Layers, label: 'Full-stack' },
        { icon: Workflow, label: 'Workflows' },
    ];

    return (
        <div className="h-full flex flex-col justify-between">
            <div className="space-y-2">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Stack</h3>
                <div className="grid grid-cols-2 gap-3 mt-4">
                    {skills.map((skill) => (
                        <div key={skill.label} className="p-3 rounded-lg bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-colors flex flex-col items-center gap-2 group">
                            <skill.icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                            <span className="text-xs text-zinc-500 font-medium group-hover:text-zinc-300">{skill.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex justify-between items-center text-xs text-zinc-600">
                    <span>Primary</span>
                    <span className="text-green-500">Active</span>
                </div>
            </div>
        </div>
    );
}
