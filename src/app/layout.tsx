import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Recipe Finder',
    description:
        'The application will allow users to search for recipes with advanced filters, display results on a separate page, and view detailed information for each recipe',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
