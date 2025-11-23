import React from 'react'
import SectionHeading from './SectionHeading'

function HowItWorks() {
  return (
    <div>
      <SectionHeading title='工作流程' subTitle='这期视频，我们使用 Vite 创建 React 项目，配置 Tailwind CSS，制作一个响应式的企业官网，从这个视频中，你会提高 HTML 和 CSS 的布局能力。' />

      <div className='mt-14 grid grid-cols-2 md:grid-cols-3 gap-6'>
        {
            [1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className='grid justify-items-center gray-y-2'>
                    <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle cx="28" cy="28" r="28" fill="#0070F4" />
                        <path d="M30.2 31L32 33H39" stroke="#99C5FA" strokeWidth="2" />
                        <path d="M18 23H23L24.8 25" stroke="#99C5FA" strokeWidth="2" />
                        <path d="M18 33H23L32 23H39" stroke="white" strokeWidth="2" />
                        <path
                            d="M36 30L39 33L36 36"
                            stroke="#99C5FA"
                            strokeWidth="2"
                            strokeLinecap="square"
                        />
                        <path
                            d="M36 26L39 23L36 20"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="square"
                        />
                    </svg>
                    <p className='text-xl font-bold mt-4 mb-2'>初步沟通</p>
                    <p className='text-gray-500'>Vue 3.x 全家桶完全指南与实战</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default HowItWorks
