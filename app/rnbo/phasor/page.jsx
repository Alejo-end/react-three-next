'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowBigLeftIcon } from 'lucide-react'

const AudioVisualizer = dynamic(() => import('@/components/canvas/AudioVisualizer').then((mod) => mod.AudioVisualizer), { ssr: false })

export default function Page() {
    return (
        <>
            <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>

                <Link href='/' className='cursor-pointer'>
                    <ArrowBigLeftIcon className='size-8 cursor-pointer' />
                </Link>
                <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
                    <p className='w-full uppercase'>a very simple RNBO patch using phasors to generate sound depending on the frequence.</p>
                    <h1 className='my-4 text-5xl font-bold leading-tight'>PhasorRNBO</h1>
                    <p className='mb-8 text-2xl leading-normal'>The mouse position alters frequence and delay.</p>
                </div>

                <AudioVisualizer />
            </div>
        </>
    )
}

