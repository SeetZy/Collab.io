/**
 * * Library imports
 */
import { useMemo } from 'react'
// ? https://www.npmjs.com/package/@dicebear/avatars
// ? https://www.dicebear.com/how-to-use/js-library
import { createAvatar } from '@dicebear/core'
import { notionists, identicon } from '@dicebear/collection'

function ProfileActivityCard() {
  // Generates avatar
  const teamIcon = useMemo(() => {
    return createAvatar(identicon, {
      seed: 'dajshgasdj',
      backgroundColor: ['FFF'],
      size: 256,
    }).toDataUriSync()
  }, [])

  // Generates avatar
  const avatar = useMemo(() => {
    return createAvatar(notionists, {
      seed: 'dasvgheh',
      backgroundColor: ['c0aede'],
      size: 256,
    }).toDataUriSync()
  }, [])

  return (
    <div className="w-[95%] bg-white rounded-xl h-auto border-black border-2 m-2">
      <div className="m-2">
        {/* Team Name */}
        <h4 className="font-bold">Team name: Something</h4>

        {/* Team Description */}
        <div>
          <h5 className="font-bold">Description:</h5>
          <h5 className="ml-3">
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            arcu euismod, gravida libero non, suscipit nisl. Quisque mollis
            purus id nibh dapibus, id venenatis est dignissim. Nam a libero eu
            dui elementum aliquet vel ut ipsum. Interdum et malesuada fames ac
            ante ipsum primis in faucibus.
          </h5>
        </div>

        {/* Team Members */}
        <div className="float-right mr-2 mb-2 w-auto">
          <h5 className="font-bold">Members:</h5>
          <div className="flex flex-wrap md:ml-10 max-lg:justify-between">
            <img
              src={avatar}
              alt="Avatar"
              className="border-2 border-black rounded-[50%] mr-1 ml-1 mt-1 mb-1"
              width="50px"
            />
            <img
              src={avatar}
              alt="Avatar"
              className="border-2 border-black rounded-[50%] mr-1 ml-1 mt-1 mb-1"
              width="50px"
            />
            <img
              src={avatar}
              alt="Avatar"
              className="border-2 border-black rounded-[50%] mr-1 ml-1 mt-1 mb-1"
              width="50px"
            />
            <img
              src={avatar}
              alt="Avatar"
              className="border-2 border-black rounded-[50%] mr-1 ml-1 mt-1 mb-1"
              width="50px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileActivityCard
