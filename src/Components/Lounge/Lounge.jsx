import React ,{useEffect} from 'react'

//iporting images ===>
import imageGrid from '../../assests/M.png'

//import AOS ========>
import Aos from 'aos'
import 'aos/dist/aos.css'

const lounge = () => {

//use effect to set animation duration===>
 useEffect(()=>{
    Aos.init({duration:2000})
 },[])

  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">

        <div data-aos='fade-left' data-aos-duration='700' className="imgDiv">
          <img src={imageGrid}/>
      </div>
          
          <div className="textDiv">
            <h2 data-aos='fade-down' data-aos-duration='700'>Unaccompained Minor Lounge</h2>


            <div className="grids grid">
            <div  data-aos='fade-down' data-aos-duration='700' className="singleGrid">
              <span className='gridTitle'>
                Help through the airport
              </span>
              <p>
                You can also call airlines from your phone and book a fight ticket to one of your favarite destinations.
              </p>
            </div>

            <div  data-aos='fade-down' data-aos-duration='700' className="singleGrid">
              <span className='gridTitle'>
               Priority Boarding
              </span>
              <p>
                You can also call airlines from your phone and book a fight ticket to one of your favarite destinations.
              </p>
            </div>

            <div  data-aos='fade-down' data-aos-duration='700' className="singleGrid">
              <span className='gridTitle'>
              Care on the flight
              </span>
              <p>
                You can also call airlines from your phone and book a fight ticket to one of your favarite destinations.
              </p>
            </div>

            <div  data-aos='fade-down' data-aos-duration='700' className="singleGrid">
              <span className='gridTitle'>
              Chaffeur-drive service
              </span>
              <p>
                You can also call airlines from your phone and book a fight ticket to one of your favarite destinations.
              </p>
            </div>

            
          </div>
          </div>

          

      </div>
    </div>
  )
}

export default lounge
