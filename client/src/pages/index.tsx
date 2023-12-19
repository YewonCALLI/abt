import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Onboarding from './Onboarding'
import Home from './Home'

export default function Page(props) {
  const [page, setPage] = useState<string>('index')
  const router = useRouter()

  return (
    <>
      <Onboarding />
      <Home />
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'ABT' } }
}
