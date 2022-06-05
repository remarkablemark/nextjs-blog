import Image from 'next/image'
import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>

      <Image
        src="/images/profile.jpeg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </>
  )
}
