import React from 'react'

const Footer = () => {
  return (
    <nav className='fexBetween max-container padding-container relative z-30 py-5'>
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
    </nav>
  )
}

export default Footer