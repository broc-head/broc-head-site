import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function MobileMenu() {
  const [active, setActive] = useState(false);

  function toggleMenu() {
    if (active) {
      setActive(false);
      document.body.style.overflow = '';
    } else {
      setActive(true);
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
      <div className={`md:hidden pr-4`}> 
        <button
          className={`flex items-center justify-center w-8 h-8 relative bg-gray-50 dark:bg-gray-600 ring-2 ring-black ring-inset dark:ring-gray-200 rounded-md shadow-[6px_6px_0_0_] shadow-seaweed hover:shadow-none dark:hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]`}
          aria-label="Toggle mobile menu"
          type="button"
          onClick={toggleMenu}
        >
          {!active? (
            <MenuIcon/>
          ) : (
            <CrossIcon/>
          )}
        </button>
        
        <nav className={`absolute z-50 -left-4 top-0 bottom-0 mt-16 pb-20 w-screen h-[96vh] bg-gray-50 dark:bg-gray-900 overflow-y-auto transform ${active? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
          <ul className='min-h-full pl-12 pr-6 py-8 space-y-8'>
            <li
              className="border-b border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-lg font-semibold "
            >
              <Link href="/about">
                <a className="flex w-auto py-4 hover:bg-orange-200 dark:hover:bg-orange-800">About</a>
              </Link>
            </li>
            <li
              className="border-b border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-lg font-semibold"
            >
              <Link href="/works">
                <a className="flex w-auto py-4 hover:bg-orange-200 dark:hover:bg-orange-800">Works</a>
              </Link>
            </li>
            <li
              className="border-b border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-lg font-semibold"
            >
              <Link href="/blog">
                <a className="flex w-auto py-4 hover:bg-orange-200 dark:hover:bg-orange-800">Blog</a>
              </Link>
            </li>
            <li
              className="border-b border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-lg font-semibold"
            >
              <Link href="/contact">
                <a className="flex w-auto py-4 hover:bg-orange-200 dark:hover:bg-orange-800">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
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