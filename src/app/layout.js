import './globals.css';
import RevealObserver from '../components/RevealObserver';

export const metadata = {
  title: 'KA Supermarket | Fresh Groceries in Vadakara, Payyoli & Malabar',
  description:
    'KA Supermarket is your trusted neighborhood retail network across Vadakara, Payyoli, Pookad and the Malabar region. Fresh daily farm produce, premium household essentials, and unmatched grocery variety across 5 convenient branches.',
  keywords: [
    'KA Supermarket',
    'Groceries Vadakara',
    'Supermarket Payyoli',
    'Best grocery store Malabar',
    'Supermarket Pookad',
    'Fresh vegetables Vadakara',
    'Grocery store Kerala',
    'KA Supermarket branches',
    'Narayana Nagaram supermarket',
    'Sand Banks Vadakara grocery',
    'Malabar fresh produce',
  ].join(', '),
  openGraph: {
    title: 'KA Supermarket | Freshness & Quality, Closer To You',
    description:
      'Your trusted neighborhood retail network offering premium household essentials, fresh daily farm produce, and an unmatched choice of groceries across 5 convenient regional branches in Malabar.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
