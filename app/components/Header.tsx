import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200/60">
            <div className="container-x py-4">
                <div className="flex items-center justify-between gap-6">
                    <Link href="/" className="flex items-center gap-3 focus-ring">
                        <div className="h-9 w-9 rounded-xl bg-brand-navy text-white grid place-items-center shadow-soft">
                            <span className="text-sm font-semibold">SA</span>
                        </div>
                        <span className="text-xl sm:text-2xl font-semibold text-brand-navy">SA Healthcare</span>
                    </Link>
                    <nav aria-label="Primary">
                        <ul className="hidden md:flex items-center gap-6">
                            <li><Link href="/" className="text-brand-slate hover:text-brand-navy transition-colors duration-200 focus-ring">Home</Link></li>
                            <li><Link href="/about" className="text-brand-slate hover:text-brand-navy transition-colors duration-200 focus-ring">About</Link></li>
                            <li><Link href="/services" className="text-brand-slate hover:text-brand-navy transition-colors duration-200 focus-ring">Services</Link></li>
                            <li><Link href="/contact" className="text-brand-slate hover:text-brand-navy transition-colors duration-200 focus-ring">Contact</Link></li>
                            <li><Link href="/blog" className="text-brand-slate hover:text-brand-navy transition-colors duration-200 focus-ring">Blog</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;