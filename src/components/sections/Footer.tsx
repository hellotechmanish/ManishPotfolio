import Link from "next/link";

export default function FooterManish() {
  return (
    <footer className="w-full border-t bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between py-6 gap-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 text-center md:text-left">
          &copy; {new Date().getFullYear()} Manish Kumar. All rights reserved.
        </p>
        <nav className="flex gap-6">
          <Link
            href="/terms"
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
