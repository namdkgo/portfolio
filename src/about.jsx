import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="w-full flex items-center justify-center snap-start bg-white"
      style={{
        minHeight: '94vh',
        height: '94vh',
        scrollSnapAlign: 'start',
        marginTop: '6vh',
      }}
    >
      <div className="border p-6 rounded-lg bg-white shadow w-full h-full flex flex-col justify-center">
        <div className="flex flex-col md:flex-row gap-8 h-full">
          {/* 왼쪽: 사진 + 기본 정보 */}
          <div className="flex flex-col items-center md:w-1/3 gap-8">
            {/* 사진 */}
            <div className="w-32 h-32 rounded-full border flex items-center justify-center text-gray-500 text-lg mb-2">
              사진
            </div>
            {/* 기본 정보 */}
            <div className="border rounded p-4 w-full text-center md:text-left">
              <div className="mb-2">이름</div>
              <div className="mb-2">생년월일</div>
              <div className="mb-2">거주지</div>
              <div className="mb-2">이메일</div>
              <div className="mb-2">학력</div>
              <div>깃허브 주소</div>
            </div>
          </div>
          {/* 오른쪽: 기술 스택 + 자기소개 */}
          <div className="flex flex-col gap-8 flex-1">
            {/* 기술 스택 */}
            <div className="border rounded p-6 flex items-center justify-center text-2xl font-semibold min-h-[80px]">
              기술 스택
            </div>
            {/* 자기소개 */}
            <div className="border rounded p-6 flex items-center justify-center text-2xl font-semibold min-h-[120px]">
              자소서
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;