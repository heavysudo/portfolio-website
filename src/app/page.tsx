export default function Home() {
  return (
    <div className='flex w-full h-full pb-10 pr-4 pl-64'>
      <div className="flex flex-row w-full h-full space-x-2">
        <section className="bg-slate-800 left-column h-full w-1/2 p-8 rounded-lg">
          <h1>Latest Blogs:</h1>
          <div className="h-full">
            Sample Post here.
          </div>
        </section>
        <section className="right-column h-full w-1/2">
          <div className="recent-photos">
            <h1>Recent Photos:</h1>
            <div>
              Sample Photos here.
            </div>
          </div>
          <div className="recent-projects">
            <h1>Recent Projects:</h1>
            <div>
              Sample Projects here.
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
