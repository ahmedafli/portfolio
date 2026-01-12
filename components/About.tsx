'use client';

export default function About() {
    return (
        <div className="h-full flex flex-col justify-between">
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">About DoubleA</h3>
                <p className="text-sm text-zinc-400 leading-relaxed text-justify">
                    We build automation tools that solve real business problems. From AI-powered WhatsApp agents to e-commerce platforms with payment integration, we specialize in creating software that eliminates manual work and drives efficiency. Computer science foundation, self-taught execution, real products for real users.
                </p>
            </div>

            <div className="mt-8 flex gap-2">
                <div className="h-1 flex-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-white/20"></div>
                </div>
                <div className="h-1 flex-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-white/20"></div>
                </div>
            </div>
            <p className="text-[10px] text-zinc-600 mt-2 font-mono text-right">SYSTEM_STATUS: OPTIMAL</p>
        </div>
    );
}
