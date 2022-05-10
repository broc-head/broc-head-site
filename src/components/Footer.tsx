import Link from 'next/link';
import NowPlaying from './NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-700 dark:text-gray-400 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between items-start max-w-2xl mx-auto w-full">
      <hr className="w-full border-1 border-gray-300 dark:border-gray-700 mb-10" />
      
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col space-y-6">
          <Link href="/">
            <a className="text-gray-700 dark:text-gray-400 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-700 dark:text-gray-400 hover:text-gray-600 transition">
              About
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-6">
          <ExternalLink href="https://twitter.com/er73c">Twitter</ExternalLink>
          <ExternalLink href="https://github.com/eric-jw">GitHub</ExternalLink>
        </div>
      </div>
      <div className='mt-5 mb-2 w-full'>
      <NowPlaying />
      </div>
    </footer>
  );
}