import { check, service1, service2, service3 } from '@/assets'
import { brainwaveServices, brainwaveServicesIcons } from '@/constants'

import { Generating } from './design/Generating'
import { Heading } from './design/Heading'
import { Gradient } from './design/Hero'
import { PhotoChatMessage, VideoBar, VideoChatMessage } from './design/Services'
import { Section } from './Section'

export function Services() {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <div
            className="relative z-1 mb-5 flex h-[39rem] items-center overflow-hidden rounded-3xl border
              border-n-1/10 p-8 lg:p-20 xl:h-[46rem]"
          >
            <div className="pointer-events-none absolute left-0 top-0 size-full md:w-3/5 xl:w-auto">
              <img
                src={service1}
                alt="Smartest AI"
                className="size-full object-cover md:object-right"
                width={800}
                height={730}
              />
            </div>

            <div className="relative z-1 ml-auto max-w-[17rem]">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlock the potential of AI-powered applications
              </p>

              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start border-t border-n-6 py-4"
                  >
                    <img src={check} alt="check" width={24} height={24} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating
              className="lg-right-auto absolute bottom-4 left-4 right-4 border border-n-1/10 lg:bottom-8
                lg:left-1/2 lg:-translate-x-1/2"
            />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] overflow-hidden rounded-3xl border border-n-1/10">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  alt="robot"
                  className="size-full object-cover"
                  width={630}
                  height={750}
                />
              </div>

              <div
                className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-n-8/0 to-n-8/90
                  p-8 lg:p-15"
              >
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature.Try it now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="lg:min-h-46rem] overflow-hidden rounded-3xl bg-n-7 p-4">
              <div className="px-4 py-12 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world&apos;s most powerful AI photo and video art
                  generation engine. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((icon, index) => (
                    <li
                      key={index}
                      className={`flex items-center justify-center rounded-2xl ${
                        index === 2
                          ? 'size-[3rem] bg-conic-gradient p-0.25 md:size-[4.5rem]'
                          : 'flex size-10 rounded-2xl bg-n-6 md:size-15'
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? 'flex size-full items-center justify-center rounded-[1rem] bg-n-7'
                            : ''
                        }
                      >
                        <img src={icon} alt={icon} width={24} height={24} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] overflow-hidden rounded-xl bg-n-8 md:h-[25rem]">
                <img
                  src={service3}
                  alt="Scary robot"
                  className="size-full object-cover"
                  width={520}
                  height={400}
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  )
}
