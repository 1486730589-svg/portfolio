import React from 'react'
import Silk from './Silk'
import BorderGlow from './BorderGlow'
import './Footer.css'

const contacts = [
  {
    label: '电话',
    value: '17726940126',
    href: 'tel:17726940126',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    label: '邮箱',
    value: '1486730589@qq.com',
    href: 'mailto:1486730589@qq.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: '所在地',
    value: '甘肃省兰州市西固区',
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: '院校',
    value: '兰州博文科技学院',
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/>
      </svg>
    ),
  },
]

const glowColors = ['#4a90e2', '#6c63ff', '#00d4aa']

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="silk-bg silk-bg--footer">
        <Silk speed={1.5} scale={1.6} color="#4a90e2" noiseIntensity={0.8} rotation={-0.3} />
      </div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <span className="section-label">Get In Touch</span>
            <h2 className="footer-title">期待与您的交流</h2>
            <p className="footer-subtitle">
              如果您对我的经历感兴趣，或有任何合作与咨询意向，<br />
              欢迎通过以下方式与我取得联系。
            </p>
          </div>

          <div className="footer-contacts">
            {contacts.map((item) => (
              <BorderGlow
                key={item.label}
                backgroundColor="#1a1a2e"
                borderRadius={14}
                glowRadius={20}
                glowIntensity={0.8}
                edgeSensitivity={35}
                colors={glowColors}
                fillOpacity={0.3}
              >
                <div className="contact-card">
                  <div className="contact-card-icon">{item.icon}</div>
                  <div className="contact-card-info">
                    <span className="contact-card-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact-card-value">{item.value}</a>
                    ) : (
                      <span className="contact-card-value">{item.value}</span>
                    )}
                  </div>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-brand">
            <span className="logo-mark-sm">W</span>
            <span>Wu Qiyang Portfolio</span>
          </div>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} 吴啓阳. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
