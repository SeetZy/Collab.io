/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/react-router-dom
import { Link } from 'react-router-dom'
// ? https://www.npmjs.com/package/react-bootstrap
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// ? https://www.npmjs.com/package/react-toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Navigation() {
  // ! WIP
  const handleSignOut = async () => {
    try {
      toast.success('You Have Been Signed Out Successfully', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } catch (error) {
      toast.error('An Unexpected Error Occurred\nPlease Try Again', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        className="bg-gray-950"
        data-bs-theme="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            data-bs-target="#navbarScroll"
          />
          <Navbar.Brand href="/" className="flex items-center">
            <h3 className="text-white font-bold mr-2 mt-1">
              Collab.<span className="text-blue-400">io</span>
            </h3>
          </Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/teams">Teams</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              {/* Sign In button */}
              <Link
                to={'/sign-in'}
                className="text-gray-300 bg-green-500 hover:bg-green-600 hover:text-white px-3 py-2 no-underline rounded-md w-[85px]"
              >
                Sign-in
              </Link>

              {/* Sign Out button */}
              <Link
                to={'/'}
                className="text-gray-300 bg-red-500 hover:bg-red-600 hover:text-white px-3 py-2 no-underline rounded-md w-[95px]"
                onClick={handleSignOut}
              >
                Sign-out
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer />
    </>
  )
}

export default Navigation
