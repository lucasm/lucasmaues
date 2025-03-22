import React from 'react'
import styles from './SvgAnimateMentorship.module.css'

const SvgAnimateMentorship = () => {
  return (
    <div className={styles.container}>
      <figure className={styles.figure1}>
        <svg viewBox="0 0 660 578" xmlns="http://www.w3.org/2000/svg">
          <path d="M161.088 3.16085C93.7459 12.4359 39.7433 57.1345 18.4831 120.645C-9.65409 204.735 -21.9034 324.588 104.66 379.254C133.841 391.851 161.732 400.665 188.15 406.51C376.714 448.24 499.332 243.466 379.431 84.2674C336.373 27.1252 268.387 -11.6208 161.088 3.16085Z"></path>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            data-leia-me="✦ Você decifrou a metáfora do código! Resolva sempre o problema primeiro! ✦">
            {'Código x Problema'}
          </text>
        </svg>
      </figure>
    </div>
  )
}

export default SvgAnimateMentorship
