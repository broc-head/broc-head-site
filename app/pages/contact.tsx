import Container from '../components/Container';
import TopTracks from '../components/TopTracks';

export default function Contact() {
  return (
    <Container title="Contact – Eric Whitehead">
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1>I haven't hooked up a contact form yet, so instead, here are my current Top 10 Spotify Tracks</h1>
        <TopTracks />
    </div>
    </Container>
  );
}