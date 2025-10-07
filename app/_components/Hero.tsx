"use client";
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<section className='text-center py-24 px-6 bg-gradient-to-b from-blue-50 to-white w-full'>
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className='text-5xl font-bold text-blue-700'
			>
				Learn TypeScript Fast 🚀
			</motion.h1>
			<p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
				Master TypeScript the smart way — through concise lessons and hands-on
				quizzes.
			</p>
			<a
				href='#quiz'
				className='mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition'
			>
				Start Free Demo
			</a>
		</section>
	);
};

export default Hero;
