import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'

const navLinks = [
  { label: '关于我', href: '#about' },
  { label: '项目经历', href: '#projects' },
  { label: '核心优势', href: '#strengths' },
  { label: '联系方式', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const sentinelRef = useRef(null)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // 当 sentinel 离开视口（向下滚过首屏）时，固定导航栏
        setScrolled(!entry.isIntersecting)
      },
      { threshold: 0, rootMargin: '0px' }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* 首屏内的导航由 Hero 组件渲染，sentinel 标记首屏底部 */}
      <div ref={sentinelRef} style={{ position: 'absolute', top: '100vh', left: 0, right: 0, height: 0, pointerEvents: 'none' }} />

      {/* 固定导航栏 - 仅在滚动过首屏后显示 */}
      <nav className={`navbar ${scrolled ? 'navbar--visible' : ''}`}>
        <div className="navbar-inner">
          <a href="#hero" className="navbar-logo">
            <span className="navbar-logo-mark">W</span>
            <span className="navbar-logo-text">Wu Qiyang</span>
          </a>

          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar-link">{link.label}</a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="navbar-cta">联系咨询</a>
        </div>
      </nav>
    </>
  )
}
