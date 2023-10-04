import React from 'react'

const links = [
  {
    id: 'gmail',
    href: 'mailto:mh155@rice.edu',
    url: 'icons/gmail.svg'
  },
  {
    id: 'github',
    href: 'https://github.com/MoayedHajiAli',
    url: 'icons/github.svg'
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/moayedhajiali/',
    url: 'icons/linkedin.svg'

  },
  {
    id: 'codeforces',
    href: 'https://codeforces.com/profile/ReginaFelangi',
    url: 'icons/codeforces.svg'
  },
]

const Social = () => {
  return (
    <>
      {links.map(item => (
        <div key={item.id} style={{'disaply':'inline-block', "float":"left", "margin-right":"1rem",}}>
          <a href={item.href} target="_blank">
            <img
              sx={{
                margin: '0rem 0.5rem',
                filter: `invert(0.6)`,

              }}
              width="30px"
              src={item.url}
            />
          </a>
        </div>
      ))}
    </>
  )
}

export default Social
