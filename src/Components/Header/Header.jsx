
import {MDBBtn} from 'mdb-react-ui-kit';
import "./header.css"
import HeaderImage from '../../assets/header-image-plants.jpg';

export default function Header () {
    return (
        <div
        className='p-5 text-center bg-image container' 
        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/small-cacti-with-white-wall-background_53876-133169.jpg?w=1380&t=st=1676473831~exp=1676474431~hmac=387351a1d50f07f76352554ca2d8694bee8d8034cfdf6ede74de05a9dcd264d5')", height: '500px', backgroundPosition: 'bottom'}}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'></h1>
              <h4 className='mb-3'>Plants for your home, Pots for your plants</h4>
             
              <MDBBtn rounded className='mx-2 custom-btn'style={{backgroundColor: '#B77445'}}>
                 Secondary
              </MDBBtn>

            </div>
          </div>
        </div>
      </div>
    )
}

///============[Oarallax Scripts]============//
