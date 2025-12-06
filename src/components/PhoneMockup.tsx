"use client";

interface PhoneMockupProps {
    children: React.ReactNode;
}

export default function PhoneMockup({ children }: PhoneMockupProps) {
    return (
        <div className="relative mx-auto w-full">
            <div className="relative rounded-[2.2rem] bg-[#1f1f1f] p-1.5 shadow-xl border border-gray-800 ring-1 ring-black">
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 h-[3.5%] w-[30%] bg-black rounded-full z-20 flex justify-center items-center">
                    <div className="w-1/3 h-1/3 bg-[#111] rounded-full opacity-60 ml-[60%]" />
                </div>

                {/* Screen */}
                <div className="relative rounded-[1.8rem] bg-black overflow-hidden aspect-[9/19.5] border border-white/5">
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
