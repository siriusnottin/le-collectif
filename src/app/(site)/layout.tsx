import type {PropsWithChildren} from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainAnimator from '@/components/MainAnimator';

export default function SiteGroupLayout({children}: PropsWithChildren) {
  return (
    <div className="grid grid-cols-12">
      <Header />
      <MainAnimator>{children}</MainAnimator>
      <Footer />
    </div>
  );
}
