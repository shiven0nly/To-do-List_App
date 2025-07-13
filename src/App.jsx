import React from 'react'
import './index.css'
import './App.css'
import SplitText from "./components/SpiltText";
import Hero from './components/Hero'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');}

  return (
  
   <>
   <div>

<div className="text">
<div className='flex justify-center items-center my-[5vh]'>
<SplitText
  text="TO DO LIST!"
  className="text-7xl font-[700] text-center font-['Baloo Bhai 2']"
  delay={20}
  duration={2}
  ease="elastic.out(1,0.3)"
  splitType="chars"
  from={{ opacity: 0, y: 30 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.2}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
</div>
</div>
<div className='flex flex-col gap-[3.5rem]'>
    <Hero />
    <Main />
<Footer />
</div>
   </div>
   </>
  )
}

export default App
