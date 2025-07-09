import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pathgenix - AI Career Guide",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            {/* footer */}
            <footer className="bg-muted/50 py-10 border-t border-muted">
              <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between md:gap-8 gap-4 text-gray-200">
                {/* Logo and Brand */}
                <div className="flex flex-col items-center md:items-start gap-1 md:gap-2 min-w-[180px]">
                  <Image
                    src={"/logo.png"}
                    alt="Sensai Logo"
                    width={200}
                    height={60}
                    className="h-12 py-1 w-auto object-contain"
                  />

                  <span className="font-bold text-lg tracking-tight">
                    Pathgenix - AI Career Guide
                  </span>
                </div>
                {/* Navigation Links */}
                <div className="flex flex-col items-center gap-1 md:gap-2 md:items-start min-w-[180px]">
                  <span className="font-semibold mb-1">Quick Links</span>
                  <nav className="flex flex-col gap-0.5 text-sm">
                    <Link
                      href="/"
                      className="hover:text-primary transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href="/dashboard"
                      className="hover:text-primary transition-colors"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/resume"
                      className="hover:text-primary transition-colors"
                    >
                      Resume Builder
                    </Link>
                    <Link
                      href="/ai-cover-letter"
                      className="hover:text-primary transition-colors"
                    >
                      AI Cover Letter
                    </Link>
                    <Link
                      href="/interview"
                      className="hover:text-primary transition-colors"
                    >
                      Interview Prep
                    </Link>
                  </nav>
                </div>
                {/* Social & Contact */}
                <div className="flex flex-col items-center gap-1 md:gap-2 md:items-end min-w-[180px]">
                  <span className="font-semibold mb-1">Connect</span>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/saurabh-shivam-1b50931a5/"
                      target="_blank"
                      rel="noopener"
                      aria-label="LinkedIn"
                      className="group hover:text-primary transition-colors"
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="transition-colors group-hover:text-primary"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/Saurabh-Shivam"
                      target="_blank"
                      rel="noopener"
                      aria-label="GitHub"
                      className="group hover:text-primary transition-colors"
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="transition-colors group-hover:text-primary"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="mailto:saurabhshivam4@gmail.com"
                      aria-label="Email"
                      className="group hover:text-primary transition-colors"
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="transition-colors group-hover:text-primary"
                      >
                        <path d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.98c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.083 11.98-7.083v-.217z" />
                      </svg>
                    </a>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1">
                    Made with{" "}
                    <span className="text-pink-400">&#10084;&#65039;</span> by
                    Saurabh Shivam
                  </span>
                </div>
              </div>
              <div className="container mx-auto px-4 mt-6 text-center text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Pathgenix. All rights
                reserved.
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
