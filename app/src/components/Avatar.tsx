/**
 * * Library imports
 */
import { useMemo } from 'react'
// ? https://www.npmjs.com/package/@dicebear/avatars
// ? https://www.dicebear.com/how-to-use/js-library
import { createAvatar } from '@dicebear/core'
import { notionists } from '@dicebear/collection'

interface AvatarProps {
  width: number
  seed: string
  alt?: string
  className?: string
}

function Avatar({ width, seed, alt = 'Avatar', className = '' }: AvatarProps) {
  // Generates avatar
  const avatar = useMemo(() => {
    return createAvatar(notionists, {
      seed: seed,
      backgroundColor: ['c0aede'],
      size: 256,
    }).toDataUriSync()
  }, [])

  return (
    <img
      src={avatar}
      alt={alt}
      className={`border-2 border-black rounded-[50%] ${className}`}
      width={width}
    />
  )
}

export default Avatar
