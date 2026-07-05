import React from 'react'
import Silk from './Silk'
import BorderGlow from './BorderGlow'
import './Projects.css'

const projects = [
  {
    id: 1,
    category: '校园管理',
    title: '校级教务考试统筹管理系统',
    desc: '统筹四六级、计算机二级等校级重要考试全流程管理，协调考场安排、监考调度、成绩统计，累计服务2000+学生，考试零差错运行。',
    tags: ['教务管理', '流程优化', '资源协调'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
  },
  {
    id: 2,
    category: '数据竞赛',
    title: '甘肃省数据挖掘挑战赛 - 本科组二等奖',
    desc: '首届甘肃省大学生数据挖掘挑战赛，运用数据清洗、特征工程与机器学习算法对真实业务数据进行深度挖掘，获得本科组省级二等奖。',
    tags: ['数据挖掘', 'Python', '机器学习'],
    image: '/award-data-mining.jpg',
  },
  {
    id: 3,
    category: '科研竞赛',
    title: '挑战杯省赛三等奖 - 课外学术科技作品',
    desc: '第十五届"挑战杯"甘肃省大学生课外学术科技作品竞赛，基于大数据分析方法完成学术调研报告，展现综合科研能力与学术素养。',
    tags: ['学术研究', '大数据分析', '报告撰写'],
    image: '/award-challenge-cup.jpg',
  },
  {
    id: 4,
    category: '毕业协调',
    title: '毕业季核心工作统筹',
    desc: '牵头组织大四毕业论文答辩全流程，高效完成毕业证与学位证集中发放，协调各院系保障千余名毕业生顺利离校。',
    tags: ['项目管理', '跨部门协调', '流程设计'],
    image: '/graduation-defense.jpg',
  },
  {
    id: 5,
    category: '实习实践',
    title: '甘肃诺鑫工程监理 - 行政管理',
    desc: '负责公司文件收发归档、会议组织与纪要撰写，参与项目监理档案规范化整理，保障档案管理为项目复盘提供资料支撑。',
    tags: ['行政管理', '档案管理', '文书撰写'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: 6,
    category: '活动策划',
    title: '校级大型讲座活动组织',
    desc: '协调举办多场校级大型讲座活动，搭建师生学术交流平台，从策划、场地协调到现场执行，助力校园学术氛围建设。',
    tags: ['活动策划', '沟通协调', '学术交流'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
]

const glowColors = ['#4a90e2', '#6c63ff', '#00d4aa']

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="silk-bg silk-bg--projects">
        <Silk speed={2.5} scale={1.3} color="#4a90e2" noiseIntensity={1.4} rotation={-0.2} />
      </div>
      <div className="container">
        <div className="projects-header">
          <div>
            <span className="section-label">Featured Projects</span>
            <h2 className="section-title">精选项目</h2>
          </div>
          <p className="section-desc">
            从教务统筹到数据分析，从竞赛科研到活动策划，
            每一个项目都是能力与成长的印证。
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <BorderGlow
              key={project.id}
              backgroundColor="#1a1a2e"
              borderRadius={16}
              glowRadius={20}
              glowIntensity={0.8}
              edgeSensitivity={30}
              colors={glowColors}
              fillOpacity={0.3}
            >
              <div className="project-card">
                <div className="project-card-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-card-overlay">
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>
                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.desc}</p>
                  <div className="project-card-tags">
                    {project.tags.map((tag) => (
                      <span className="project-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  )
}
