'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Carousel } from '../src/components/Carousel'
import { Card } from '../src/components/ui/card'
import { ExternalLinkIcon } from 'lucide-react'


const PersonStandingIcon = () => import('lucide-react').then((mod) => mod.PersonStandingIcon)
const GitCommitIcon = () => import('lucide-react').then((mod) => mod.GitCommitIcon)

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
    { component: "/images/lintulahdenaukio.png", route: '/three/lintulahdenaukio' },
    { component: "/images/trash.png", route: '/three/trash' },
    { component: "/images/puzzle.png", route: '/three/puzzle' },
    { component: "/images/snowman.png", route: '/three/snowman' },
    { component: "/images/afx.png", route: '/three/afx' },
    { component: "/images/erzbrau.png", route: '/three/erzbrau' },
  ]
  const carouselItemsLiveCoding = [
    { component: "/images/hydra.png", route: 'https://hydra.ojack.xyz/?code=JTJGJTJGQWxlamFuZHJvJTNGJTBBYnBtJTIwJTNEJTIwMTIwJTBBJTBBczAuaW5pdENhbSgpJTBBczEuaW5pdFNjcmVlbigpJTBBc3JjKHMxKS5vdXQobzApJTBBc3JjKHMwKS5vdXQobzIpJTBBJTBBc3JjKG8wKS5tb2R1bGF0ZShub2lzZSgzJTJDMSklMkMlMjAwLjIpJTBBJTIwJTIwLnNoaWZ0KDAuOSUyQzAuMSUyQzAuMyklMEElMjAlMjAub3V0KG8xKSUwQXNyYyhvMCkubW9kdWxhdGUobzElMkMlMjAwLjIpLm91dChvMiklMEFzcmMobzIpLm1vZHVsYXRlKG8yJTJDJTIwMC4yKS5rYWxlaWQoNSkub3V0KG8zKSUwQXZvcm9ub2koNCUyQzAuNSUyQzAuNCklMEElMjAlMjAucGl4ZWxhdGUoMjAlMkMyMCklMEElMjAlMjAubW9kdWxhdGUobzIlMkMlMjAwLjEpJTBBJTIwJTIwLnNoaWZ0KDAuMSUyQzAuNCUyQzAuMyklMEElMjAlMjAub3V0KG8xKSUwQXJlbmRlcihvMiklMEElMEElMkYlMkZzcmMoczApLm1vZHVsYXRlKG8zKS5vdXQoKQ%3D%3D', external: true },
    { component: "/images/hydra2.png", route: 'https://hydra.ojack.xyz/?code=YnBtJTIwJTNEJTIwMTIwJTBBJTBBczAuaW5pdENhbSgpJTBBJTBBYS5zZXRCaW5zKDMpJTBBYS5zZXRTbW9vdGgoMC44KSUwQWEuc2V0U2NhbGUoOCklMEElMEElMkYlMkYlMjAtLS0tJTIwcDUlM0ElMjBzcGFyc2UlMkMlMjBzbG93JTJDJTIwYW5pbWF0ZWQlMjBkb29kbGVzJTIwJTJCJTIwT1QlMjBwaHJhc2VzJTIwLS0tLSUwQXA1JTIwJTNEJTIwbmV3JTIwUDUoKSUwQXA1LmhpZGUoKSUwQXMyLmluaXQoJTdCJTIwc3JjJTNBJTIwcDUuY2FudmFzJTIwJTdEKSUwQSUwQWxldCUyMG90UGhyYXNlcyUyMCUzRCUyMCU1QiUwQSUyMCUyMCUyMkZVTkMlMjAlMkIlMjBCQU5LJTIyJTJDJTIwJTIyUFROJTIwMDElMjIlMkMlMjAlMjJUUkslMjA1JTIyJTJDJTIwJTIyU0NFTkUlMjBBJTIyJTJDJTIwJTIyU0NFTkUlMjBCJTIyJTJDJTBBJTIwJTIwJTIyUkVDJTIwQUIlMjIlMkMlMjAlMjJGWDElM0ElMjBGSUxURVIlMjIlMkMlMjAlMjJGWDIlM0ElMjBERUxBWSUyMiUyQyUyMCUyMkxGTyUyMiUyQyUyMCUyMlNMSUNFJTIwMTIlMjIlMkMlMEElMjAlMjAlMjJGTEVYJTIyJTJDJTIwJTIyQ1JPU1NGQURFUiUyMiUyQyUyMCUyMllFUyUyRlNBVkUlMjIlMkMlMjAlMjJURU1QTyUyMDEyMC4wJTIyJTBBJTVEJTBBJTBBbGV0JTIwYWN0b3JzJTIwJTNEJTIwJTVCJTVEJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwdGhpbmdzJTIwY3VycmVudGx5JTIwYW5pbWF0aW5nJTBBbGV0JTIwbmV4dEV2ZW50JTIwJTNEJTIwMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMHdoZW4lMjB0aGUlMjBuZXh0JTIwb25lJTIwc3Bhd25zJTIwKG1zKSUwQSUwQXA1LnRleHRGb250KCUyMm1vbm9zcGFjZSUyMiklMEElMEFwNS5kcmF3JTIwJTNEJTIwKCklMjAlM0QlM0UlMjAlN0IlMEElMjAlMjBwNS5iYWNrZ3JvdW5kKDAlMkMlMjAwJTJDJTIwMCUyQyUyMDYpJTIwJTIwJTIwJTJGJTJGJTIwdmVyeSUyMHNsb3clMjBmYWRlJTIwJUUyJTgwJTk0JTIwdGhpbmdzJTIwaGFuZyUyMGFyb3VuZCUwQSUwQSUyMCUyMCUyRiUyRiUyMHNwYXduJTIwbGlrZSUyMGElMjBwZXJmb3JtZXIlMjBoaXR0aW5nJTIwdGhlJTIwT1QlM0ElMjBvbmUlMjBtb3ZlJTIwZXZlcnklMjAzJUUyJTgwJTkzNyUyMHNlY29uZHMlMEElMjAlMjBpZiUyMChwNS5taWxsaXMoKSUyMCUzRSUyMG5leHRFdmVudCklMjAlN0IlMEElMjAlMjAlMjAlMjBuZXh0RXZlbnQlMjAlM0QlMjBwNS5taWxsaXMoKSUyMCUyQiUyMHA1LnJhbmRvbSgzMDAwJTJDJTIwNzAwMCklMEElMjAlMjAlMjAlMjBsZXQlMjB4JTIwJTNEJTIwcDUucmFuZG9tKHA1LndpZHRoJTIwKiUyMDAuNyklMEElMjAlMjAlMjAlMjBsZXQlMjB5JTIwJTNEJTIwcDUucmFuZG9tKHA1LmhlaWdodCUyMColMjAwLjgpJTIwJTJCJTIwcDUuaGVpZ2h0JTIwKiUyMDAuMSUwQSUyMCUyMCUyMCUyMGlmJTIwKHA1LnJhbmRvbSgpJTIwJTNDJTIwMC40KSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGJpZyUyMHBocmFzZSUyQyUyMHR5cGVzJTIwaXRzZWxmJTIwb3V0JTBBJTIwJTIwJTIwJTIwJTIwJTIwYWN0b3JzLnB1c2goJTdCJTIwa2luZCUzQSUyMCUyMnRleHQlMjIlMkMlMjB4JTJDJTIweSUyQyUyMHQlM0ElMjAwJTJDJTIwbGlmZSUzQSUyMDMwMCUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHBocmFzZSUzQSUyMHA1LnJhbmRvbShvdFBocmFzZXMpJTJDJTIwc2l6ZSUzQSUyMHA1LnJhbmRvbSg3MCUyQyUyMDE0MCklMjAlN0QpJTBBJTIwJTIwJTIwJTIwJTdEJTIwZWxzZSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyRiUyRiUyMGRyYXdpbmclMjB0aGF0JTIwZHJhd3MlMjBpdHNlbGYlMjBpbiUyMHNsb3dseSUwQSUyMCUyMCUyMCUyMCUyMCUyMGFjdG9ycy5wdXNoKCU3QiUyMGtpbmQlM0ElMjBwNS5yYW5kb20oJTVCJTIyY2lyY2xlJTIyJTJDJTIwJTIybGluZSUyMiUyQyUyMCUyMnNjcmliYmxlJTIyJTVEKSUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHglMkMlMjB5JTJDJTIwdCUzQSUyMDAlMkMlMjBsaWZlJTNBJTIwMzYwJTJDJTIwc2l6ZSUzQSUyMHA1LnJhbmRvbSgxNTAlMkMlMjA0NTApJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcHRzJTNBJTIwQXJyYXkuZnJvbSglN0JsZW5ndGglM0ElMjAxNCU3RCUyQyUyMCgpJTIwJTNEJTNFJTIwJTVCcDUucmFuZG9tKC0yMDAlMkMlMjAyMDApJTJDJTIwcDUucmFuZG9tKC0yMDAlMkMlMjAyMDApJTVEKSUyMCU3RCklMEElMjAlMjAlMjAlMjAlN0QlMEElMjAlMjAlN0QlMEElMEElMjAlMjAlMkYlMkYlMjBhbmltYXRlJTIwZXZlcnl0aGluZyUwQSUyMCUyMHA1Lm5vRmlsbCgpJTBBJTIwJTIwcDUuc3Ryb2tlKDI1NSklMEElMjAlMjBmb3IlMjAobGV0JTIwZCUyMG9mJTIwYWN0b3JzKSUyMCU3QiUwQSUyMCUyMCUyMCUyMGQudCUyQiUyQiUwQSUyMCUyMCUyMCUyMGxldCUyMHAlMjAlM0QlMjBwNS5taW4oZC50JTIwJTJGJTIwMTIwJTJDJTIwMSklMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjAwJUUyJTg2JTkyMSUyMG92ZXIlMjB%2BMiUyMHNlY29uZHMlM0ElMjB0aGUlMjBkcmF3LWluJTBBJTIwJTIwJTIwJTIwbGV0JTIwYnJlYXRoZSUyMCUzRCUyMDElMjAlMkIlMjAwLjAzJTIwKiUyMHA1LnNpbihkLnQlMjAqJTIwMC4wMyklMjAlMjAlMjAlMkYlMkYlMjBzbG93JTIwaWRsZSUyMHdvYmJsZSUyMGFmdGVyJTBBJTBBJTIwJTIwJTIwJTIwaWYlMjAoZC5raW5kJTIwJTNEJTNEJTNEJTIwJTIydGV4dCUyMiklMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMkYlMkYlMjB0eXBlcyUyMG91dCUyMG9uZSUyMGNoYXJhY3RlciUyMGF0JTIwYSUyMHRpbWUlMEElMjAlMjAlMjAlMjAlMjAlMjBsZXQlMjBuJTIwJTNEJTIwcDUuZmxvb3IocC5wb3clMjAlM0YlMjAwJTIwJTNBJTIwMCklMjAlMkYlMkYlMjAobm9vcCUyMGd1YXJkKSUwQSUyMCUyMCUyMCUyMCUyMCUyMGxldCUyMGNoYXJzJTIwJTNEJTIwcDUuZmxvb3IocCUyMColMjBkLnBocmFzZS5sZW5ndGgpJTBBJTIwJTIwJTIwJTIwJTIwJTIwcDUudGV4dFNpemUoZC5zaXplKSUwQSUyMCUyMCUyMCUyMCUyMCUyMHA1Lm5vU3Ryb2tlKCklMEElMjAlMjAlMjAlMjAlMjAlMjBwNS5maWxsKDI1NSklMEElMjAlMjAlMjAlMjAlMjAlMjBwNS50ZXh0KGQucGhyYXNlLnNsaWNlKDAlMkMlMjBjaGFycyklMjAlMkIlMjAoZC50JTIwJTI1JTIwNDAlMjAlM0MlMjAyMCUyMCUzRiUyMCUyMl8lMjIlMjAlM0ElMjAlMjIlMjIpJTJDJTIwZC54JTJDJTIwZC55KSUwQSUyMCUyMCUyMCUyMCU3RCUyMGVsc2UlMjBpZiUyMChkLmtpbmQlMjAlM0QlM0QlM0QlMjAlMjJjaXJjbGUlMjIpJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwcDUuc3Ryb2tlV2VpZ2h0KDQpJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwYXJjJTIwc3dlZXBzJTIwYXJvdW5kJTIwdW50aWwlMjBpdCUyMGNsb3NlcyUyQyUyMHRoZW4lMjBicmVhdGhlcyUwQSUyMCUyMCUyMCUyMCUyMCUyMHA1LmFyYyhkLnglMkMlMjBkLnklMkMlMjBkLnNpemUlMjAqJTIwYnJlYXRoZSUyQyUyMGQuc2l6ZSUyMColMjBicmVhdGhlJTJDJTIwMCUyQyUyMHAlMjAqJTIwcDUuVFdPX1BJKSUwQSUyMCUyMCUyMCUyMCU3RCUyMGVsc2UlMjBpZiUyMChkLmtpbmQlMjAlM0QlM0QlM0QlMjAlMjJsaW5lJTIyKSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMHA1LnN0cm9rZVdlaWdodCg1KSUwQSUyMCUyMCUyMCUyMCUyMCUyMGxldCUyMCU1QmR4JTJDJTIwZHklNUQlMjAlM0QlMjBkLnB0cyU1QjAlNUQlMEElMjAlMjAlMjAlMjAlMjAlMjBwNS5saW5lKGQueCUyQyUyMGQueSUyQyUyMGQueCUyMCUyQiUyMGR4JTIwKiUyMDIlMjAqJTIwcCUyQyUyMGQueSUyMCUyQiUyMGR5JTIwKiUyMDIlMjAqJTIwcCklMEElMjAlMjAlMjAlMjAlN0QlMjBlbHNlJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTJGJTJGJTIwc2NyaWJibGUlMjByZXZlYWxzJTIwcG9pbnQlMjBieSUyMHBvaW50JTBBJTIwJTIwJTIwJTIwJTIwJTIwcDUuc3Ryb2tlV2VpZ2h0KDMpJTBBJTIwJTIwJTIwJTIwJTIwJTIwcDUuYmVnaW5TaGFwZSgpJTBBJTIwJTIwJTIwJTIwJTIwJTIwbGV0JTIwbiUyMCUzRCUyMDIlMjAlMkIlMjBwNS5mbG9vcihwJTIwKiUyMChkLnB0cy5sZW5ndGglMjAtJTIwMikpJTBBJTIwJTIwJTIwJTIwJTIwJTIwZm9yJTIwKGxldCUyMGklMjAlM0QlMjAwJTNCJTIwaSUyMCUzQyUyMG4lM0IlMjBpJTJCJTJCKSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHA1LnZlcnRleChkLnglMjAlMkIlMjBkLnB0cyU1QmklNUQlNUIwJTVEJTIwKiUyMGJyZWF0aGUlMkMlMjBkLnklMjAlMkIlMjBkLnB0cyU1QmklNUQlNUIxJTVEJTIwKiUyMGJyZWF0aGUpJTBBJTIwJTIwJTIwJTIwJTIwJTIwcDUuZW5kU2hhcGUoKSUwQSUyMCUyMCUyMCUyMCU3RCUwQSUyMCUyMCU3RCUwQSUyMCUyMGFjdG9ycyUyMCUzRCUyMGFjdG9ycy5maWx0ZXIoZCUyMCUzRCUzRSUyMGQudCUyMCUzQyUyMGQubGlmZSklMjAlMjAlMjAlMkYlMkYlMjByZXRpcmUlMjBvbGQlMjBvbmVzJTBBJTdEJTBBJTBBJTJGJTJGJTIwLS0tLSUyMGRyYXdpbmdzJTIwJTJCJTIwdGV4dCUyQyUyMGluZHVzdHJpYWxpemVkJTIwb24lMjBvMSUyMC0tLS0lMEFzcmMoczIpJTBBJTIwJTIwLm1vZHVsYXRlKG5vaXNlKDglMkMlMjAwLjUpJTJDJTIwKCklMjAlM0QlM0UlMjBhLmZmdCU1QjElNUQlMjAqJTIwMC4xNSklMEElMjAlMjAubW9kdWxhdGVTY3JvbGxYKG5vaXNlKDMwJTJDJTIwMSklMkMlMjAoKSUyMCUzRCUzRSUyMGEuZmZ0JTVCMyU1RCUyMColMjAwLjA1KSUwQSUyMCUyMC5tb2R1bGF0ZVBpeGVsYXRlKG5vaXNlKDEwJTJDJTIwMC41KSUyQyUyMCgpJTIwJTNEJTNFJTIwYS5mZnQlNUIwJTVEJTIwKiUyMDE1MCUyQyUyMDE1KSUwQSUyMCUyMC50aHJlc2goMC40JTJDJTIwMC4xKSUwQSUyMCUyMC5hZGQoc3JjKHMyKS5zY3JvbGxYKDAuMDA0KS5jb2xvcigxJTJDJTIwMCUyQyUyMDApJTJDJTIwMC41KSUwQSUyMCUyMC5sdW1hKDAuMSklMEElMjAlMjAub3V0KG8xKSUwQSUwQSUyRiUyRiUyMC0tLS0lMjBtYWluJTIwLS0tLSUwQXNyYyhzMCklMEElMjAlMjAubW9kdWxhdGUobm9pc2UoMyUyQyUyMDAuMyklMkMlMjAoKSUyMCUzRCUzRSUyMDAuMDUlMjAlMkIlMjBhLmZmdCU1QjAlNUQlMjAqJTIwMC4zKSUwQSUyMCUyMC5tb2R1bGF0ZVBpeGVsYXRlKG5vaXNlKDUlMkMlMjAwLjMpJTJDJTIwKCklMjAlM0QlM0UlMjAyMCUyMCUyQiUyMGEuZmZ0JTVCMyU1RCUyMColMjAyMDAlMkMlMjAzMCklMEElMjAlMjAubGF5ZXIoc3JjKG8xKSklMEElMjAlMjAub3V0KG8wKSUwQSUwQXJlbmRlcihvMCk%3D', external: true },
  ]
  const carouselItemsMaxMSP = [
    { component: "/images/audiovisualizer.png", route: 'https://alejandro-p5-rnbo.vercel.app/sketches/mouse-theremin', external: true },
    { component: "/images/ambient-generator.png", route: 'https://alejandro-p5-rnbo.vercel.app/sketches/ambient-generator', external: true },
    { component: "/images/piano.png", route: 'https://alejandro-p5-rnbo.vercel.app/sketches/piano-sketch', external: true },
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

        <Card className="my-6 w-full p-6">
          <h1 className="mb-1 text-xl font-bold sm:text-3xl">Three.js + RealityScan</h1>
          <p className="mb-6 text-sm font-light sm:text-xl">A tiny collection of 3D models and experiments with Three.js and RealityScan. It may take a few seconds to load each model.</p>
          <Carousel items={carouselItemsThree} />
        </Card>


        <Card className="my-6 w-full p-6">
          <h1 className="mb-1 text-xl font-bold sm:text-3xl">MaxMSP + P5.js + RNBO</h1>
          <p className="mb-1 text-sm font-light sm:text-xl">A couple of experiments with P5.js and RNBO. MaxMSP on the web.</p>
          <a href="https://alejandro-p5-rnbo.vercel.app/" className='mb-6 flex items-center gap-2 text-gray-500 hover:text-gray-800'>Visit my p5 + rnbo sketches website <ExternalLinkIcon /></a>
          <Carousel items={carouselItemsMaxMSP} />
        </Card>

        <Card className="my-6 w-full p-6">
          <h1 className="mb-1 text-xl font-bold sm:text-3xl">Live Coding</h1>
          <p className="mb-6 text-sm font-light sm:text-xl">A couple of scripts for Hydra Video Synth. some scripts may require access to the camera or to another window with videos to work.</p>
          <Carousel items={carouselItemsLiveCoding} />
        </Card>


      </div>
      <footer className='flex w-full flex-col items-center justify-center p-12 text-center'>
        <p className='text-gray-600'>Made by<a href="https://alejandro-prtfl.vercel.app/" className='text-gray-500 hover:text-gray-800'> Alejandro?</a></p>

      </footer>
    </>
  )
}
