'use client';

import { Copy, Mail, Check } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "double.a.digitalfuture@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="h-full flex items-center justify-between gap-4">
            <div>
                <h3 className="text-xl font-bold text-white">DoubleA</h3>
                <p className="text-sm text-zinc-500">Open for new opportunities.</p>
            </div>

            <button
                onClick={handleCopy}
                className="cursor-pointer group relative flex items-center gap-3 px-5 py-3 rounded-xl bg-zinc-900 border border-white/10 hover:border-white/20 hover:bg-zinc-800 transition-all active:scale-95"
            >
                <div className="p-2 rounded-full bg-white/5">
                    <Mail className="w-4 h-4 text-zinc-300" />
                </div>
                <span className="text-zinc-300 font-mono text-sm">{email}</span>
                <div className="pl-3 border-l border-white/10">
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-zinc-500 group-hover:text-white" />}
                </div>
            </button>
        </div>
    );
}
