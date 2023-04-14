import IdentificationIcon from '@/icons/Identification'

export default function Biography() {
  return (
    <section id='biography' className='flex flex-col gap-8 py-8'>
      <h2 className='text-primary text-4xl font-extrabold shadow-lg'>
        Biografía
      </h2>
      <ul>
        <li className='bg-gray w-full rounded-xl border-[#222222] border-[1px] flex justify-center gap-4 p-4'>
          <div>
            <IdentificationIcon className='stroke-white w-12 h-12' />
          </div>
          <div className='flex flex-1 flex-col justify-center items-start gap-2'>
            <p className='text-primary text-4xl font-bold'>
              Lorem ipsum dolor sit amet consectetur
            </p>
            <p className='text-white text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              vero quidem eveniet laboriosam, voluptas nam numquam sunt quasi
              quo quos aut similique dolores quisquam perferendis nulla
              reprehenderit itaque dignissimos ullam.
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}
