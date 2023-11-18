import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import  Bizg  from '../../components/Bizg';


export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  


  return (

    <>
    <div className="slide-container_0">
    <div className="wrapper">
      <div className="grid grid-cols-7 gap-1 text-center">
        <a className="col-start-2 bg-black rounded-lg py-0.5 font-bold text-xs sm:text-lg">All</a>
        <a className="col-start-3 bg-black rounded-lg py-0.5 text-xs sm:text-lg font-bold"> Business</a>
        <a className="col-start-4 bg-black rounded-lg py-0.5 text-xs sm:text-lg font-bold">Innovations</a>
        <a className="col-start-5 bg-black rounded-lg py-0.5 text-xs sm:text-lg font-bold">People</a>
        <a className="col-start-6 bg-black rounded-lg py-0.5 text-xs sm:text-lg font-bold">Jargon</a>
        

      </div>
    </div>

    <Bizg/>
    </div>
    
    </>
 
  )
}
