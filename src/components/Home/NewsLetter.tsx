const NewsLetter = () => {
  return (
    <section className="section">
      <div className="container grid grid-cols-[.5fr] justify-center">
        <h2 className="text-center text-4xl mb-12">Our Newsletter</h2>
        <p className="px-12 py-0 text-center mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt,
          officia!
        </p>
        <form
          action=""
          className="bg-white p-4 flex justify-between rounded-xl"
        >
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-[70%] px-2 py-0 bg-none text-gray-900 placeholder:text-gray-600"
          />
          <button className="inline-block bg-red-600 text-white px-7 py-4 rounded-[.5rem] font-medium [transition:.3s] hover:bg-red-500">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default NewsLetter
