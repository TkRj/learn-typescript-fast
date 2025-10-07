'use client';
import { Code, Zap, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
	{
		icon: <Code className='w-8 h-8 text-blue-600' />,
		title: 'Learn by Doing',
		desc: 'Interactive coding exercises that reinforce real-world use.',
	},
	{
		icon: <Zap className='w-8 h-8 text-blue-600' />,
		title: 'Fast & Focused',
		desc: 'Concise explanations that respect your time and attention.',
	},
	{
		icon: <Laptop className='w-8 h-8 text-blue-600' />,
		title: 'Made for Devs',
		desc: 'Tailored for JavaScript developers upgrading to TypeScript.',
	},
];

const Features = () => {
	return (
		<section className='py-20 px-6 bg-white w-full'>
			<h2 className='text-3xl font-bold text-center mb-12'>Why Choose Us</h2>
			<div className='max-w-5xl mx-auto grid md:grid-cols-3 gap-8'>
				{items.map((item, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: i * 0.2 }}
						viewport={{ once: true }}
						className='p-6 border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-lg transition'
					>
						<div className='mb-4'>{item.icon}</div>
						<h3 className='font-semibold text-lg mb-2'>{item.title}</h3>
						<p className='text-gray-600'>{item.desc}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Features;
