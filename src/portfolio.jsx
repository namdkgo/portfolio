import React, { useState, useRef, useEffect } from 'react';

const projects = [
  {
    name: '프로젝트 명',
    year: '2024',
    period: '3개월',
    role: '100%',
    summary: '프로젝트 설명',
    overview: '프로젝트 개요',
    environment: '개발 환경',
    details: '개발 내용',
    features: '주요 기능 설명',
    featureImage: '주요 기능 사진',
    image: '프로젝트 사진',
  },
  // 필요시 프로젝트 추가
];

function Portfolio() {
  const [selected, setSelected] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const modalRef = useRef(null);

  const prevProject = () => setSelected((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const nextProject = () => setSelected((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  const project = projects[selected];

  // 모달 바깥 클릭 시 닫기
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowDetail(false);
    }
  };

  // 모달이 열릴 때 스크롤 방지
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

  return (
    <section
      id="portfolio"
      className="w-full flex items-center justify-center snap-start"
      style={{
        minHeight: '94vh',
        height: '94vh',
        scrollSnapAlign: 'start',
        marginTop: '6vh',
      }}
    >
      <div className="border p-6 rounded-lg shadow w-full h-full flex flex-col justify-center">
        <div className="flex flex-col md:flex-row gap-8 h-full">
          {/* 왼쪽: 프로젝트 정보 */}
          <div className="flex flex-col gap-4 md:w-1/3">
            <div className="border rounded p-2 text-center font-semibold">{project.name}</div>
            <div className="border rounded p-2 text-center">{project.summary}</div>
            <button
              className="border rounded p-2 mt-2 hover:bg-gray-100 transition"
              onClick={() => setShowDetail(true)}
            >
              자세히 보기
            </button>
          </div>
          {/* 오른쪽: 프로젝트 사진 및 슬라이드 */}
          <div className="flex-1 flex items-center justify-center relative">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 px-2 text-2xl text-gray-400 hover:text-gray-600"
              onClick={prevProject}
              aria-label="이전"
            >
              &#9664;
            </button>
            <div className="border rounded w-full h-64 flex items-center justify-center text-xl">
              {project.image}
            </div>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 px-2 text-2xl text-gray-400 hover:text-gray-600"
              onClick={nextProject}
              aria-label="다음"
            >
              &#9654;
            </button>
          </div>
        </div>
      </div>
      {/* 자세히 보기 모달 */}
      {showDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          onMouseDown={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-8 relative"
            onMouseDown={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600"
              onClick={() => setShowDetail(false)}
              aria-label="닫기"
            >
              &times;
            </button>
            <div className="bg-gray-100 p-4 rounded text-center font-semibold mb-4">
              {project.name}<br />
              {project.year} / {project.period} / {project.role}
            </div>
            <div className="border rounded p-4 mb-4 text-center">{project.overview}</div>
            <div className="border rounded p-4 mb-4 text-center">{project.environment}</div>
            <div className="border rounded p-4 mb-4 text-center">{project.details}</div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="border rounded p-4 flex-1 text-center">{project.features}</div>
              <div className="border rounded p-4 flex-1 text-center">{project.featureImage}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;