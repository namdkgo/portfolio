import React from 'react';
import photo from './assets/photo.jpg';

function About() {
  return (
    <section
      id="about"
      className="w-full flex items-start justify-center snap-start"
      style={{
        minHeight: '94vh',
        scrollSnapAlign: 'start',
        paddingTop: '6vh', // margin 대신 패딩으로 내부 여유 확보
      }}
    >
      {/* 최상위 컨테이너: 세로 중앙 정렬 제거 */}
      <div className="border p-6 rounded-lg shadow w-full flex flex-col">
        <div className="flex flex-col md:flex-row gap-8 h-full">
          {/* 왼쪽: 사진 + 기본 정보 */}
          <div className="flex flex-col items-center md:w-[22%] gap-8 bg-[#184B85] text-white rounded-lg p-6">
            {/* 사진 */}
            <div className="w-64 h-64 rounded-full border border-white/20 overflow-hidden mb-2 bg-white/5">
              <img src={photo} alt="프로필" className="w-full h-full object-cover" />
            </div>
            <div className='mb-2 text-3xl font-bold'>남동관</div>
            {/* 기본 정보 */}
            <div className="rounded text-white text-left space-y-2">
              <div className="mb-2 flex items-center gap-3">
                {/* 프로필 아이콘 */}
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" fill="currentColor"/>
                  <path d="M4 20c0-3.314 2.686-6 6-6h4c3.314 0 6 2.686 6 6v1H4v-1z" fill="currentColor" opacity="0.9"/>
                </svg>
                <span className="leading-tight">1998.06.03</span>
              </div>

              <div className="mb-2 flex items-center gap-3">
                {/* 전화번호 아이콘 */}
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.21 2.21z" fill="currentColor"/>
                </svg>
                <span className="leading-tight">010-6361-6832</span>
              </div>

              <div className="mb-2 flex items-center gap-3">
                {/* 이메일 아이콘 */}
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
                <span className="leading-tight">namdkgo@gmail.com</span>
              </div>

              <div className="mb-2 flex items-center gap-3">
                {/* 집(주소) 아이콘 */}
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3l9 8h-3v8h-4v-5H10v5H6v-8H3l9-8z" fill="currentColor"/>
                </svg>
                <span className="leading-tight">인천광역시 부평구 열우물로 90</span>
              </div>
            </div>
            {/* 기술 스택 */}
            <div className="border border-white/10 bg-transparent rounded p-4 w-full text-center md:text-left text-white">
              기술 스택
            </div>
          </div>
          {/* 오른쪽: 기술 스택 + 자기소개 */}
          <div className="flex flex-col gap-8 flex-1">
            {/* 자기소개 */}
            <div className="border rounded bg-white p-6 text-lg min-h-[120px]">
              <div className="space-y-4 text-left">
                <p>
                  <strong>초등학교 3학년, 우연히 게임 소스 파일을 얻게 되었습니다.</strong><br />
                  프로그래밍 언어도 IDE도 모르던 어린 시절, 단지 ‘내가 게임을 바꿔보고 싶다’는 호기심 하나로 메모장을 열고 코드를 하나씩 바꿔보며 시행착오를 반복했습니다. 컴파일러 없이 실행 화면 하나로만 결과를 확인할 수 있었기 때문에, 코드에 오류가 생기거나 실행이 되지 않으면 모든 파일을 삭제하고 다시 압축을 푼 뒤, 기억만으로 기존의 수정 내용을 재현해야 했습니다. 지금처럼 AI는 물론, 구글 검색조차 활성화되지 않았던 시절이기에 무언가 하나를 바꾸는 데에도 여러 겹의 장벽을 마주해야 했고, 포기하고 싶을 때도 많았습니다. 하지만 제가 만든 게임을 즐겨주는 사람들이 있었기에 끝까지 책임감을 가지고 완성할 수 있었습니다. 이 과정은 제가 처음으로 개발의 즐거움을 느꼈던 소중한 경험이었고, 개발자가 되겠다는 꿈을 단 한 번도 흔들리지 않게 해주었습니다.
                </p>

                <p>
                  <strong>이 경험은 저를 게임 개발자의 길로 이끌었습니다.</strong><br />
                  고등학교 졸업 직후 펄어비스의 검은사막 모바일 팀에 게임기획자로 입사하여, 런칭에 참여할 수 있는 기회를 얻었습니다. 콘텐츠 기획 파트에서 전투 및 생활 콘텐츠, 퀘스트 등 다양한 요소의 설계와 밸런싱을 담당하며 실무 경험을 쌓았습니다. 특히 유저 관점에서 사고하는 법과 기획의 중요성을 깊이 배울 수 있었습니다. 하지만 소프트웨어 개발에 대한 이해 부족과 첫 직장생활의 미숙함, 장시간 근무로 인한 건강 문제 등으로 삶의 균형이 무너지며 결국 퇴사를 결심하게 되었습니다.
                </p>

                <p>
                  <strong>이후 약 4년간 다양한 일을 경험하며 방황의 시간을 보냈습니다.</strong><br />
                  그러나 저에게 가장 가슴 뛰는 일은 언제나 ‘무언가를 개발하여 사용자에게 인정받는 일’이었습니다. 이번에는 제대로 실력을 갖춰보자는 결심으로 인하공업전문대학에 입학하였고, 현재 졸업을 앞두고 있습니다. 늦게 시작한 만큼 누구보다 간절하게 학업과 프로젝트에 임해왔다고 자부합니다.
                </p>

                <p>
                  <strong>아직 구체적인 진로 분야는 정하지 않았지만,</strong><br />
                  4학년 심화과정까지 염두에 두고 있는 만큼 다양한 기술을 경험하고, 실습과 프로젝트를 통해 활용 가능한 수준까지 끌어올리는 것을 목표로 하고 있습니다. 그 과정의 일환으로 Unity를 활용한 게임 프로젝트는 물론, React, Spring Boot, FastAPI, ChatGPT API 등을 활용하여 ‘PDF 기반 자동 시험 생성 및 AI 학습 분석’ 웹 프로젝트를 진행하였습니다. 이 프로젝트를 통해 프론트엔드, 백엔드, AI API 연동까지 폭넓은 경험을 쌓을 수 있었고, 특히 협업과 유지보수에 강한 구조 설계의 중요성을 체감할 수 있었습니다.
                </p>

                <p>
                  <strong>저는 다음의 역량을 중요하게 생각합니다.</strong><br />
                  작은 것도 놓치지 않는 집요함과 꼼꼼함, 협업을 고려한 설계와 원활한 소통, 그리고 지속적인 기술 학습입니다. 특히 요즘처럼 빠르게 변화하는 기술 환경 속에서도 새로운 트렌드를 빠르게 습득하고 적용하는 데에 집중하고 있습니다. 앞으로는 AI 기술의 발전 가능성과 활용성에 주목하여, 반드시 AI 기술을 실무에 적용할 수 있는 분야에서 커리어를 쌓아가고자 합니다. 남은 학업 기간 동안 관련 역량을 꾸준히 학습하고, 실무에 기여할 수 있는 개발자로 성장하겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;