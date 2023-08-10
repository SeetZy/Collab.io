/**
 * * Library imports
 */
import { useEffect, useState } from 'react'
// ? https://www.npmjs.com/package/react-router-dom
import { Link } from 'react-router-dom'
// ? https://www.npmjs.com/package/react-bootstrap
import { Row, Col, Button, Form } from 'react-bootstrap'
// ? https://www.npmjs.com/package/gsap
import { gsap } from 'gsap'
// ? https://www.npmjs.com/package/react-toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function SignUp() {
  document.title = 'SIGN UP // COMING SOON'

  // Animation code
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 2.5, ease: 'expo.out' } })
    tl.fromTo(
      '#form',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
    )
  }, [])

  // const [username, setUsername] = useState<string>('')
  // const [email, setEmail] = useState<string>('')
  // const [password, setPassword] = useState<string>('')
  // const [repeatPassword, setRepeatPassword] = useState<string>('')

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault()

    // Adding Supabase connection later
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
    <div className="w-full h-screen flex justify-center items-center 2xl:h-[80vh]">
      <div
        className="border-2 border-black bg-white rounded-md p-4 w-[70%] xl:w-[40%]"
        id="form"
      >
        <h1 className="py-2 text-2xl font-extrabold font-Roboto tracking-wider flex items-center text-black text-center">
          Coming Soon
          <i className="fa-solid fa-hashtag text-blue-700 text-3xl ml-2 mt-1"></i>
        </h1>
        <Form onSubmit={handleSignUp}>
          <Row>
            <Col>
              <Form.Group className="mb-3 text-white-500" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  required
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control
                  name="repeatPassword"
                  type="password"
                  placeholder="Repeat Password"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="flex justify-end">
            <Col>
              <Button
                className="w-[80px] xl:w-2/3"
                variant="dark"
                type="submit"
              >
                Sign up
              </Button>
            </Col>
            <Col className="flex justify-end">
              <Link to="/sign-in" className="no-underline">
                Already have an account?
                <br />
                Click here to Sign In
              </Link>
            </Col>
          </div>
        </Form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default SignUp
