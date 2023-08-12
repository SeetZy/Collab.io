/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/react-simple-typewriter
import { Typewriter } from 'react-simple-typewriter'
import '../ css/cube.css'

function LoadingBar() {
  return (
    <section className="w-full h-screen z-50 flex justify-center items-center">
      <div className="h-20 w-[90px]">
        <div className="w-full flex justify-center">
          <div className="cube h-[40px] w-[40px]">
            <div className="h-full w-full border-2 border-white border-solid absolute bg-cube"></div>
            <div className="h-full w-full border-2 border-white border-solid absolute bg-cube"></div>
            <div className="h-full w-full border-2 border-white border-solid absolute bg-cube"></div>
            <div className="h-full w-full border-2 border-white border-solid absolute bg-cube"></div>
            <div className="h-full w-full border-2 border-white border-solid absolute bg-cube"></div>
            <div className="h-full w-full border-2 border-white border-solid absolute bg-cube"></div>
          </div>
        </div>

        <h5 className="mt-4">
          <Typewriter
            words={['Loading...']}
            loop={-1}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={90}
            delaySpeed={1000}
          />
        </h5>
      </div>
    </section>
  )
}

export default LoadingBar
