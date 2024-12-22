'use client'

import { createDevice, Device, Parameter } from '@rnbo/js'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import p5 from 'p5'
import { createRoot, Root } from 'react-dom/client'
import { Volume2, VolumeX } from 'lucide-react'
import { Button } from '@/components/ui/button'

type AudioVisualizerProps = {
    children?: React.ReactNode
}

const AudioVisualizer = ({ children }: AudioVisualizerProps) => {
    const sketchRef = useRef<HTMLDivElement>(null)
    const childrenContainerRef = useRef<HTMLDivElement>(null)
    const audioContextRef = useRef<AudioContext | null>(null)
    const deviceRef = useRef<Device | null>(null)
    const xParamRef = useRef<Parameter | null>(null)
    const yParamRef = useRef<Parameter | null>(null)
    const gainParamRef = useRef<Parameter | null>(null)
    const reactRootRef = useRef<Root | null>(null)
    const p5InstanceRef = useRef<p5 | null>(null)

    const [isMuted, setIsMuted] = useState(false)
    const [gainValue, setGainValue] = useState<number>()

    const createSketch = useCallback((p: p5) => {
        if (typeof window === 'undefined') return

        const loadRNBO = async (audioContext: AudioContext) => {
            await audioContext.resume()

            const rawPatcher = await fetch('/patches/patch.export.json')
            const patcher = await rawPatcher.json()

            const device = await createDevice({ context: audioContext, patcher })
            deviceRef.current = device

            device.node.connect(audioContext.destination)

            xParamRef.current = device.parametersById.get('x')
            yParamRef.current = device.parametersById.get('y')

            const gainParam = device.parametersById.get('gain')
            gainParamRef.current = gainParam

            if (gainParam) {
                setGainValue(gainParam.normalizedValue)
            }
        }

        let xValue = 0
        let yValue = 0
        let childrenContainer: HTMLDivElement

        p.setup = () => {
            const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
            canvas.parent(sketchRef.current!)

            p.noCursor()
            p.colorMode(p.HSB, 360, 100, 100)
            p.rectMode(p.CENTER)
            p.noStroke()

            childrenContainer = document.createElement('div')
            childrenContainer.style.position = 'absolute'
            childrenContainer.style.top = '0'
            childrenContainer.style.left = '0'
            childrenContainer.style.width = '100%'
            childrenContainer.style.height = '100%'
            childrenContainer.style.pointerEvents = 'none'
            sketchRef.current?.appendChild(childrenContainer)

            if (childrenContainerRef.current && children) {
                if (!reactRootRef.current) {
                    reactRootRef.current = createRoot(childrenContainer)
                }
                reactRootRef.current.render(children)
            }

            audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
            loadRNBO(audioContextRef.current)

            p.mousePressed = startAudioContext
        }

        p.draw = () => {
            p.background(p.mouseY / 2, 100, 100)
            p.fill(360 - p.mouseY / 2, 100, 100)
            const size = Math.min(p.width, p.height) * 0.8
            p.circle(p.width / 2, p.height / 2, p.map(p.mouseX, 0, p.width, 0, size))

            if (childrenContainer) {
                const containerSize = Math.min(200, p.width * 0.3, p.height * 0.3)
                childrenContainer.style.transform = `translate(${p.width / 2 - containerSize / 2}px, ${p.height / 2 - containerSize / 2}px)`
                childrenContainer.style.width = `${containerSize}px`
                childrenContainer.style.height = `${containerSize}px`
            }

            yValue = p.map(p.mouseY, 0, p.height, 0, 1)
            xValue = p.map(p.mouseX, 0, p.width, 0, 1)

            if (yParamRef.current) {
                yParamRef.current.normalizedValue = yValue
            }
            if (xParamRef.current) {
                xParamRef.current.normalizedValue = xValue
            }
        }

        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight)
        }

        return p
    }, [children])

    const startAudioContext = () => {
        const audioContext = audioContextRef.current
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume()
        }
    }

    const toggleMute = () => {
        const newMutedState = !isMuted
        setIsMuted(newMutedState)

        if (gainParamRef.current && gainValue !== undefined) {
            gainParamRef.current.normalizedValue = newMutedState ? 0 : gainValue
        }
    }

    useEffect(() => {
        p5InstanceRef.current = new p5(createSketch, sketchRef.current!)

        return () => {
            if (reactRootRef.current) {
                reactRootRef.current.unmount()
                reactRootRef.current = null
            }

            if (p5InstanceRef.current) {
                p5InstanceRef.current.remove()
                p5InstanceRef.current = null
            }

            if (audioContextRef.current) {
                audioContextRef.current.close()
            }
        }
    }, [createSketch])

    useEffect(() => {
        if (reactRootRef.current && children) {
            reactRootRef.current.render(children)
        }
    }, [children])

    return (
        <div className="relative w-full h-screen">
            <div ref={sketchRef} className="absolute inset-0" />
            <div
                ref={childrenContainerRef}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
            <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                <div className="flex items-center gap-4 rounded-md bg-black/50 p-2">
                    <Button onClick={toggleMute} variant="ghost" size="icon" aria-label={isMuted ? "Unmute" : "Mute"}>
                        {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AudioVisualizer

