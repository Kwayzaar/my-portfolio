import React from 'react'

export default function Home() {
  return (
    <main>
      {/* <img 
        src={}
        alt=""
        className="absolute object-cover w-full h-full"
      /> */}
      <section 
        className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8" 
      >
        <h1 
          className="text-6xl text-green-100 font-bold leading-non lg:leading-snug home-name"
        >
          Hi. I'm Eric
        </h1>
      </section>
    </main>
  )
}