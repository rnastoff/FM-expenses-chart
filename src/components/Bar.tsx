import React from 'react';

import styles from './Bar.module.css';


const Bar: React.FC<{ className: string, height: string, amount: string, day: string }> = (props) => {
  let barStyle = {
    height: props.height
  }

  return (
    <div className={styles.barGroup}>

      <div className={styles.verticalBarContainer}>

        <div className={`${styles.verticalBar} ${props.className}`} style={barStyle}>
          <div className={styles.amountNumber}>{props.amount}</div>
        </div>
      </div>

      <div className={styles.day}>{props.day}</div>
    </div>
  )
}

export default Bar;