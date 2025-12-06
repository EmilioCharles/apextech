"use client";

interface PhoneMockupProps {
    children: React.ReactNode;
}

export default function PhoneMockup({ children }: PhoneMockupProps) {
    return (
        <div className="relative mx-auto w-[200px]">
            <div className="relative rounded-[2.5rem] bg-[#1a1a1a] p-2 shadow-xl border border-white/10 ring-1 ring-black">
                {/* Camera / Notch Area */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-xl z-20 flex justify-center items-center">
                    <div className="w-16 h-1 bg-[#222] rounded-full opacity-50" />
                </div>

                {/* Screen */}
                <div className="relative rounded-[2rem] bg-black overflow-hidden aspect-[9/19] border border-white/5">
                    {children}

                    {/* Screen Glare */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-20 pointer-events-none z-10" />
                </div>

                {/* Side Buttons (Simulated) */}
                <div className="absolute -right-[2px] top-24 w-[2px] h-10 bg-[#333] rounded-r-md" />
                <div className="absolute -right-[2px] top-40 w-[2px] h-16 bg-[#333] rounded-r-md" />
            </div>
        </div>
    );
}
