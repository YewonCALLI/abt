import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SplashScreen from './SplashScreen'
import HomeScreen from './HomeScreen'

export default function Page(props) {
  const [page, setPage] = useState<string>('index')
  const router = useRouter()

  return (
    <>
      <SplashScreen />
      <HomeScreen />
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'ABT' } }
}
