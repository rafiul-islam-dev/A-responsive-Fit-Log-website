import Image from "next/image";

const Footer = () => {
    return (
        <footer className="border-t border-zinc-900 bg-[#0b0d10]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-8">
                {/* Left: Logo + FitLog */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="FitLog"
                        width={32}
                        height={32}
                        className="h-8 w-8 object-contain"
                    />

                    <span className="text-sm font-black uppercase tracking-wider text-white">
                        FitLog
                    </span>
                </div>

                {/* Right: Copyright */}
                <p className="text-right text-[9px] uppercase tracking-wide text-zinc-600">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;