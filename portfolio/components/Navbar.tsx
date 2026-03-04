import Link from 'next/link';

const links = [
  { href: '/', label: 'الرئيسية' },
  { href: '/projects', label: 'الأعمال' },
  { href: '/about', label: 'من أنا' },
  { href: '/contact', label: 'تواصل' },
];

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4" aria-label="التنقل الرئيسي">
        <Link href="/" className="text-xl font-extrabold text-white">
          ليان <span className="text-cyan-300">ستوديو</span>
        </Link>

        <ul className="flex items-center gap-5 text-sm font-semibold text-slate-200">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
