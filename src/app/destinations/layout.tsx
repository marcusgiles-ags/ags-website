import CountryNavigation from '@/components/CountryNavigation';

export default function DestinationsLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
 <>
 {children}
 <CountryNavigation />
 </>
 );
}

