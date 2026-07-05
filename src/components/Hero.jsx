import React from 'react'
import './Hero.css'

const navLinksLeft = [
  { label: '关于我', href: '#about' },
  { label: '项目经历', href: '#projects' },
]

const navLinksRight = [
  { label: '核心优势', href: '#strengths' },
  { label: '联系方式', href: '#contact' },
]

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Video Background */}
      <div className="hero-video-wrapper">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      {/* Decorative Elements */}
      <div className="hero-deco-line hero-deco-line--left" />
      <div className="hero-deco-line hero-deco-line--right" />
      <div className="hero-deco-glow" />

      {/* Navigation - Centered Logo, Links Split */}
      <nav className="hero-nav">
        <div className="hero-nav-inner container">
          <ul className="hero-nav-left">
            {navLinksLeft.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">{link.label}</a>
              </li>
            ))}
          </ul>

          <a href="#hero" className="hero-logo-center">
            <span className="logo-circle">
              <span className="logo-initial">W</span>
            </span>
          </a>

          <ul className="hero-nav-right">
            {navLinksRight.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Corner Badge */}
      <div className="hero-badge">
        <span className="hero-badge-ring" />
        <span className="hero-badge-text">Big Data</span>
      </div>

      {/* Hero Content - Center Aligned */}
      <div className="hero-content">
        <p className="hero-tagline">WU QIYANG · PORTFOLIO · 2026</p>
        <h1 className="hero-title">
          <span className="hero-title-line">数据驱动</span>
          <span className="hero-title-line hero-title-accent">创造价值</span>
        </h1>
        <p className="hero-subtitle">
          大数据管理与应用 · 教务统筹 · 项目协调
        </p>
        <a href="#projects" className="hero-cta">
          <span>探索作品</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="hero-bottom">
        <div className="hero-bottom-left">
          <span className="hero-scroll-text">Scroll Down</span>
          <svg className="hero-scroll-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5V19M5 12L12 19L19 12"/>
          </svg>
        </div>
        <div className="hero-bottom-center">
          <span>Big Data Management & Application</span>
        </div>
        <div className="hero-bottom-right">
          <a href="#contact" className="hero-contact-link">联系咨询</a>
        </div>
      </div>
    </section>
  )
}
