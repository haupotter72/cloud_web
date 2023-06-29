
import  Hero  from './components/Hero';
import  Navbar  from './components/Navbar';
import  About  from './components/About';
import Support   from './components/Support';
import AllOne from './components/AllOne';
import Picing from './components/Picing';
import Footer from './components/Footer';
import Introduce from './components/Introduce';
import Intro from './components/Intro';
import { BrowserRouter, Routes, Route } from "react-router-dom";



import { useEffect,useState,useMemo } from 'react';
import Drawe from './components/draw';
import Login from './IOP/Login';




function App() {
   
 
  



  return (
    <BrowserRouter className="App">
        <Navbar/>
        <Drawe/>
        <Hero/>
        <Intro/>     
        <Introduce/>
        <About/>
        <Support/>
        <AllOne/>
      
        <Picing/>
      
        
    
        <Footer/>
       <Login/>
       
        
  

   
   
      
    </BrowserRouter>
  );
}
 export const useElementOnScreen = (options, targetRef) => {
    const [isVisibile, setIsVisible] = useState()
    const callbackFunction = entries => {
        const [entry] = entries //const entry = entries[0]
        setIsVisible(entry.isIntersecting)
    }
    const optionsMemo = useMemo(() => {
        return options
    }, [options])
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo)
        const currentTarget = targetRef.current
        if (currentTarget) observer.observe(currentTarget)

        return () => {
        if(currentTarget) observer.unobserve(currentTarget)
        }
    }, [targetRef, optionsMemo])
    return isVisibile
}

export default App;
