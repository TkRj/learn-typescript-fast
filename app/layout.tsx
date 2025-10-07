import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin']});

export const metadata: Metadata = {
	title: 'Learn Typescript Fast',
	description:
		'Master Typescript fast with this interactive landing page build in Next.js',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
