export const metadata = {
  title: 'Contact',
  description: 'Kevin Roark Contact Info',
}

export default function ContactPage() {
  return (
    <div className="flex h-[calc(100vh-140px)] items-center justify-center md:h-[calc(100vh-72px)]">
      <div className="text-2xl tracking-wide md:text-6xl [&>p]:mb-8 [&_a]:no-underline">
        <p>985-718-8538</p>
        <p>
          <a href="mailto:kevin.e.roark@gmail.com">kevin.e.roark@gmail.com</a>
        </p>
        <p>
          <a href="https://www.instagram.com/kevin_tilt">instagram.com/kevin_tilt</a>
        </p>
      </div>
    </div>
  )
}
