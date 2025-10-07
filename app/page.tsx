import Hero from './_components/Hero';
import Features from './_components/Features';
import Quiz from './_components/Quiz';
import Footer from './_components/Footer';

export default function MainPage() {
	return (
		<main className='flex flex-col items-center justify-center'>
			<Hero />
      <Features/>
      <Quiz />
      <Footer />
		</main>
	);
}
