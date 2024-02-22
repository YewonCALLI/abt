import Scene from '@/components/canvas/Scene'
import { Canvas } from '@/components/canvas/Canvas'
import React from 'react'
import Header from '@/components/dom/Layout/Header'
import { Logo } from '@/components/dom/Logo'
import { useRouter } from 'next/router'
import { GoArrowLeft } from 'react-icons/go'
import Image from 'next/image'
import { GoDownload } from 'react-icons/go'
import { Swiper, SwiperSlide } from 'swiper/react' // basic
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/css' //basic
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([Navigation, Pagination])

export default function Page(props) {
  const router = useRouter()

  return (
    <>
      <div className='fixed z-0 w-full h-screen'>
        <button
          onClick={() => {
            router.push('/')
          }}
          className='w-fit h-fit fixed top-4 left-4
          flex flex-row gap-2 justify-center items-center cursor-pointer active:bg-white active:text-black hover:bg-white hover:text-black transition-all duration-300 active: md:hover:shadow-xl shadow-white z-20 bg-black px-4 py-1 border-white border rounded-full text-white font-[bkkserif] text-md md:text-xl'
        >
          <GoArrowLeft />
          back
        </button>
        <div className='w-full h-screen flex flex-col md:flex-row justify-center items-center'>
          <div className='block md:hidden w-full h-fit'>
            <Swiper pagination slidesPerView={1} scrollbar={{ draggable: true }}>
              <SwiperSlide>
                <Image src='/img/img_1.png' width={1200} height={100} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src='/img/img_2.png' width={1200} height={100} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src='/img/img_3.png' width={1200} height={100} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src='/img/img_4.png' width={1200} height={100} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src='/img/img_5.png' width={1200} height={100} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src='/img/img_6.png' width={1200} height={100} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src='/img/img_7.png' width={1200} height={100} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src='/img/img_8.png' width={1200} height={100} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src='/img/img_9.png' width={1200} height={100} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src='/img/img_10.png' width={1200} height={100} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className='md:flex w-full h-full hidden flex-col overflow-y-scroll'>
            <div className='w-full h-full'>
              <Image src='/img/img_1.png' width={1200} height={100} />
            </div>
            <div className='w-full h-fit'>
              <Image src='/img/img_2.png' width={1200} height={100} />
            </div>
            <div className='w-full h-fit'>
              <Image src='/img/img_3.png' width={1200} height={100} />
            </div>
            <div className='w-full h-fit'>
              <Image src='/img/img_4.png' width={1200} height={100} />
            </div>
            <div className='w-full h-fit'>
              <Image src='/img/img_5.png' width={1200} height={100} />
            </div>
            <div className='w-full h-fit'>
              <Image src='/img/img_6.png' width={1200} height={100} />
            </div>
            <div className='w-full h-fit'>
              <Image src='/img/img_7.png' width={1200} height={100} />
            </div>
            <div className='w-full h-fit'>
              <Image src='/img/img_8.png' width={1200} height={100} />
            </div>
            <div className='w-full h-fit'>
              <Image src='/img/img_9.png' width={1200} height={100} />
            </div>
            <div className='w-full h-fit'>
              <Image src='/img/img_10.png' width={1200} height={100} />
            </div>
          </div>
          <div className='w-full h-full overflow-y-scroll bg-[#00FF88]'>
            {/* <div className='w-full h-fit p-10'>
              <Image src='/img/titleblack.svg' width={1200} height={100} />
            </div> */}
            <div className='w-full h-fit p-6 md:p-10 flex flex-col gap-2'>
              <h3 className='text-xl'>
                ≪도전! 실버벨: 홍연길 프로젝트 The Silver Bell Challenge: Hong Yeon-gil Project≫
              </h3>
              <p className='text-sm'>
                일시 | 2023.01.16(화) 18:00-20:00
                <br />
                장소 | 10의 n승(서울시 서대문구 홍연길 62 / 2호)
                <br />
                프로젝트 팀 | 아바타 ABT (@art.body.tech)
                <br />
                기획, 리서치 | 최은총 (@chldmschd)
                <br />
                작가 | 도재인 (@dji_dosigner) 임은정 (@imeunjoung) 장예원 (@yewon.calli)
                <br />
                협력 | 오세진 (@ohsj1999)
                <br />
                도움 | 김민선, 박소호, 신보슬, 윤현민, 이예은, 임대식, 황희승, 홍연길서울(@hongyeongil_seoul),
                홍연경로당, 홍연길주민
                <br />
                <br />
                주관 | 토탈미술관(@totalmuseum)
                <br />
                공동주관 | 예술공간 의식주(@the_necessaries), 아터테인(@artertain_)
                <br />
                후원 | 한국문화예술위원회
                <br />
                <br />본 쇼케이스는 토탈미술관이 주관하는 2023 예비예술가 성장지원 플랫폼 '화원(畵院):홍연길'의 지원을
                받았습니다.
              </p>
              <h3 className='mt-8 text-md bg-black w-fit text-[#00FF88] px-2'>
                1. {'<'}도전! 실버벨{'>'} 프로젝트 소개
              </h3>
              <p className='mt-2 text-sm'>
                ‘도전! 실버벨’은 기획자 1인과 작가 3인으로 구성된 팀 아바타가 6개월간 서울 연희동의 홍연길 노인과
                교류하며 진행한 뉴미디어 예술 프로젝트로, 지역과 세대의 분리를 예술로 엮어내고자 기획되었다. 아바타는
                홍연길 리서치를 통해 서울 안에서도 노인 인구가 높으며, 작은 동네임에도 불구하고 13곳의 갤러리가 위치한
                문화예술과 밀접하다는 뚜렷한 지역적 특성을 도출해 낸다. 그러나 홍연길 노인들을 대상으로 인터뷰를 진행한
                결과, 홍연길에 수많은 미술관에 방문한 적이 없는 노인분들이 대부분이었다. 이에 아바타는 홍연길의 노인들과
                지속적인 교류를 통해 노인을 예술에 참여시키는 프로젝트를 선보인다.
                <br />
                <br />이 프로젝트는 노인 계층의 문화 예술 접근성과 뉴미디어의 디지털 접근성을 염두에 두고 진행되었다.
                접근성, 배리어프리, 디지털 리터러시를 주제로 한 자료를 토대로 프로젝트의 기틀을 잡았을 뿐만 아니라, 홍연
                경로당, 홍연길 안에 위치한 의료 시설, 홍연길 노인 계층 인터뷰 등 실질적인 교류를 통해 지역의 노인과
                소통하려 노력했다. 리서치는 기획자 최은총의 주도하에 이뤄졌으며, 리서치 자료는 작가 도재인, 장예원,
                임은정의 작품 제작에 활용되었다. 아바타의 프로젝트는 홈페이지(www.abt-avatar.world)를 통해 AI 챗봇,
                인터랙티브 웹 아트 그리고 퍼포먼스 영상을 전시한다. 오프라인 쇼케이스에서는 홍연길 주민과 예술인, 시민과
                만나 프로젝트에 관한 다양한 소감을 나눈다.
              </p>
              <h3 className='mt-8 text-md bg-black w-fit text-[#00FF88] px-2'>2. 프로젝트 결성 계기</h3>
              <p className='mt-2 text-sm'>
                유독 연희동에는 30년 이상 노후주택이 2,736호나 포진해 있다. 인접한 신촌동은 821호로 비슷한 면적에
                노후주택이 약 3.5배나 많은 것이다. 뉴스에서는 노후한 주택과 건물이 밀집한 홍연길을 ‘연희동의 음지’라
                표현하기도 한다. 정부도 이를 의식해서인지, 2021년부터 홍연길 일대를 공공재개발 후보지로 선정했다. 하지만
                홍연길 내 원주민은 높은 노령화 지수가 대변해 주듯 대부분 고령층이다. 고령층은 재개발 시 오랜 기간 살아온
                삶의 터전을 떠나야 할 뿐만 아니라, 현실적으로 내야 하는 비용도 부담이 된다. 하지만 청년층은 고령층의
                반대를 ‘난관’이라 말하고 있다.
                <br />
                <br />
                이미 홍연길 안에선 2018년부터 들어선 유명 건설사 아파트 단지와 훨씬 오래전부터 자리 잡은 노후주택 사이로
                젠트리피케이션(gentrification) 현상이 일어나고 있다. 원도심의 흔적을 간직한 홍연길의 모습을 10년 후에도
                볼 수 있을지 확신할 수 없게 된 것이다. 결국 홍연길의 원주민, 즉 노령층이 지닌 홍연길의 생생한 이야기는
                그대로 잊힐지도 모른다. 예를 들어, '홍연길'의 지명의 유래는 온라인과 오프라인을 포함하여 그 어디에도
                자료를 찾아봐도 정보가 나오지 않았다. 정보가 범람하는 21세기에 범용적으로 사용하고 있는 지명의 유래가
                이토록 찾기 어렵다는 점이 낯설게 다가왔기에, 아바타의 프로젝트는 이 지점에서부터 출발한다.
              </p>
              <h3 className='mt-8 text-md bg-black w-fit text-[#00FF88] px-2'>3. 리서치 방향과 범위</h3>
              <p className='mt-2 text-sm'>
                노인에 대한, 노인을 위한 뉴미디어 아트는 어떠한 모습이여야할까? 국내외 문헌을 살펴봐도 노인을 위한
                디지털 교육 사례는 다소 있지만, 이 자료들은 노인이 발전하고 있는 기술에 적응할 수 있게 교육할 수 있는
                교본이 대다수였다. 그마저도 사람이 하던 일을 기계로 대체되고 있는 은행 어플 사용 교육이나 음식 주문
                키오스크 활용 교육 등, 뉴미디어 기기 활용법을 배우지 않으면 일상생활에 지장이 있을 만한 종류의 교육이
                실행되고 있었다. 물론 노인이 기술 발전 속도에 맞춰 적응하는 것도 실질적으로 중요하지만, 기술이 노인에
                맞춰진 경우는 찾아보기 어려웠다.
                <br />
                <br />
                방송통신표준심의회는 2016년도 모바일 애플리케이션 콘텐츠 접근성 지침 2.0을, 2022년도에 한국형 웹 콘텐츠
                접근성 지침 2.2를 발표하며 뉴미디어 접근성을 본격적으로 고려하고 있음을 공표하였다. 아바타는 개발자,
                디자이너, 안무가 등의 역할을 겸하고 있기에, ‘노인에 대한 뉴미디어 아트’를 고민하고 ‘노인을 위한 뉴미디어
                아트’의 모습을 연구해 보기로 한다. 프로젝트를 진행하며 깨달은 점은, 뉴미디어 아트에 대한 노인의 신체적인
                접근뿐만 아니라 정서적 반응을 알아차리는 게 더 중요하다는 것이었다. 이에 아바타는 노인층에 대한 정서적
                이해를 높이기 위해 노인층과 지속적으로 교류하며 이들과 보다 친밀해지는데 많은 시간을 쏟았다. 이 리서치를
                활용하여 아바타는 홈페이지와 어플을 개발하고, 작품을 홈페이지에서 공개한다.
                <br />
                <br />
                리서치 방향과 범위는 다음과 같다.
              </p>
              <div className='mt-4 w-full max-w-[480px] h-fit'>
                <Image src='/img/table.svg' width={600} height={100} />
              </div>
              <p className='mt-4 text-sm'>글, 리서치 | 최은총</p>
              <div className='w-full h-fit mt-4'>
                <a
                  href='/홍연길_아바타_리플렛.pdf'
                  download
                  className='w-fit h-fit flex flex-row gap-2 justify-center items-center bg-white text-sm px-2 py-1
                  transition-all duration-300 hover:bg-black hover:text-white
                '
                >
                  <GoDownload />
                  리플렛 다운로드
                </a>
              </div>
              <div className='mt-10 w-full h-fit'>
                <div
                  className='relative'
                  style={{
                    padding: '100% 0 0 0',
                  }}
                >
                  <iframe
                    src='https://player.vimeo.com/video/912754516?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
                    frameborder='0'
                    allow='autoplay; fullscreen; picture-in-picture'
                    className='w-full h-full absolute top-0 left-0'
                    title='The Silver Bell Challenge Hong Yeon-gil project'
                  ></iframe>
                </div>
                <script src='https://player.vimeo.com/api/player.js'></script>
              </div>
              <p className='mt-2 text-sm'>포스터 디자인 | 장예원, 오세진</p>
              <button
                onClick={() => {
                  window.open('https://poster.abt-avatar.world/')
                }}
                className='w-fit h-fit flex flex-row gap-2 justify-center items-center bg-white text-sm px-2 py-1
                  transition-all duration-300 hover:bg-black hover:text-white
                '
              >
                웹 포스터 보기
              </button>
              <div className='w-full h-[100px] md:h-30' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: '도전! 실버벨' } }
}
