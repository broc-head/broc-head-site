import Link from 'next/link';
import useDelayedRender from 'use-delayed-render';
import { useState, useEffect } from 'react';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className='visible md:hidden flex items-center justify-center w-8 h-8 relative bg-gray-50 dark:bg-gray-600 ring-2 ring-black ring-inset dark:ring-gray-200 rounded-md shadow-[6px_6px_0_0_] shadow-green dark:shadow-hunter hover:shadow-none dark:hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]'
        aria-label="Toggle mobile menu"
        type="button"
        onClick={toggleMenu}
      >
          <MenuIcon data-hide={isMenuOpen} />
    </button>
    
    {isMenuMounted && (
        <ul
          className={`flex flex-col absolute bg-gray-100 dark:bg-gray-900 h-screen w-screen m-0 left-0 pt-12
          ${ isMenuRendered &&  'opacity-1'}`}
        >
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold "
            style={{ transitionDelay: '150ms' }}
          >
            <Link href="/">
              <a className="flex w-auto pb-4">Home</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold whitespace-nowrap w-full"
            style={{ transitionDelay: '175ms' }}
          >
            <Link href="/guestbook">
              <a className="flex w-auto pb-4">Guestbook</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold whitespace-nowrap w-full"
            style={{ transitionDelay: '200ms' }}
          >
            <Link href="/dashboard">
              <a className="flex w-auto pb-4">Dashboard</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold whitespace-nowrap"
            style={{ transitionDelay: '250ms' }}
          >
            <Link href="/blog">
              <a className="flex w-auto pb-4">Blog</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold whitespace-nowrap -translate-x-8"
            style={{ transitionDelay: '275ms' }}
          >
            <Link href="/snippets">
              <a className="flex w-auto pb-4">Snippets</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold whitespace-nowrap -translate-x-8"
            style={{ transitionDelay: '300ms' }}
          >
            <Link href="/newsletter">
              <a className="flex w-auto pb-4">Newsletter</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold whitespace-nowrap -translate-x-8"
            style={{ transitionDelay: '325ms' }}
          >
            <Link href="/tweets">
              <a className="flex w-auto pb-4">Tweets</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold whitespace-nowrap -translate-x-8"
            style={{ transitionDelay: '350ms' }}
          >
            <Link href="/uses">
              <a className="flex w-auto pb-4">Uses</a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        className='h-6 w-6 absolute text-gray-900 dark:text-gray-100'
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" 
        />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}