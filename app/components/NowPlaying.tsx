import useSWR from 'swr';
import { useEffect } from 'react';
import { animate } from 'motion';

import fetcher from '../lib/fetcher';
import { NowPlayingSong, LastPlayedSong } from '../lib/types';

function EarBuds() {
  useEffect(() => {
    animate(
      '#left',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(1.0) translateY(0.2rem)',
          'scaleY(1.0) translateY(0rem)'
        ]
      },
      {
        duration: 0.75,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
    animate(
      '#right',
      {
        transform: [
          'scaleY(1.0)  translateY(0rem)',
          'scaleY(1.0) translateY(0.2rem)',
          'scaleY(1.0)  translateY(0rem)'
        ]
      },
      {
        delay: 0.25,
        duration: 1.0,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
  }, []);

  return (
    <div className="z-0 w-auto h-auto flex opacity-90 overflow-hidden hidden:blur-lg">
      <span
        id="left"
        className="flex"
      >
        <svg
          className="h-5 w-5 text-gray-700 dark:text-gray-400" 
          width="36" 
          height="36" 
          viewBox="0 0 700 700" 
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
        <path d="m122.5 122.5v52.5c0 9.6641 7.8359 17.5 17.5 17.5s17.5-7.8359 17.5-17.5v-52.5c0-9.6641-7.8359-17.5-17.5-17.5s-17.5 7.8359-17.5 17.5zm17.5-52.5c28.996 0 52.5 23.504 52.5 52.5v52.5c0 28.996-23.504 52.5-52.5 52.5s-35-23.504-35-52.5v-52.5c0-28.996 6.0039-52.5 35-52.5z"/>
        <path d="m210 52.5c-48.324 0-87.5 39.176-87.5 87.5v17.5c0 48.324 39.176 87.5 87.5 87.5s87.5-39.176 87.5-87.5v-17.5c0-48.324-39.176-87.5-87.5-87.5zm0-35c67.656 0 122.5 54.844 122.5 122.5v332.5c0 19.328-15.672 35-35 35h-35c-19.328 0-35-15.672-35-35l0.019531-193.74c-5.7227 0.81641-11.57 1.2422-17.52 1.2422-67.656 0-122.5-54.844-122.5-122.5v-17.5c0-67.656 54.844-122.5 122.5-122.5zm52.512 250.71-0.011719 204.29h35l0.027344-229.3c-10.051 10.262-21.891 18.766-35.016 25.004z"/>
        <path d="m253.75 446.25c-9.6641 0-17.5-7.8359-17.5-17.5s7.8359-17.5 17.5-17.5h52.5c9.6641 0 17.5 7.8359 17.5 17.5s-7.8359 17.5-17.5 17.5z"/>
        
      </g>
        </svg>
      </span>

      <span id='right' className='flex -ml-2 -mr-3'
      > 
      <svg 
        className="h-5 w-5 text-gray-700 dark:text-gray-400" 
        width="36" 
        height="36" 
        viewBox="0 0 700 700" 
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
            <path d="m140 22.5c67.656 0 122.5 54.844 122.5 122.5v17.5c0 67.656-54.844 122.5-122.5 122.5-5.9414 0-11.785-0.42188-17.5-1.2422v193.74c0 19.328-15.672 35-35 35h-35c-19.328 0-35-15.672-35-35v-332.5c0-67.656 54.844-122.5 122.5-122.5zm0 35c-48.324 0-87.5 39.176-87.5 87.5v17.5l0.007812 85.738-0.019531-0.015625 0.011719 229.28h35l-0.003906-245c14.625 10.984 32.805 17.496 52.504 17.496 48.324 0 87.5-39.176 87.5-87.5v-17.5c0-48.324-39.176-87.5-87.5-87.5z"/>
            <path d="m43.75 446.25c-9.6641 0-17.5-7.8359-17.5-17.5s7.8359-17.5 17.5-17.5h52.5c9.6641 0 17.5 7.8359 17.5 17.5s-7.8359 17.5-17.5 17.5z"/>
          </g>
      
      </svg>
      </span>
    </div>
  );
}

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);
  const history = LastPlayed();

  return (
    <div className="flex flex-row-reverse sm:flex-row items-center mt-8 space-x-0 sm:space-x-2 text-xs w-full text-gray-600 dark:text-gray-400">
      <div className='pt-4 px-1'>
        {data?.songUrl ? (
          <EarBuds />
        ) : (
          <svg className="h-4 w-4 ml-auto mt-[-2px]" viewBox="0 0 168 168">
            <path
              fill="#1ED760"
              d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
            />
          </svg>
        )}
      </div>
      <div className='flex flex-col w-full '>
        <p className='mb-0.5 italic text-[0.65rem]'>
          {data?.songUrl ? (
            'Listening'
          ) : (
            'Recently played'
          )} on <a href='https://www.spotify.com' className='underline'>Spotify:</a>
        </p>
        {data?.isPlaying || history?.hasPlayed ? (
          '..probably Justice..'
        ) : (
          <div className="inline-flex flex-row flex-wrap w-full max-w-full truncate">
            <a
              className="text-gray-900 dark:text-gray-200 font-medium max-w-max truncate"
              href={data?.songUrl ?? history?.songUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data?.title ?? history?.title}
            </a>
            <span className='mx-1 px-1'>
              {' – '}
            </span>
            <p className="max-w-max truncate">
              {data?.artist || history?.artist }
            </p>
          </div>
        )}      
      </div>
    </div>
  );
}

function LastPlayed() {
  const { data } = useSWR<LastPlayedSong>('/api/last-played', fetcher);
  return data;
};