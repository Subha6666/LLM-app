"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          LMS
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/courses" className="hover:text-primary">
            Courses
          </Link>
          <Link href="/dashboard" className="hover:text-primary">
            Dashboard
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-background py-2">
          <Link href="/courses" className="block px-4 py-2 hover:bg-accent">
            Courses
          </Link>
          <Link href="/dashboard" className="block px-4 py-2 hover:bg-accent">
            Dashboard
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-full justify-start px-4 py-2"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="h-5 w-5 mr-2" /> Light Mode
              </>
            ) : (
              <>
                <Moon className="h-5 w-5 mr-2" /> Dark Mode
              </>
            )}
          </Button>
        </div>
      )}
    </header>
  );
}