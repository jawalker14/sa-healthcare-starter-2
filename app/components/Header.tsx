// Why:
// - Ensure required nav items with accessible focus and active states
// - Improve keyboard navigation visibility and route clarity
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = typeof window === 'undefined' ? '' : usePathname();
    const link = (href: string, label: string) => {
        const active = pathname === href;
        return (
            <Link
                href={href}
                className={`focus-ring transition-colors duration-200 ${active ? 'text-brand-navy font-semibold underline underline-offset-4' : 'text-brand-slate hover:text-brand-navy'}`}
                aria-current={active ? 'page' : undefined}
            >
                {label}
            </Link>
        );
    };
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
                <li>{link('/', 'Home')}</li>
                <li>{link('/about', 'About')}</li>
                <li>{link('/services', 'Services')}</li>
                <li>{link('/blog', 'Resources')}</li>
                <li>{link('/team', 'Team')}</li>
                <li>{link('/faq', 'FAQs')}</li>
                <li>{link('/contact', 'Contact')}</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;