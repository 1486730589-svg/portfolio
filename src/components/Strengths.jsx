import React from 'react'
import Silk from './Silk'
import BorderGlow from './BorderGlow'
import './Strengths.css'

const strengths = [
  {
    icon: '📊',
    title: '数据分析',
    desc: '精通数据采集、清洗与分析核心技术，熟练运用 Hadoop、Spark 等大数据工具，具备从数据中提炼业务价值的能力。',
  },
  {
    icon: '🎯',
    title: '统筹协调',
    desc: '担任教务处教学信息中心主任期间，统筹校级考试组织、考研自习室调配、毕业答辩等核心工作，保障各项工作高效运转。',
  },
  {
    icon: '🤝',
    title: '跨部门沟通',
    desc: '丰富的外出游历与校园工作经历，擅长在多元团队中进行沟通协调，能有效整合各方资源推动目标达成。',
  },
  {
    icon: '📋',
    title: '规划策划',
    desc: '主导策划多场校级大型讲座活动，具备从方案设计、资源调配到现场执行的全链路策划落地能力。',
  },
  {
    icon: '💡',
    title: '学习创新',
    desc: '持续关注大数据行业新技术动态，获省级竞赛奖项，自学 AI 相关知识，保持对前沿技术的敏锐度和探索精神。',
  },
  {
    icon: '⚡',
    title: '执行落地',
    desc: '实习与校园经历中积累了大量实操经验，注重细节、高效执行，能在高压环境下保障项目按质按期完成。',
  },
]

const glowColors = ['#4a90e2', '#6c63ff', '#00d4aa']

export default function Strengths() {
  return (
    <section className="strengths" id="strengths">
      <div className="silk-bg silk-bg--strengths">
        <Silk speed={2} scale={1.4} color="#4a90e2" noiseIntensity={1.0} rotation={0.5} />
      </div>
      <div className="container">
        <div className="strengths-header">
          <div>
            <span className="section-label">Core Strengths</span>
            <h2 className="section-title">核心优势</h2>
          </div>
          <p className="section-desc">
            数据能力与协调管理并重，在学业、实践与竞赛中不断打磨出的核心竞争力。
          </p>
        </div>

        <div className="strengths-grid">
          {strengths.map((item) => (
            <BorderGlow
              key={item.title}
              backgroundColor="#1a1a2e"
              borderRadius={16}
              glowRadius={20}
              glowIntensity={0.8}
              edgeSensitivity={35}
              colors={glowColors}
              fillOpacity={0.3}
            >
              <div className="strength-card">
                <div className="strength-card-icon">{item.icon}</div>
                <h3 className="strength-card-title">{item.title}</h3>
                <p className="strength-card-desc">{item.desc}</p>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  )
}
