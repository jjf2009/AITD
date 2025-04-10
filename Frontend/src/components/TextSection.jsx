export default function TextSection({ heading, text }) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{heading}</h2>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
  )
}
