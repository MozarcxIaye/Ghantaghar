import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import hotel_bg_img from './assets/hotel_bg.jpg'
import ShortStay from './components/ShortStay';
import LongStay from './components/LongStay';


function App() {
  const [stayType, setStayType] = useState('short');

  const handleStayTypeChange = (type) => {
    setStayType(type);
  };


  return (
    <>
      <Navbar></Navbar>

      <main className='main flex justify-center items-center flex-col ' >
        <section className='main_form bg-slate-100 w-[70vw] px-12 py-14 opacity-90 relative'>

          <section className='absolute z-10 flex justify-center items-center w-[100%] right-0 top-[-2rem]'>
            <div className='main_btn_div'>
              <button onClick={() => handleStayTypeChange('short')}>Short Stay</button>
              <button onClick={() => handleStayTypeChange('long')}>Long Stay</button>
            </div>
          </section>

          {stayType === 'short' ? (
            <ShortStay />
          ) : (
            <LongStay />
          )}
        </section>
      </main>

    </>
  )
}

export default App
