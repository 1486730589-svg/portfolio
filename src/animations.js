import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ============================================
   GSAP ScrollTrigger - 高端作品集动效系统（性能优化版）
   ============================================ */

const EASE = {
  smooth: 'power4.out',
  silk: 'power3.inOut',
  snap: 'power4.inOut',
  gentle: 'power2.out',
}

// ── Hero 首屏 Opening Animation ──
export function initHeroAnimation() {
  const hero = document.querySelector('.hero')
  if (!hero) return

  const tl = gsap.timeline({ delay: 0.3 })

  // 1. 遮罩揭开
  tl.fromTo(
    hero.querySelector('.hero-reveal-mask') || createRevealMask(hero),
    { yPercent: 0 },
    { yPercent: 100, duration: 1.2, ease: EASE.smooth }
  )

  // 2. 标题压缩归位
  const heroTitle = hero.querySelector('.hero-title')
  if (heroTitle) {
    gsap.set(heroTitle, { opacity: 0 })
    tl.fromTo(
      heroTitle,
      { scaleY: 0.6, y: 80, opacity: 0 },
      { scaleY: 1, y: 0, opacity: 1, duration: 1.4, ease: EASE.silk },
      0.6
    )
  }

  // 3. 副标题 clipReveal
  const heroSubtitle = hero.querySelector('.hero-subtitle')
  if (heroSubtitle) {
    gsap.set(heroSubtitle, { clipPath: 'inset(0 100% 0 0)' })
    tl.to(heroSubtitle, { clipPath: 'inset(0 0% 0 0)', duration: 1.0, ease: EASE.smooth }, 1.0)
  }

  // 4. CTA + Nav + Logo 批量进场（单个 timeline 减少 paint）
  const heroCTA = hero.querySelector('.hero-cta')
  const heroNavLinks = hero.querySelectorAll('.hero .nav-link')
  const heroLogo = hero.querySelector('.logo-circle')
  const heroBottom = hero.querySelector('.hero-bottom')

  if (heroCTA) gsap.set(heroCTA, { opacity: 0, y: 40 })
  if (heroNavLinks.length) gsap.set(heroNavLinks, { opacity: 0, y: -20 })
  if (heroLogo) gsap.set(heroLogo, { scale: 0, opacity: 0 })
  if (heroBottom) gsap.set(heroBottom, { opacity: 0 })

  tl.to([heroCTA, ...heroNavLinks], {
    opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: EASE.smooth
  }, 1.4)

  if (heroLogo) {
    tl.to(heroLogo, { scale: 1, opacity: 1, duration: 0.7, ease: EASE.smooth }, 0.9)
  }

  if (heroBottom) {
    tl.to(heroBottom, { opacity: 1, duration: 0.7, ease: EASE.smooth }, 1.8)
  }

  // 动画完成后清除遮罩 DOM
  tl.eventCallback('onComplete', () => {
    const mask = hero.querySelector('.hero-reveal-mask')
    if (mask) mask.remove()
  })
}

function createRevealMask(hero) {
  const mask = document.createElement('div')
  mask.className = 'hero-reveal-mask'
  mask.style.cssText = `
    position: absolute; inset: 0; z-index: 100;
    background: var(--bg-primary);
    pointer-events: none;
  `
  hero.style.position = 'relative'
  hero.prepend(mask)
  return mask
}

// ── 通用 Section 进场（合并为一个 batch） ──
export function initScrollAnimations() {
  // 每个 section 的标题组用单个 ScrollTrigger
  const sections = document.querySelectorAll('.about, .projects, .strengths, .footer')

  sections.forEach((section) => {
    const label = section.querySelector('.section-label')
    const title = section.querySelector('.section-title, .footer-title')
    const desc = section.querySelector('.section-desc, .footer-subtitle')

    // 收集所有要动画的元素
    const targets = []
    if (label) {
      gsap.set(label, { y: 60, opacity: 0, clipPath: 'inset(0 50% 0 50%)' })
      targets.push(label)
    }
    if (title) {
      gsap.set(title, { x: -80, opacity: 0 })
      targets.push(title)
    }
    if (desc) {
      gsap.set(desc, { y: 30, opacity: 0 })
      targets.push(desc)
    }

    if (targets.length) {
      // 用单个 ScrollTrigger + stagger 处理整个标题组
      gsap.to(targets, {
        y: 0,
        x: 0,
        opacity: 1,
        clipPath: 'inset(0 0% 0 0%)',
        duration: 1.2,
        stagger: 0.15,
        ease: EASE.smooth,
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    }
  })

  // ── 各区域卡片用 batch 处理（每个区域一个 ScrollTrigger） ──
  initAboutAnimations()
  initProjectsAnimations()
  initStrengthsAnimations()
  initFooterAnimations()
}

// ── About ──
function initAboutAnimations() {
  const about = document.querySelector('.about')
  if (!about) return

  const profileCard = about.querySelector('.about-profile-card')
  const infoItems = about.querySelectorAll('.info-item')
  const bios = about.querySelectorAll('.about-bio')
  const statCards = about.querySelectorAll('.stat-card')

  // ProfileCard
  if (profileCard) {
    gsap.set(profileCard, { x: -100, opacity: 0 })
    gsap.to(profileCard, {
      x: 0, opacity: 1, duration: 1.4, ease: EASE.smooth,
      scrollTrigger: { trigger: about, start: 'top 80%', toggleActions: 'play none none reverse' },
    })
  }

  // Info items — 一个 trigger
  if (infoItems.length) {
    gsap.set(infoItems, { y: 40, opacity: 0 })
    gsap.to(infoItems, {
      y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: EASE.gentle,
      scrollTrigger: { trigger: about.querySelector('.about-info-grid'), start: 'top 90%', toggleActions: 'play none none reverse' },
    })
  }

  // Bio 段落 — 一个 trigger
  if (bios.length) {
    gsap.set(bios, { y: 50, opacity: 0 })
    gsap.to(bios, {
      y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: EASE.gentle,
      scrollTrigger: { trigger: about.querySelector('.about-right'), start: 'top 75%', toggleActions: 'play none none reverse' },
    })
  }

  // Stat cards — 一个 trigger + 数字递增
  if (statCards.length) {
    gsap.set(statCards, { y: 60, opacity: 0 })
    gsap.to(statCards, {
      y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: EASE.smooth,
      scrollTrigger: {
        trigger: about.querySelector('.about-stats'),
        start: 'top 90%',
        toggleActions: 'play none none reverse',
        onEnter: () => animateStatNumbers(about),
      },
    })
  }
}

// ── Projects：整个 grid 一个 trigger ──
function initProjectsAnimations() {
  const projects = document.querySelector('.projects')
  if (!projects) return

  const cards = projects.querySelectorAll('.project-card')
  const images = projects.querySelectorAll('.project-card-image')

  // 卡片 stagger
  if (cards.length) {
    gsap.set(cards, { y: 80, opacity: 0 })
    gsap.to(cards, {
      y: 0, opacity: 1, duration: 1.0, stagger: 0.12, ease: EASE.smooth,
      scrollTrigger: {
        trigger: projects.querySelector('.projects-grid'),
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })
  }

  // 图片 reveal — 单个 trigger，批量处理
  if (images.length) {
    gsap.set(images, { clipPath: 'inset(0 0 100% 0)' })
    gsap.to(images, {
      clipPath: 'inset(0 0 0% 0)', duration: 1.2, stagger: 0.12, ease: EASE.smooth,
      scrollTrigger: {
        trigger: projects.querySelector('.projects-grid'),
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        delay: 0.15,
      },
    })
  }
}

// ── Strengths：整个 grid 一个 trigger ──
function initStrengthsAnimations() {
  const strengths = document.querySelector('.strengths')
  if (!strengths) return

  const cards = strengths.querySelectorAll('.strength-card')
  const icons = strengths.querySelectorAll('.strength-card-icon')

  if (cards.length) {
    gsap.set(cards, { y: 60, opacity: 0, scale: 0.95 })
    gsap.to(cards, {
      y: 0, opacity: 1, scale: 1, duration: 0.9, stagger: 0.1, ease: EASE.smooth,
      scrollTrigger: {
        trigger: strengths.querySelector('.strengths-grid'),
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })
  }

  if (icons.length) {
    gsap.set(icons, { scale: 0 })
    gsap.to(icons, {
      scale: 1, duration: 0.6, stagger: 0.1, ease: EASE.snap,
      scrollTrigger: {
        trigger: strengths.querySelector('.strengths-grid'),
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        delay: 0.2,
      },
    })
  }
}

// ── Footer：整个 contacts 一个 trigger ──
function initFooterAnimations() {
  const footer = document.querySelector('.footer')
  if (!footer) return

  const contactCards = footer.querySelectorAll('.contact-card')
  const bottom = footer.querySelector('.footer-bottom')

  if (contactCards.length) {
    gsap.set(contactCards, { y: 40, opacity: 0 })
    gsap.to(contactCards, {
      y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: EASE.smooth,
      scrollTrigger: {
        trigger: footer.querySelector('.footer-contacts'),
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
    })
  }

  if (bottom) {
    gsap.set(bottom, { opacity: 0 })
    gsap.to(bottom, {
      opacity: 1, duration: 0.8, ease: EASE.gentle,
      scrollTrigger: { trigger: bottom, start: 'top 95%', toggleActions: 'play none none reverse' },
    })
  }
}

// ── 统计数字递增 ──
function animateStatNumbers(container) {
  const statValues = container.querySelectorAll('.stat-value')
  statValues.forEach((el) => {
    const text = el.textContent.trim()
    const match = text.match(/(\d[\d,]*)/)
    if (!match) return

    const target = parseInt(match[1].replace(/,/g, ''), 10)
    const prefix = text.substring(0, text.indexOf(match[1]))
    const suffix = text.substring(text.indexOf(match[1]) + match[1].length)

    const obj = { val: 0 }
    gsap.to(obj, {
      val: target,
      duration: 2.0,
      ease: EASE.smooth,
      onUpdate: () => {
        el.textContent = prefix + Math.round(obj.val).toLocaleString() + suffix
      },
    })
  })
}

// ── 初始化 ──
export function initAllAnimations() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      initHeroAnimation()
      initScrollAnimations()
      ScrollTrigger.refresh()
    })
  })
}
