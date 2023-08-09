import './globals.css'
import DrawerContextProvider from '@/context/DrawerContext';
import BodyWrapper from '@/components/body';

export const metadata = {
  title: 'Jeb Wilfred Panganiban',
  description: 'Software Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DrawerContextProvider>
        <BodyWrapper>
          {children}
        </BodyWrapper>
      </DrawerContextProvider>
    </html>
  )
}
