import React ,{useEffect} from 'react'


//imported destination images ===>
import paris from '../../assests/paris.jpg'
import dubai from '../../assests/Dubai.jpg'
import newyork from '../../assests/NewYork.jpg'
import london from '../../assests/London.jpg'

//imported Travelers images==>
import traveler from '../../assests/T4.jpg'
import traveler2 from '../../assests/T1.jpg'
import traveler3 from '../../assests/b2.jpg'
import traveler4 from '../../assests/b3.jpg'


//import AOS ========>
import Aos from 'aos'
import 'aos/dist/aos.css'

//WE ARE GOING TO USE HIGH ORDER ARRAY METHOD CALLED MAP TO DISPLAY ALL THE DATA==>
const travelers = [
  {
    id:1,
    destinationImage: paris,
    travelerImage:traveler,
    travelerName:'IsraTech',
    socialLink:'@AMI JASON'

  },
  {
    id:2,
    destinationImage: dubai,
    travelerImage:traveler2,
    travelerName:'TravelerFork',
    socialLink:'@RUBINA TALM'

  },

  {
    id:3,
    destinationImage: newyork,
    travelerImage:traveler3,
    travelerName:'NewTimes23',
    socialLink:'@WILSON LADON'

  },

  {
    id:4,
    destinationImage: london,
    travelerImage:traveler4,
    travelerName:'AdianFork',
    socialLink:'@PETER WINSLET'

  },

]

const Travelers = () => {

//use effect to set animation duration===>
 useEffect(()=>{
    Aos.init({duration:2000})
 },[])

  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">
            
          

          {
          travelers.map(({id,destinationImage,travelerImage,travelerName, socialLink}) =>{
            return(
               //{/* single passenger card */}
              <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">

              <img src={destinationImage} className='destinationImage'/>
  
              <div className="travelerDetails">
                 <div className="travelerPicture">
                  <img src={travelerImage} className='travelerImage'/>
                 </div>
                   <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{socialLink}</p>
                   </div>
              </div>
  
  
            </div>
            )
          })
         }

          
        </div>
      </div>

    </div>
  )
}

export default Travelers
