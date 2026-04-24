import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-auto border-t border-amber-100 bg-gradient-to-b from-amber-50/80 to-amber-100/40">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <p className="text-base font-semibold text-amber-800">스토어</p>
                        <p className="mt-1 max-w-xs text-sm text-gray-600">
                            쇼핑 경험을 이어갑니다.
                        </p>
                    </div>
                    <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                        <li>
                            <Link
                                href="#"
                                className="text-gray-600 transition-colors hover:text-amber-600"
                            >
                                고객센터
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-gray-600 transition-colors hover:text-amber-600"
                            >
                                이용약관
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-gray-600 transition-colors hover:text-amber-600"
                            >
                                개인정보처리방침
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mt-8 border-t border-amber-200/60 pt-8">
                    <p className="text-xs text-gray-500">© {new Date().getFullYear()} Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
