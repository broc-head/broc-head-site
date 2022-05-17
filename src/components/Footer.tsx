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
    <footer className="flex flex-col max-w-2xl mx-auto w-full">
      <hr className="w-full border-1 border-gray-300 dark:border-gray-700 mt-20 mb-10" />
      <div className='flex w-full text-sm flex-col space-y-2'>
        <div className=''>
          <p>© 2022 Eric Whitehead</p>
        </div>
        <div className='justify-end'>
          <ExternalLink href="https://github.com/eric-jw">GitHub</ExternalLink>
        </div>
      </div>
      <div className='mt-5 mb-2 w-full'>
        <NowPlaying />
      </div>
    </footer>
  );
}