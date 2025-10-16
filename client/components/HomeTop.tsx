import HomeBottom from "./HomeBottom"

export default function Home() {
    const links = [
    { name: 'Personal Projects', href: '#personal' },
    { name: 'Group Projects', href: '#group' },
  ]

  const stats = [
    { name: 'Hours Experience', value: '800+' },
    { name: 'Programming Languages', value: '4' },
    { name: 'Libraries and Frameworks', value: '5+' },
  ]
  return (
    <>
     <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src="/images/blue-gradient-background-image.jpg"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 style={{width: ' fit-content'}} className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Abe Calder</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            Kia Ora! I&apos;m Abe, a Full Stack web developer located in Wellington, New 
            Zealand. I was born, and grew up in Raumati South. I love making 
            web applications, playing video games, and walking the dog. Here are a few of 
            my favourite personal and team projects that I would love to share 
            with you!
          </p>
            
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="social-links-wrapper" style={{display: 'flex'}}>
          <a href="https://github.com/abe-calder" className="text-3xl font-semibold text-white social-link" ><img alt="github-icon" src="/images/GitHub-Logo.png"></img></a>
          <a href="https://www.linkedin.com/in/abe-calder/" className="text-3xl font-semibold text-white social-link" ><img alt="linkedin-icon" style={{transform: 'translate(0, 1.75vh)'}} src="/images/linkedin-logo-png-transparent.png"></img></a>
          <a href="mailto: abecalder@gmail.com" className="text-3xl font-semibold text-white social-link" ><img alt="gmail-icon" style={{ width: '75%' }} src="/images/Gmail_icon_(2020).svg.webp"></img></a>
          <a href="/Abe-Calder-CV-Resume.pdf" download="Abe-Calder-CV" className="text-3xl font-semibold text-white social-link"><img style={{width: '80%'}} alt="cv-icon" src="/images/cv-icon.webp"></img></a>
        </div>
      </div>
      
    </div>
    <HomeBottom/>
    </>
  )
}