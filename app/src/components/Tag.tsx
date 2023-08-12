interface TagProps {
  text: string
}

function Tag({ text }: TagProps) {
  return (
    <li className="bg-gray-600 pr-3 pl-3 m-1 text-white rounded-lg text-center">
      {text}
    </li>
  )
}

export default Tag
