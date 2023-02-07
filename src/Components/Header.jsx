
import {MDBBtn} from 'mdb-react-ui-kit';

function Header () {
    return (
        <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860294-ZW36VSRKLLBG3A4K2KAU/Header_02_022-copy.jpg?format=2500w')", height: '800px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Heading</h1>
              <h4 className='mb-3'>Subheading</h4>
              <MDBBtn outline className='mx-2'color='light'>
                     Dark
                </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Header;