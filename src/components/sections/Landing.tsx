import Image from 'next/image'

export default function Landing() {
  return (
    <section className='break-words text-white mx-auto max-w-prose md:px-2 min-h-screen'>
      <div className='py-16 flex items-center justify-center flex-col text-cnter gap-y-8'>
        <ul>
          <li className='min-h-screen'>
            <article id='alvaro' className='relative'>
              <Image
                className='relative object-contain drop-shadow-[5px_5px_100px_rgba(255,255,255,.2)] select-none grayscale'
                alt='Fotografía de Álvaro'
                src='/alvaro.png'
                height={600}
                width={800}
              />
              <h3 className='select-none relative bottom-48 [text-shadow:0_0_20px_black] uppercase text-primary leading-[.8em] text-6xl md:leading-[.8em] md:text-9xl -rotate-[10deg] italic font-black text-center`'>
                Alvaro Vazquez
              </h3>
              <p className='text-5xl text-white text-center relative bottom-40 -rotate-[10deg] italic uppercase'>
                Percussion Live
              </p>
            </article>
          </li>
        </ul>
      </div>
    </section>
  )
}
