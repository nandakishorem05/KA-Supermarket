'use client'
import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, options)

    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    targets.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
