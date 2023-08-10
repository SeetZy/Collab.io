/**
 * * Library imports
 */
import { useEffect } from 'react'
// ? https://www.npmjs.com/package/react-bootstrap
import { Button } from 'react-bootstrap'
// ? https://www.npmjs.com/package/react-router-dom
import { useNavigate } from 'react-router-dom'
// ? https://www.npmjs.com/package/gsap
import { gsap } from 'gsap'

function EmailConfirmationPage() {
  document.title = 'EMAIL CONFIRMATION // COMING SOON'

  // Animation code
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 2.5, ease: 'expo.out' } })
    tl.fromTo(
      '#confirmation',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
    )
  }, [])

  const navigate = useNavigate()

  function handleClick() {
    navigate('/sign-in')
  }

  return (
    <section className="w-screen h-[80vh] flex justify-center items-center">
      <div
        className="w-[25%] max-lg:w-[50%] max-sm:w-[70%] h-auto m-4 bg-gray-100 rounded-2xl pt-3 pb-3 border-2 border-black"
        id="confirmation"
      >
        <div className="w-full h-full">
          <div className="mt-[2%] ml-[5%] mr-[5%] mb-">
            <p className="text-3xl font-bold">Your email has been confirmed</p>
            <Button
              variant="dark"
              type="submit"
              className="mt-4"
              onClick={handleClick}
            >
              Proceed to sign in
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmailConfirmationPage
