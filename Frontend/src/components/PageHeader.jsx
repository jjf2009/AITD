const PageHeader = ({ title, description }) => {
  return (
    <div className="bg-green-600 text-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-green-100">{description}</p>
      </div>
    </div>
  )
}

export default PageHeader
