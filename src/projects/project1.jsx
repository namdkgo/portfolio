import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header.jsx';
import Footer from '../footer.jsx';
import project1 from '../assets/project1-1.png';
import project2 from '../assets/project1-2.png';
import project3 from '../assets/project1-3.png';
import project4 from '../assets/project1-4.png';
import project5 from '../assets/project1-5.png';
import project6 from '../assets/project1-6.png';
import project7 from '../assets/project1-7.png';
import project8 from '../assets/project1-8.png';
import project9 from '../assets/project1-9.png';
import project10 from '../assets/project1-10.png';
import project11 from '../assets/project1-11.png';
import project12 from '../assets/project1-12.png';
import project13 from '../assets/project1-13.png';

function Project1() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [project1, project2, project3, project4, project5, project6, project7, project8, project9];

  // 페이지 로드 시 최상단으로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Header />
      <section className="w-full min-h-screen pt-20 pb-12 mt-[6vh]">
        <div className="w-full max-w-7xl mx-auto px-6">
          {/* 프로젝트 제목 */}
          <h1 className="text-4xl font-bold mb-2">지피티쳐(GPT + Teacher)</h1>
          <p className="text-gray-600 text-lg mb-8">Back-End & AI Prompt Developer</p>

          {/* 프로젝트 갤러리 */}
          <div className="w-full bg-white rounded-lg shadow-md mb-8">
            <div className="relative bg-gray-50">
              {/* 메인 이미지 - 더 큼 */}
              <div className="w-full bg-gray-50 rounded-t-lg overflow-hidden h-screen max-h-[600px] flex items-center justify-center">
                <img src={images[currentImageIndex]} alt={`프로젝트 ${currentImageIndex + 1}`} className="w-full h-full object-contain" />
              </div>

              {/* 이전/다음 버튼 */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition text-xl"
              >
                ◀
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition text-xl"
              >
                ▶
              </button>

              {/* 페이지 표시 */}
              <div className="text-center py-3 bg-white text-gray-600 text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* 썸네일 갤러리 */}
            <div className="grid grid-cols-9 gap-1 p-4 bg-white">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative h-20 rounded overflow-hidden border-2 transition hover:opacity-80 ${
                    idx === currentImageIndex ? 'border-blue-500 border-4' : 'border-gray-300'
                  }`}
                >
                  <img src={img} alt={`썸네일 ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* 프로젝트 개요 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">프로젝트 개요</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>지피티쳐(GPT + Teacher)</strong>는 AI 기반 자동 모의시험 생성 및 학습 분석 플랫폼입니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              PDF에서 텍스트를 추출하고, 청킹–임베딩–벡터 검색을 수행한 뒤 OpenAI GPT API를 이용해 학습주제 기반 문제를 생성하고
              Spring Boot 백엔드와 Python AI 파이프라인을 결합해 문제 생성 → 시험 구성 → 정답 분석 → 학습 리포트 생성까지 하나의 흐름으로 자동화했습니다.
            </p>
          </div>

          {/* 주요 기능 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">주요 기능</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <div>
                  <strong>PDF 기반 학습 생성:</strong> PDF에서 추출한 텍스트를 임베딩하여 벡터DB에 저장한 후 GPT API를 활용하여 학습 주제 추출
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <div>
                  <strong>모의 시험 시스템:</strong> 선택한 학습 주제로 GPT API를 호출하여 시험 문제 자동 생성
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <div>
                  <strong>AI 기반 채점 및 분석:</strong> 자동 채점 및 해설, 개인별 취약점 분석
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <div>
                  <strong>대시보드 및 통계:</strong> 성적 추이, 약점 분석, 개념별 정답률 시각화
                </div>
              </li>
            </ul>
          </div>

          {/* 개발 내용 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">개발 내용</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">프론트엔드</h3>
                <p className="text-sm">React.js와 Tailwind CSS를 활용한 반응형 UI 구현, Chart.js를 통한 학습 통계 시각화</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">백엔드</h3>
                <p className="text-sm">Spring Boot 기반 RESTful API 설계 및 구현, MariaDB를 활용한 데이터 관리, 사용자 인증 및 권한 관리</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">AI 파이프라인</h3>
                <p className="text-sm">FastAPI를 통한 AI 서버 구축, LangChain을 활용한 PDF 텍스트 추출 및 청킹, ChromaDB를 통한 임베딩 저장, OpenAI GPT API 연동으로 문제 자동 생성 및 채점</p>
              </div>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">기술 스택</h2>
            <img src={project10} className="w-full h-full object-contain mt-4" />
            <img src={project11} className="w-full h-full object-contain mt-4" />
            <img src={project12} className="w-full h-full object-contain mt-4" />
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">시스템 아키텍쳐</h2>
            <img src={project13} className="w-full h-full object-contain mt-4" />
          </div>

          {/* 성과 및 배운 점 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">성과 및 배운 점</h2>
            <div className="space-y-6">
              {/* 항목 1 */}
              <div>
                <p className="font-bold text-gray-900 mb-2">
                  프로젝트 전체 아키텍처를 스스로 설계하며 풀스택 역량 강화
                </p>
                <p className="text-gray-700 leading-relaxed">
                  프론트엔드–백엔드–AI 파이프라인까지 모든 기술 흐름을 직접 연결하며
                  서비스 전체 구조를 설계·구현하는 경험을 통해 엔드투엔드 개발 역량을 확보했습니다.
                </p>
              </div>

              {/* 항목 2 */}
              <div>
                <p className="font-bold text-gray-900 mb-2">
                  최신 AI 생태계를 실제 서비스 수준으로 적용한 경험 축적
                </p>
                <p className="text-gray-700 leading-relaxed">
                  OpenAI GPT API, LangChain, 임베딩/벡터DB 기반 검색 등
                  이론적 개념을 실 서비스에 구현하며 AI 활용 능력을 실질적으로 향상할 수 있었습니다.
                </p>
              </div>

              {/* 항목 3 */}
              <div>
                <p className="font-bold text-gray-900 mb-2">
                  복잡한 AI 파이프라인을 안정적으로 운영 가능한 수준으로 개선
                </p>
                <p className="text-gray-700 leading-relaxed">
                  PDF 추출–청킹–임베딩–검색–모델 호출 전 과정을 직접 설계하고
                  오류 처리·속도 최적화를 진행하며 문제 해결 능력을 크게 향상할 수 있었습니다.
                </p>
              </div>

              {/* 항목 4 */}
              <div>
                <p className="font-bold text-gray-900 mb-2">
                  팀 개발 환경에서 실질적인 협업 역량 향상
                </p>
                <p className="text-gray-700 leading-relaxed">
                  백엔드–프론트간 API 스펙 조율, Git 협업, 배포 환경 맞춤 조율을 경험하며
                  요구사항을 명확히 정리하고 소통하는 능력이 크게 강화되었습니다.
                </p>
              </div>

              {/* 항목 5 */}
              <div>
                <p className="font-bold text-gray-900 mb-2">
                  서비스 품질을 고려한 개발 사고 방식 습득
                </p>
                <p className="text-gray-700 leading-relaxed">
                  단순 기능 구현뿐 아니라,<br />
                  비용 구조 / 성능 / 사용자 흐름 / 유지보수성을 함께 고민하며
                  "운영 가능한 서비스"를 만드는 개발자의 사고 방식을 체득하였습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 돌아가기 버튼 */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => navigate('/')}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition font-medium"
            >
              메인으로 돌아가기
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Project1;
