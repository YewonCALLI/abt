export const ArtInfo = {
  title: 'HongYeon 1.0, 2023',
  category: 'AI ChatBot',
  caption: [
    '챗봇형 AI',
    '챗 GPT3.5',
    '네이버 클로바 노트',
    '홍연길 인터뷰 아카이빙',
    'AI ChatBot',
    'ChatGPT3.5',
    'NAVER CLOVA API',
    'Archiving of Hongyeon-gil interview',
  ],
  artist: '장예원 Yewon Jang',
  name: '예원',
  credit: [
    'AI 기획, 개발, 디자인 | 장예원',
    '인터뷰 | 도재인, 임은정, 장예원, 최은총',
    '인터뷰 정리 | 장예원',
    '문답에 도움을 주신 분들 | 강X원, 임X이, 이X근, 김X경, 최X향, 아터테인, 열린공간 연희, 마켓까눌레,산스, 보틀라운지, 홍연길 인스타그램, 홍연경로당 일원 ',
    '자문 | 신보슬',
  ],
  detail: `
   <홍연 1.0>은 작가가 서울특별시 연희동 홍연길을 4개월간 방문하며 ‘홍연길'에 대한 데이터를 수집하여 만든 챗봇형 AI이다. 작가는 노인 인구가 높은 홍연길이지만, 이 안에 노인 세대와 청년 세대가 분리되어 있다는 걸 발견한다. AI로 홍연길 내의 세대 분리를 해결해 보고자, 홍연길 내 전 세대의 문답을 뒤섞은 챗봇을 만든다. 이를 위해 작가는 청년층, 노인층, 방문객으로 문답 카테고리를 나누고 길거리 인터뷰, 온라인 설문조사, 웹 크롤링 등의 방법을 사용해 통해 ‘홍연길’의 온/오프라인 데이터를 수집한다. 이 데이터를 챗 GPT3.5에 파인튜닝 하여 챗봇에 적용하는 방식으로 제작되었다. \n\n 챗봇은 홍연길의 청년층부터 노년층까지 다양한 연령대의 인터뷰 문답 내용을 한 사람이 말하는 것처럼 혼합하여 전달한다. 홍연길에 대한 역사, 지리 문화를 알려줄 뿐만 아니라 마치 홍연길에 살고 있는 사람처럼 경험담을 얘기하거나, 추억을 꺼내기도 한다. 챗봇은 아바타 웹사이트를 통해 누구나 접근할 수 있다.
`,
}

export const Interview = [
  {
    q: 'AI챗봇은 수많은 데이터를 전처리 과정을 거쳐야 AI가 말하게 된다고 알고 있어요. 이번 프로젝트의 AI 생성 과정에 대해서 말씀해 주실 수 있나요?',
    a: '홍연길에 처음 온 것은 7월이었어요. 약 6개월의 시간 동안 저희도 홍연길과 친해지는 과정이 있었던 것 같아요. 주민들에게 다가가기 위해 절차를 밟고 인터뷰룰 요청하고 구글폼 이벤트를 진행했을 뿐만 아니라, 사실 다짜고짜 찾아가서 홍연길 이야기를 들려달라 한 적도 있었던 일화가 기억나요. 다양한 방식으로 6개월간 홍연길의 주민들, 방문한 사람들과 이야기를 나누며 홍연길에 대한 정보나 그들이 홍연길에 대해 가지고 있는 인상을 수집하는 시간을 가졌고, 수집한 것들을 바탕으로 클로바 노트로 텍스트화했어요.',
  },
  {
    q: '다른 AI 모델과 작가님의 작품이 어떤 차이점이 있을까요?',
    a: 'AI를 이용해 제가 시도하고 있는 챗봇이나, 음성을 인식하게 하는 등 여러 종류의 AI가 빠르게 대중화되고 있어요. 다만 챗봇의 경우 정량적이고 객관적인 정보를 바탕으로 사실만을 답하는 걸 목표로 한다면, 제가 수집하고 학습시킨 자료는 주민들의 언어 습관이라든지, 홍연길에 대해 가진 감정이라든지, 자주 찾는 맛집 등 실제 홍연길에서의 추억이나 일상에 관련된 내용들이 많았어요. 주민들이 수십 년간 홍연길에 거주하며 생긴 에피소드들이 재미있는 얘기가 많더라고요. 어떻게 AI 챗봇에 그들의 삶을 녹여낼 수 있을지 고민했던 것 같아요. 저 스스로 데이터를 가공하고 학습시키는 과정에서 인터뷰 녹음본을 재차 돌려봐야 했는데 얘기를 들을수록 가슴이 뭉클했던 순간이 많았어요. AI를 생성할 때 개발자로서 작업에 임했다기보단 고고학자나 탐험가와 유사한 기분으로 작업했던 기억이 나네요. 완벽해지길 바라는 AI가 아니라는 점에서 현 AI 씬에 대한 작은 도전을 한다는 마음이 들기도 했어요.',
  },
  {
    q: '작가님의 AI가 가끔 엉뚱한 말도 쏟아낸다는 점에서 소설가 같기도 하단 생각이 드네요. 작업을 진행하며 홍연길에 자주 찾아가셨어요. 그중에서도 경로당을 제일 많이 찾아주신 분이 작가님이에요. 지역과 세대를 오가는 이번 작업을 준비하면서 교류가 가장 중요했다는 점에서 큰 역할을 해주신 것 같아요. 직접 노인분들의 얘기를 듣고, 피드백을 받고 하는 과정이 있었기 때문에 프로젝트가 잘 진행된 게 아닌가 싶습니다.',
    a: '',
  },
]
