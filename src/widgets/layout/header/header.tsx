import Link from "next/link";
import HeaderAuthNav from "@/widgets/layout/header/header-auth-nav";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-amber-100 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
            <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600" aria-hidden />
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="flex shrink-0 items-center py-1 transition-opacity hover:opacity-90"
                    aria-label="MALLANG 홈"
                >
                    <img
                        src="/logo.svg"
                        alt="MALLANG"
                        width={160}
                        height={48}
                        className="h-8 w-auto sm:h-9"
                    />
                </Link>
                <nav className="flex items-center gap-6 text-sm">
                    <Link
                        href="/"
                        className="text-gray-600 transition-colors hover:text-amber-600"
                    >
                        홈
                    </Link>
                    <HeaderAuthNav />
                </nav>
            </div>
        </header>
    );
}
