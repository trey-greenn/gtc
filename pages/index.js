import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


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
    <div className="slide-container_0 ">
    <div className="wrapper">
      <div className="grid grid-cols-7 gap-1 text-center">
        <a className="col-start-2 bg-black rounded-lg py-0.5 font-bold text-xs sm:text-lg">All</a>
        <a className="col-start-3 bg-black rounded-lg py-0.5 text-xs sm:text-lg font-bold" href="/business"> Business</a>
        <a className="col-start-4 bg-black rounded-lg py-0.5 text-xs sm:text-lg font-bold" href="innovations">Innovations</a>
        <a className="col-start-5 bg-black rounded-lg py-0.5 text-xs sm:text-lg font-bold" href="people">People</a>
        <a className="col-start-6 bg-black rounded-lg py-0.5 text-xs sm:text-lg font-bold" href="jargon">Jargon</a>
        

      </div>
    </div>


    <div className="grid grid-cols-5 mt-12">
      <Carousel responsive={responsive} className="sm:col-start-2 sm:col-end-5 col-span-full ">
        <div className="wrapper flex justify-center">
      <div className="clash-card barbarian ">
          <div className="clash-card__image clash-card__image--barbarian flex justify-center ">
            <img className="h-36 " src="/Untitled.png" alt="barbarian" />
          </div>
          <div className="clash-card__level clash-card__level--barbarian">Guess That Business</div>
          <div className="clash-card__unit-name">#01</div>
          <div className="clash-card__unit-description">
            This company launched in 1997, its a mall based retailer, they have 350 stores, across the United States, Canada, & the UK, on average each store does about $1 Million. 1000 Full time employees, 3200 part time employees. Direct to consumer, 2022: 467 mil in revenue. 2021: $411 mil in revenue.
          </div>

          <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
            <div className="one-third">
              <div className="stat">1997</div>
              <div className="stat-value">Founded</div>
            </div>

            <div className="one-third">
              <div className="stat">$467 Mil.</div>
              <div className="stat-value">2022 Revenue</div>
            </div>

            <div className="one-third no-border">
              <div className="stat">$372 Mil.</div>
              <div className="stat-value">Market Cap</div>
            </div>

          </div>
          </div>
        </div>
          <div>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png" alt="barbarian" />
          </div>

      </Carousel>
  
    </div>
    </div>
    </>
 
  )
}
