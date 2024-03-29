import './globals.css';
import MainHeader from '@/components/main-header/main-header';
import Banner from '@/components/main-header/banner';
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Banner />
        <MainHeader />

        {children}
      </body>
    </html>
  );
}
