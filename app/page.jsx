'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Carousel } from '../src/components/Carousel'
import { Card } from '../src/components/ui/card'

const Logo = dynamic(() => import('@/components/Examples').then((mod) => mod.Logo), { ssr: false })
const View = dynamic(() => import('@/components/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  const carouselItemsThree = [
    { component: "/images/afx.png", route: '/three/afx' },
    { component: "/images/trash.png", route: '/three/trash' },
    { component: "/images/erzbrau.png", route: 'three/erzbrau' },
  ]
  const carouselItemsP5 = [
    { component: "/images/piano.png", route: '/p5/piano' },
    { component: "/images/hydra.png", route: 'https://hydra.ojack.xyz/?code=JTJGJTJGQWxlamFuZHJvJTNGJTBBYnBtJTIwJTNEJTIwMTIwJTBBJTBBczAuaW5pdENhbSgpJTBBczEuaW5pdFNjcmVlbigpJTBBc3JjKHMxKS5vdXQobzApJTBBc3JjKHMwKS5vdXQobzIpJTBBJTBBc3JjKG8wKS5tb2R1bGF0ZShub2lzZSgzJTJDMSklMkMlMjAwLjIpJTBBJTIwJTIwLnNoaWZ0KDAuOSUyQzAuMSUyQzAuMyklMEElMjAlMjAub3V0KG8xKSUwQXNyYyhvMCkubW9kdWxhdGUobzElMkMlMjAwLjIpLm91dChvMiklMEFzcmMobzIpLm1vZHVsYXRlKG8yJTJDJTIwMC4yKS5rYWxlaWQoNSkub3V0KG8zKSUwQXZvcm9ub2koNCUyQzAuNSUyQzAuNCklMEElMjAlMjAucGl4ZWxhdGUoMjAlMkMyMCklMEElMjAlMjAubW9kdWxhdGUobzIlMkMlMjAwLjEpJTBBJTIwJTIwLnNoaWZ0KDAuMSUyQzAuNCUyQzAuMyklMEElMjAlMjAub3V0KG8xKSUwQXJlbmRlcihvMiklMEElMEElMkYlMkZzcmMoczApLm1vZHVsYXRlKG8zKS5vdXQoKQ%3D%3D', external: true },
  ]
  const carouselItemsMaxMSP = [
    { component: "/images/audiovisualizer.png", route: '/rnbo/phasor' },
    { component: "/images/idm5r.png", route: '/rnbo/trash' },
  ]
  return (
    <>
      <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
        {/* jumbo */}
        <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
          <p className='w-full uppercase'>Hey there!</p>
          <h1 className='my-4 text-5xl font-bold leading-tight'>Welcome to Alejandro? Portfolio</h1>
          <p className='mb-8 text-2xl leading-normal'>A small website for hobbies, art and sound experimentation.</p>
        </div>

        <div className='w-full text-center md:w-3/5'>
          <View className='flex h-96 w-full flex-col items-center justify-center'>
            <Suspense fallback={null}>
              <Logo route='/blob' scale={0.6} position={[0, 0, 0]} />
              <Common />
            </Suspense>
          </View>
        </div>
      </div>

      <div className='mx-auto flex w-full flex-col flex-wrap items-center p-12 md:flex-row  lg:w-4/5'>

        <Card className="my-6 w-full px-16 py-6">
          <h1 className="mb-8 text-xl font-bold sm:text-4xl">Three.js + RealityScan</h1>
          <Carousel items={carouselItemsThree} />
        </Card>

        <Card className="my-6 w-full px-16 py-6">
          <h1 className="mb-8 text-xl font-bold sm:text-4xl">P5.js + Hydra Video Synth</h1>
          <Carousel items={carouselItemsP5} />
        </Card>

        <Card className="my-6 w-full px-16 py-6">
          <h1 className="mb-8 text-xl font-bold sm:text-4xl">MaxMSP + RNBO</h1>
          <Carousel items={carouselItemsMaxMSP} />
        </Card>


      </div>
      <footer className='flex w-full flex-col items-center justify-center p-12 text-center'>
        <p className='text-gray-600'>Made by Alejandro?</p>
        <p className='text-gray-600'>2024</p>
      </footer>
    </>
  )
}
