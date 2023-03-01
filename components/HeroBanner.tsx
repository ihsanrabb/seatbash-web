const HeroBanner = () => {
  return (
    <div className="hero-wrapper">
      <div className="content">
        <div className='hero-header'>
          <img src="/seatbash-logo.png" alt="seatbash logo" className="logo-icon" />
          <div className="burger-menu">
            <img src="/ic-menu.png" alt="menu" width={25} height={25} />
          </div>
        </div>
        <h1 className='hero-title'>
          <span className='blue'>Find</span> your <span className='blue'>seat</span> at The best concerts.
        </h1>
        <p className='hero-desc'>Seatbase is a platform that allows fans to buy and sell concert tickets among themselves.</p>
      </div>
    </div>
  )
}

export default HeroBanner;
