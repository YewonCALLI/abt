import Head from 'next/head'

const titleDefault = '도전! 실버벨 : 홍연길 프로젝트'
const url = 'https://abt-avatar.world'
const description = '2023 예비예술가 성장지원 플랫폼_화원(畵院):홍연길'
const author = 'ABT & SEJIN OH'

export default function Header({ title = titleDefault }) {
  return (
    <Head>
      {/* Recommended Meta Tags */}
      <meta charSet='utf-8' />
      <meta name='language' content='english' />
      <meta httpEquiv='content-type' content='text/html' />
      <meta name='author' content={author} />
      <meta name='designer' content={author} />
      <meta name='publisher' content={author} />

      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content='ABT, 홍연길, 예술, 예술가, 예술가 성장지원, 예술가 성장지원 플랫폼, 예술가 성장지원 플랫폼_화원, 화원, 홍연길 프로젝트, 도전! 실버벨, 도전! 실버벨 : 홍연길 프로젝트, 도전! 실버벨 : 홍연길 프로젝트_화원, 도전! 실버벨 : 홍연길 프로젝트_화원(畵院), 도전! 실버벨 : 홍연길 프로젝트_화원(畵院):홍연길, 도전! 실버벨 : 홍연길 프로젝트_화원(畵院):홍연길 프로젝트, 도전! 실버벨 : 홍연길 프로젝트_화원(畵院):홍연길 프로젝트_도전! 실버벨, 도전! 실버벨 : 홍연길 프로젝트_화원(畵院):홍연길 프로젝트_도전! 실버벨 : 홍연길 프로젝트, 도전! 실버벨 : 홍연길 프로젝트_화원(畵院):홍연길 프로젝트_도전! 실버벨 : 홍연길 프로젝트_도전! 실버벨, 도전! 실버벨 : 홍연길 프로젝트_화원(畵院):홍연길 프로젝트_도전! 실버벨 : 홍연길 프로젝트_도전'
      />
      <meta name='robots' content='index,follow' />
      <meta name='distribution' content='web' />
      {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta name='og:title' content={title} />
      <meta name='og:type' content='site' />
      <meta name='og:url' content={url} />
      <meta name='og:image' content={'/icons/share.png'} />
      <meta name='og:site_name' content={title} />
      <meta name='og:description' content={description} />

      <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
      <link rel='apple-touch-icon' sizes='16x16' href='/icons/favicon-16x16.png' />
      <link rel='apple-touch-icon' sizes='32x32' href='/icons/favicon-32x32.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
      <link rel='manifest' href='/manifest.json' />
      <link rel='mask-icon' color='#000000' href='/icons/safari-pinned-tab.svg' />
      <link rel='apple-touch-startup-image' href='img/logo.png' />

      {/* Meta Tags for HTML pages on Mobile */}
      {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
      <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
      <meta name='theme-color' content='#000' />
      <link rel='shortcut icon' href='/icons/favicon.ico' />

      {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
    </Head>
  )
}
