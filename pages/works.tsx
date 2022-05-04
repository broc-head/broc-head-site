import Link from 'next/link';
import Container from '../components/Container';

export default function About() {
  return (
    <Container title="Works – Eric Whitehead">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Works
        </h1>
        <div className="flex flex-col mb-8 leading-6">
          <p>
            Here are some things I've built.
          </p>
        </div>
      </div>
    </Container>
  );
}