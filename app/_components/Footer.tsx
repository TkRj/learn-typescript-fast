const Footer = () => {
	return (
		<footer className='py-10 text-center text-gray-600 border-t bg-white w-full'>
			<p>
				© {new Date().getFullYear()} Learn TypeScript Fast. Built with ❤️ using
				Next.js.
			</p>
			<div className='flex justify-center gap-4 mt-3'>
				<a
					href='https://github.com'
					target='_blank'
					className='hover:text-blue-600'
				>
					GitHub
				</a>
				<a
					href='https://linkedin.com'
					target='_blank'
					className='hover:text-blue-600'
				>
					LinkedIn
				</a>
			</div>
		</footer>
	);
};

export default Footer;
