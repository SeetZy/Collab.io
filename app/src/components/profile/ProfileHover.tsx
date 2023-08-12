/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/react-router-dom
import { Link } from 'react-router-dom'

/**
 * * Component imports
 */
import Avatar from '../Avatar'

interface ProfileHoverProps {
  avSeed: string
  username: string
}

// ? WIP
function ProfileHover({ avSeed, username }: ProfileHoverProps) {
  return (
    <div className="w-[300px] border-2 border-black">
      <div className="w-full flex justify-between ml-[3%] mr-[3%]">
        <Avatar seed={avSeed} width={50} />
      </div>
      <h5>{username}</h5>
      <Link to={'/profile'}>
        <h5>View Profile</h5>
      </Link>
    </div>
  )
}

export default ProfileHover
