import Header from '@/components/dom/layout/Header'
import { useState } from 'react'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'

export default function Page(props) {
  const [page, setPage] = useState<string>('index')

  return (
    <>
      <div className=' w-full h-screen flex justify-center items-center flex-col '>
        <button
          className=' text-white p-2 text-3xl hover:text-gray-400'
          onClick={() => {
            setPage('home')
          }}>
          {props.title}
        </button>
        <div className='flex flex-row gap-4'>
          <button
            onClick={() => {
              window.open('https://www.instagram.com/opensource_lab/')
            }}
            className='text-3xl hover:text-gray-400 '>
            <AiOutlineInstagram />
          </button>
          <button
            onClick={() => {
              window.location.href = 'mailto:hi.oslab@gmail.com'
            }}
            className='text-3xl hover:text-gray-400 '>
            <AiOutlineMail />
          </button>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'ABT' } }
}
