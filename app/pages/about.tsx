import Link from 'next/link';
import Image from 'next/image';
import Container from '../components/Container';

export default function About() {
  return (
    <Container title="About – Eric Whitehead">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul className='font-serif'>
            <li>
              Twitter: <a href="https://twitter.com/er73c">@er73c</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/eric-jw">@eric-jw</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://ericjw.dev">
                https://ericjw.dev
              </Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/eric-j-whitehead/">
              https://www.linkedin.com/in/eric-j-whitehead/
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Hi</h3>
          <p>
            I'm Eric James Whitehead and I am looking for my first job in web development.{' '}
              <a href="https://www.linkedin.com/in/eric-j-whitehead/">Hire me</a>.
          </p>
          <h3>Education</h3>
          <p>
            In March of 2020 I completed a Ruby Full Stack Certification online from the U of Texas at Austin -- Center for Professional Education.
          </p>
          <h3>Job Title</h3>
          <p>Currently a Crew Member at Trader Joe's.</p>
          <h2>Headshots</h2>
          <p>
              <>----Insert Photos Here----</>
          </p>
        </div>
      </div>
    </Container>
  );
}