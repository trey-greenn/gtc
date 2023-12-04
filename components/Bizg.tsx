import Image from 'next/image'
import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { GetStaticProps } from "next";
import { getBiz } from '@/services';

const Bizg = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
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
      const [buttonText, setbuttonText] = useState("Click To Reveal");
      const handleClick = () => {
        setbuttonText('Build-a-bear'); 
      
        setTimeout(() => { 
            setbuttonText('Too Slow'); 
        }, 2000); // Reverts back to 'Submit' after 2 seconds 
    }; 
    const [guess, setGuess] = useState([] as any[] );
    useEffect(() => {
      getBiz()
      .then((newGuess) => setGuess(newGuess))
    }, []);
    console.log(guess)
  return (
   
    <>
    <div className="slide-container_0 ">

    <div className="grid grid-cols-1 sm:grid-cols-5 mt-12">
      <Carousel responsive={responsive} className="sm:col-start-2 sm:col-end-5 col-span-full ">
        {guess.map((g, index) => (
          <div className="wrapper flex justify-center">
          <div className="clash-card barbarian ">
              <div className="clash-card__image clash-card__image--barbarian flex justify-center ">
                <img className="h-36 " src="/Untitled.png" alt="barbarian" />
              </div>
              <div className="clash-card__level clash-card__level--barbarian">Guess That Business</div>
              <div className="clash-card__unit-name">{g.number}</div>
              <div className="clash-card__unit-description text-xl">
                {g.bizDescript}
                </div>
    
              <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                <div className="one-third py-2">
                  <div className="stat">{g.founded}</div>
                  <div className="stat-value">Founded</div>
                </div>
    
                <div className="one-third py-2">
                  <div className="stat ">{g.revenue}</div>
                  <div className="stat-value">2022 Revenue</div>
                </div>
    
                <div className="one-third no-border py-2">
                  <div className="stat">{g.marketCap}</div>
                  <div className="stat-value">Market Cap</div>
                </div>
    
              </div>
              <button className="bg-purple-200 my-10 p-2 rounded-2xl font-bold" onClick={handleClick}>{buttonText}</button>
              </div>
            </div>
        ))}

      </Carousel>

    </div>
    </div>
    </>
  )
}

export default Bizg
