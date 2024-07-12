export default function Footer() {
  const items = [
    '985-718-8538',
    <a href="mailto:kevin.e.roark@gmail.com">kevin.e.roark@gmail.com</a>,
    <a href="https://www.instagram.com/kevin_tilt">instagram.com/kevin_tilt</a>,
    'Practicing Serenity These Days © 2024',
  ]

  return (
    <footer className="w-full py-6 px-4 font-bold text-sm tracking-wide">
      <ul className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-1 md:gap-0">
        {items.map((item, idx) => (
          <li
            key={idx}
            className={idx < items.length - 1 ? `md:after:inline-block md:after:mx-2 md:after:content-['•']` : ''}
          >
            {item}
          </li>
        ))}
      </ul>
    </footer>
  )
}
