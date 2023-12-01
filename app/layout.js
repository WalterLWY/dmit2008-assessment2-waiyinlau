// Week 5 - Class 1 - Employee Start
/* DELETE : import { Inter } from 'next/font/google'*/
/*const inter = Inter({ subsets: ['latin'] })*/

// Week 5 - Class 1 - Employee Instructor - 1
/* 
      framework imports

      lib imports node modules

      component imports

      styles
*/
 
import { NavBar } from './components/navigation/NavBar'
import './globals.css'

export const metadata = {
  title: 'Super Savings Store',
  description: 'Super Savings Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
