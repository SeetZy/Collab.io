/**
 * * Library imports
 */
import { useEffect, useState } from 'react'
// ? https://www.npmjs.com/package/react-router-dom
import { Link } from 'react-router-dom'
// ? https://www.npmjs.com/package/react-bootstrap
import { Row, Button, Form } from 'react-bootstrap'
// ? https://www.npmjs.com/package/gsap
import { gsap } from 'gsap'
// ? https://www.npmjs.com/package/react-toastify
import { ToastContainer, toast } from 'react-toastify'

function SignIn() {
  document.title = 'SIGN IN // COLLAB.IO'

  // Animation code
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 2.5, ease: 'expo.out' } })
    tl.fromTo(
      '#form',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
    )
  }, [])

  // const [email, setEmail] = useState<string>('')
  // const [password, setPassword] = useState<string>('')
  // const [popupVisible, setPopupVisible] = useState(false)
  // const [popupContent, setPopupContent] = useState('')

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
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
    <div className="w-full h-auto bg-cover bg-no-repeat bg-bg-svg flex justify-center items-center 2xl:h-[80vh]">
      <div
        className="border-2 border-black bg-white rounded-md p-4 w-80 mt-[10%] mb-[10%] max-sm:mt-[40%] max-sm:mb-[30%]"
        id="form"
      >
        <h1 className="py-2 text-2xl font-extrabold font-Roboto tracking-wider flex items-center text-black text-center">
          Collab.<span className="text-blue-400">io</span>
        </h1>
        <Form onSubmit={handleSignIn}>
          {/* Username Field */}
          <Form.Group className="mb-3 text-white-500" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="username"
              required
            />
          </Form.Group>

          {/* Password Field */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            />
          </Form.Group>

          {/* Sign In Buttons */}
          <Row className="mb-2 w-[200px]">
            <Button variant="dark" type="submit" className="ml-3">
              <i className="fa-brands fa-github mr-2"></i>Sign In With Github
            </Button>
          </Row>
          <Row className="w-[100px]">
            <Button variant="dark" type="submit" className="ml-3">
              Sign In
            </Button>
          </Row>

          {/* Sign Up Link */}
          <Row className="mt-2">
            <Link to="/sign-up" className="no-underline">
              Don't have an account?
              <br /> Click here to Sign Up
            </Link>
          </Row>
        </Form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default SignIn
