import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import Footer from './Footer';



export const siteTitle = 'My Next.js Blog'

type Props = {
  children?: React.ReactNode
}

const Container = ({ children, ...customMeta }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  const meta = {
    title: 'Eric Whitehead - Developer, Writer, Designer.',
    description: 'Front-end developer, blogger, food enthusiast, artist.',
    image: '', //need banner
    type: 'website',
    ...customMeta
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-900">
        <Head>
            <title>{meta.title}</title>
            <meta name="robots" content="follow, index" />
            <meta content={meta.description} name="description" />
            <meta property="og:url" content="" /> // need hostname
            <link rel="canonical" href="" /> // need hostname 
            <meta property="og:type" content={meta.type} />
            <meta property="og:site_name" content="Eric Whitehead" />
            <meta property="og:description" content={meta.description} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:image" content={meta.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@er73c" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.image} />
            {meta.date && (
              <meta property="article:published_time" content={meta.date} />
            )}
        </Head>
        <div className='-top-4 h-24 sticky bg-gray-50/30 dark:bg-gray-900/30 backdrop-blur-md'>
        <div className='z-100 flex sticky top-0 h-20 px-8 items-center'>
          <nav className='flex flex-row items-center justify-between w-full  text-gray-900  dark:text-gray-100'>
            <div className='-ml-1'>
              <NavItem href="/" text='Home ←' />
            </div>
            <div className='flex items-center justify-between space-x-7'>
              <div className="hidden md:inline-block space-x-3">
                <NavItem href="/about" text="About" />
                <NavItem href="/works" text="Works" />
                <NavItem href="/blog" text="Blog" />
                <NavItem href="/contact" text="Contact" />
              </div>  
              <button
                className='w-8 h-8 flex items-center justify-center rounded-md ring-2 ring-inset ring-black dark:ring-gray-100 bg-yellow dark:bg-space shadow-[6px_6px_0_0_] shadow-sunray dark:shadow-purple hover:shadow-none dark:hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] text-gray-900 dark:text-gray-100'
                aria-label='dark mode toggle'
                type="button"
                onClick={() =>
                  setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                }
              >
                {mounted && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className='h-6 w-6'
                  >
                    {resolvedTheme === 'dark' ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    )}
                  </svg>
                )}
              </button>
              <MobileMenu />
            </div>
          </nav>    
        </div>   
        </div>       
        <div className='px-8 pt-2 flex flex-col justify-center'>
          <main className="mb-auto">
            {children}
            <Footer />
          </main>
        </div>
    </div>
  )
};

export default Container

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={`${
          isActive
            ? 'text-gray-800 dark:text-gray-200 bg-orange-200 dark:bg-orange-900'
            : 'text-gray-700 dark:text-gray-300'}
          p-1 hover:bg-orange-300 dark:hover:bg-orange-600 transition-all`
        }
      >
        <span>
          {isActive && text === 'Home ←' 
            ? 'ericjw.dev'
            : text
          }
        </span>
      </a>
    </Link>
  );
}