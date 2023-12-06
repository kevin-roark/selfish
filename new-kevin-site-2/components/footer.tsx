
export default function Footer() {
  const items = [
    '985-718-8538',
    <a href="mailto:kevin.e.roark@gmail.com">kevin.e.roark@gmail.com</a>,
    <a href="https://www.instagram.com/kevxxoo">https://www.instagram.com/kevxxoo</a>,
    'Practicing Serenity These Days © 2023',
  ]

  return (
    <footer className="w-full py-6 font-serif font-bold border-t border-gray-50">
      <ul className="flex justify-center content-center flex-wrap">
        {items.map((item, idx) => (
          <li key={idx} className={(idx < items.length - 1 ? `after:inline-block after:mx-1 after:content-['•']`: '')}>{item}</li>
        ))}
      </ul>
    </footer>
  ) 
}