import Link from 'next/link';
import { useState } from 'react';

export default function MobileMenu() {
  const [active, setActive] = useState(false);

  function toggleMenu() {
    setActive(!active);
  }

  return (
    <> <div className=' md:hidden'> 
    <button
        className={`${active? '' : ''} flex items-center justify-center w-8 h-8 relative bg-gray-50 dark:bg-gray-600 ring-2 ring-black ring-inset dark:ring-gray-200 rounded-md shadow-[6px_6px_0_0_] shadow-green dark:shadow-hunter hover:shadow-none dark:hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]`}
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
    
    <div className={`${active? 'absolute -left-8 top-20 w-screen min-h-[calc(100% - 5rem)]' : 'hidden'} `}>
    
      <div className='flex flex-col'>
    
        <ul
          className={`p-16 space-y-4 items-center opacity-1 bg-gray-100 dark:bg-gray-900`}
        >
          <li
            className="flex-grow w-full border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold "
            style={{ transitionDelay: '150ms' }}
          >
            <Link href="/">
              <a className="flex w-auto pb-4">Home</a>
            </Link>
          </li>
          <li
            className="flex-grow border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold whitespace-nowrap w-full"
            style={{ transitionDelay: '175ms' }}
          >
            <Link href="/guestbook">
              <a className="flex w-auto pb-4">About</a>
            </Link>
          </li>
          <li
            className="flex border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold whitespace-nowrap w-full"
            style={{ transitionDelay: '200ms' }}
          >
            <Link href="/dashboard">
              <a className="flex w-auto pb-4">Works</a>
            </Link>
          </li>
          <li
            className="flex border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold whitespace-nowrap"
            style={{ transitionDelay: '250ms' }}
          >
            <Link href="/blog">
              <a className="flex w-auto pb-4">Blog</a>
            </Link>
          </li>
          <li
            className="flex-grow border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold whitespace-nowrap"
            style={{ transitionDelay: '275ms' }}
          >
            <Link href="/snippets">
              <a className="flex w-auto pb-4">Contact</a>
            </Link>
          </li>
        </ul>
    </div>
    </div>
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