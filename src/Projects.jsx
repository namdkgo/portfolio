import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import projectImage1 from './assets/project1-7.png';

const projectList = [
  {
    id: 1,
    name: '지피티쳐(GPT + Teacher)',
    period: '2025.03 - 2025.06',
    role: 'Back-End & AI Prompt Developer',
    description: 'AI 기반 모의시험 생성 및 학습 분석 플랫폼',
    details: [
      'Spring Boot 기반 백엔드 시스템 설계 및 개발',
      '테이블 모델링 및 RESTful API 구현',
      'AI 파이프라인 구축',
      '텍스트 추출, 청킹, 임베딩, AI 언어 모델 호출 및 GPT API 연동'
    ],
    techStack: ['React', 'TailwindCSS', 'Chart.js', 'Spring Boot', 'MariaDB', 'FastAPI', 'LangChain', 'ChromaDB', 'OpenAI API'],
    image: projectImage1,
  }
];

function Projects() {
  const navigate = useNavigate();
  const [showDetail, setShowDetail] = useState(false);
  const modalRef = useRef(null);

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowDetail(false);
    }
  };

  useEffect(() => {
    if (showDetail) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showDetail]);

  const handleMoreDetail = (project) => {
    navigate(`/project/${project.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <section
      id="projects"
      className="w-full flex items-center justify-center snap-start"
      style={{
        minHeight: '88vh',
        height: '88vh',
        scrollSnapAlign: 'start',
        backgroundColor: '#E3EEF6'
      }}
    >
      <div className="w-full max-w-6xl px-6 py-12">
        <h2 className="text-7xl font-bold text-center mt-10 mb-20 underline decoration-4 underline-offset-8">Projects</h2>

        <div className="flex justify-center">
          <div className="w-full md:w-1/2">
            {projectList.map((project) => (
              <div key={project.id} className="flex flex-col bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white bg-[#0D8DF6] px-3 py-1 rounded">{project.name}</h3>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-700 font-semibold">{project.role}</span>
                  <span className="text-gray-600 text-sm">{project.period}</span>
                </div>

                <hr className="mb-4" />

                <div className="w-full bg-gray-100 rounded-lg mb-6 flex items-center justify-center h-48 overflow-hidden">
                  {project.image ? (
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-gray-400 text-center text-sm">이미지 준비 중</div>
                  )}
                </div>

                <p className="text-black-700 mb-4 leading-relaxed">{project.description}</p>

                <ul className="text-gray-700 text-sm mb-4 space-y-1">
                  {project.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-[#222831] text-white text-xs px-3 py-1 rounded-full border border-[#222831]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleMoreDetail(project)}
                  className="mt-4 bg-[#58B5F8] text-white px-4 py-2 rounded hover:bg-[#184B85] transition font-medium text-sm"
                >
                  자세히 보기
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;