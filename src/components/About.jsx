import React from 'react'
import Silk from './Silk'
import ProfileCard from './ProfileCard'
import BorderGlow from './BorderGlow'
import './About.css'

const stats = [
  { value: '4+', label: '年教务管理经验' },
  { value: '10+', label: '主导协调项目' },
  { value: '2', label: '省级竞赛获奖' },
  { value: '2000+', label: '服务在校学生' },
]

const info = [
  { key: '出生年月', val: '2003.08' },
  { key: '政治面貌', val: '中共党员' },
  { key: '毕业院校', val: '兰州博文科技学院' },
  { key: '所学专业', val: '大数据管理与应用' },
  { key: '联系电话', val: '17726940126' },
  { key: '电子邮箱', val: '1486730589@qq.com' },
]

const glowColors = ['#4a90e2', '#6c63ff', '#00d4aa']

export default function About() {
  return (
    <section className="about" id="about">
      <div className="silk-bg silk-bg--about">
        <Silk speed={2} scale={1.5} color="#4a90e2" noiseIntensity={1.2} rotation={0.3} />
      </div>
      <div className="container">
        <div className="about-grid">
          {/* Left: ProfileCard + Info Grid */}
          <div className="about-left">
            <ProfileCard
              avatarUrl="/profile.jpg"
              name="吴啓阳"
              title="大数据管理与应用 · 应届毕业生"
              handle="wqy_bigdata"
              status="Open to Work"
              contactText="联系我"
              showUserInfo={false}
              enableTilt={true}
              behindGlowEnabled
              behindGlowColor="rgba(74, 144, 226, 0.5)"
              innerGradient="linear-gradient(145deg, #1a2a4e8c 0%, #4a90e244 100%)"
              onContactClick={() => {
                document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="about-profile-card"
            />

            <div className="about-info-grid">
              {info.map((item) => (
                <BorderGlow
                  key={item.key}
                  backgroundColor="#1a1a2e"
                  borderRadius={12}
                  glowRadius={0}
                  glowIntensity={0.6}
                  edgeSensitivity={35}
                  colors={glowColors}
                  fillOpacity={0.3}
                >
                  <div className="info-item">
                    <span className="info-key">{item.key}</span>
                    <span className="info-val">{item.val}</span>
                  </div>
                </BorderGlow>
              ))}
            </div>
          </div>

          {/* Right: Bio + Stats */}
          <div className="about-right">
            <span className="section-label">About Me</span>
            <h2 className="section-title">个人简介</h2>
            <p className="about-bio">
              大数据管理与应用专业应届毕业生，中共党员。在校期间担任教务处教学信息中心主任，
              统筹校级考试组织、考研自习室调配、毕业答辩协调等核心工作，积累了丰富的教务统筹管理经验。
            </p>
            <p className="about-bio">
              具备大数据全流程处理能力，精通数据采集、清洗、分析核心技术，
              熟练运用 Hadoop、Spark 等大数据工具，可独立完成数据分析项目并输出业务价值。
              拥有数据思维与逻辑分析能力，能结合业务场景提炼数据价值。
            </p>
            <p className="about-bio">
              此外，丰富的外出游历经历赋予开阔视野，擅长跨部门沟通协作，
              能高效配合完成数据挖掘、分析等相关工作，为业务决策提供数据支撑。
            </p>

            <div className="about-stats">
              {stats.map((stat) => (
                <BorderGlow
                  key={stat.label}
                  backgroundColor="#1a1a2e"
                  borderRadius={14}
                  glowRadius={20}
                  glowIntensity={0.8}
                  edgeSensitivity={35}
                  colors={glowColors}
                  fillOpacity={0.3}
                >
                  <div className="stat-card">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </BorderGlow>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
