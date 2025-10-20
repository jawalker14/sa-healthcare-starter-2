import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold">
                    SA Healthcare
                </h1>
                <nav className="mt-4">
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
                        </li>
                        <li>
                            <Link href="/blog" className="text-gray-700 hover:text-blue-500">Blog</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;