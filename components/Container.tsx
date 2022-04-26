import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import NextLink from 'next/link';

export const siteTitle = 'My Next.js Blog'

type Props = {
  children?: React.ReactNode
}

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={`${
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400'}
          hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all`
        }
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

const Container = ({ children, ...customMeta }: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleToggle = ({event}: any) => {
    setIsDarkTheme(event.target.checked);
  }
  const getMediaQueryPreference= () => {
    const mediaQuery = '(prefers-color-scheme: dark)';
    const mql = window.matchMedia(mediaQuery);
    const hasPreference = typeof mql.matches === 'boolean';

    if (hasPreference) {
      return mql.matches ? 'dark' : 'light';
    }
  };

  const storeUserSetPreference= (pref) => {
    localStorage.setItem('theme', pref);
  };
  const getUserSetPreference = () => {
    return localStorage.getItem('theme');
  }

  useEffect(() => {
    const userSetPreference = getUserSetPreference();
    if (userSetPreference !== null) {
      setIsDarkTheme(userSetPreference === 'dark');
    } else {
      const mediaQueryPreference = getMediaQueryPreference();
      setIsDarkTheme(mediaQueryPreference === 'dark');
    }
  }, []);
  useEffect(() => {
    if (isDarkTheme !== undefined) {
      if (isDarkTheme) {
        storeUserSetPreference('dark');
      } else {
        storeUserSetPreference('light');
      }
    }
  }, [isDarkTheme]);

  const router = useRouter();
  const meta = {
    title: 'Eric Whitehead - Developer, Writer, Designer.',
    description: 'Front-end developer, blogger, food enthusiast, artist.',
    image: '', //need banner
    type: 'website',
    ...customMeta
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
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
        <div className='flex flex-col justify-center px-8'>
          <nav className='flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 bg-gray-50 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100'>
            
            <div className="ml-[-0.60rem]">
              <NavItem href="/" text="Home" />
              <NavItem href="/about" text="About" />
              <NavItem href="/works" text="Works" />
              <NavItem href="/blog" text="Blog" />
              <NavItem href="/contact" text="Contact" />
            </div>
            
            <div className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all">
              <label className="opacity-0">Dark</label>
              <input 
                type="checkbox"
                className='z-500 opacity-0'
                checked={isDarkTheme}
                onChange={handleToggle}
              />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-800 dark:text-gray-200"
                >
                  {isDarkTheme ? (
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  )}
                </svg>
            </div>
              
          </nav>
        </div>

        <main className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
        
    </div>
  )
}

export default Container