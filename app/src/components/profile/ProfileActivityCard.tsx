/**
 * * Component imports
 */
import Tag from '../Tag'
import Avatar from '../Avatar'

function ProfileActivityCard() {
  return (
    <div className="w-[95%] bg-white rounded-xl h-auto border-black border-2 m-2">
      <div className="m-2">
        {/* Team Name */}
        <h4 className="font-bold mb-4">Team name: Something</h4>

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

        <div className="flex justify-between flex-wrap mt-4">
          {/* Team Tags */}
          <div className="loat-left">
            <h5 className="font-bold">Tags:</h5>
            <ul className="flex flex-wrap -mx-4 mt-2">
              <Tag text="DevOps" />
              <Tag text="Frontend" />
              <Tag text="Backend" />
              <Tag text="Databases" />
              <Tag text="IoT" />
              <Tag text="3D modeling" />
            </ul>
          </div>

          {/* Team Members */}
          <div className="float-right mr-2 mb-2 w-auto">
            <h5 className="font-bold">Members:</h5>
            <div className="flex flex-wrap md:ml-10 max-lg:justify-between">
              <Avatar
                seed="dasvgheh"
                width={50}
                className="mr-1 ml-1 mt-1 mb-1"
              />
              <Avatar
                seed="fsdfsdfsdhk"
                width={50}
                className="mr-1 ml-1 mt-1 mb-1"
              />
              <Avatar seed="dsgjh" width={50} className="mr-1 ml-1 mt-1 mb-1" />
              <Avatar
                seed="fsdhgyrr"
                width={50}
                className="mr-1 ml-1 mt-1 mb-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileActivityCard
