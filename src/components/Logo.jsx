import rectImage from '@/images/rect.png'
import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center">
      <Image
        width={30}
        height={30}
        src={rectImage} />
      <h1 className="ml-2 hidden lg:block text-md font-bold">Rect Language</h1>
    </div>
  )
}
