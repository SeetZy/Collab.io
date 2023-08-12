/**
 * * Library imports
 */
import { useEffect } from 'react'
// ? https://www.npmjs.com/package/react-bootstrap
import { Button } from 'react-bootstrap'
// ? https://www.npmjs.com/package/gsap
import { gsap } from 'gsap'

/**
 * * Component imports
 */
import Avatar from '../Avatar'
import Tag from '../Tag'

function ProfileSidebar() {
  // Animations
  useEffect(() => {
    const tl = gsap.timeline({ default: { duration: 2.5, ease: 'expo.out' } })
    tl.fromTo(
      '#sidebar',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
    )
  }, [])

  return (
    <div
      className="w-[100%] h-[95%] m-3 mt-4 bg-gray-100 rounded-2xl pt-3 pb-3 border-2 border-black"
      id="sidebar"
    >
      {/* Profile Avatar */}
      <div className="mt-[8%] ml-[10%] mr-[10%] max-xl:justify-center flex">
        <Avatar seed="dasvgheh" width={250} />
      </div>

      {/* Profile Editing Button */}
      <Button
        variant="dark"
        type="submit"
        className="ml-[9%] min-[1023px]:ml-[16%] min-[1293px]:ml-[10%] mt-[3%]"
      >
        Edit Profile
      </Button>

      <ul className="mt-[3%] mb-[9%] mr-[10%]">
        {/* User Information */}
        <li>
          <div className="text-lg">Username: Tester</div>
        </li>
        <li>
          <div className="text-base">Joined: 07.08.2023</div>
        </li>
        <li>
          <div className="text-base">Github: random link</div>
        </li>
        <br />

        {/* User Tags */}
        <li>
          <h5 className="font-bold">Tags:</h5>
          <ul className="flex flex-wrap -mx-8 mr-2">
            <Tag text="DevOps" />
            <Tag text="Frontend" />
            <Tag text="Backend" />
            <Tag text="Databases" />
            <Tag text="IoT" />
            <Tag text="3D modeling" />
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default ProfileSidebar
