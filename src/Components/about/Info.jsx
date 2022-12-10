import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class='bx bxs-badge-check about__icon'></i>
        <h3 className="about__title">MERN Developer</h3>
        <span className="about__subtitle"></span>
      </div>

      <div className="about__box">
        <i class='bx bxs-badge-check about__icon'></i>
        <h3 className="about__title">Backend Developer</h3>
        <span className="about__subtitle">Completed all my College Project as backend developer</span>
      </div>

      <div className="about__box">
        <i class='bx bxs-badge-check about__icon'></i>
        <h3 className="about__title">Competitve Programmer</h3>
        <span className="about__subtitle">Having Good rating on different coding plateforms</span>
      </div>
    </div>
  )
}

export default Info