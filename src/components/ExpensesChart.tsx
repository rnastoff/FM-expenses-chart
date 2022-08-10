import { useState, useEffect } from 'react';

import styles from './ExpensesChart.module.css';

import Bar from './Bar';

import logo from '../images/logo.svg';

import spendingData from '../json/data';

const ExpensesChart = () => {
  const [data, setData] = useState<any[]>([]);


  useEffect(() => {
    let max = Math.max(...spendingData.map(day => day.amount));

    let formattedData = spendingData.map((day) => {
      let colorClass = max === day.amount ? styles.maxAmount : styles.verticalBarColor;
      let height = (day.amount / max) * 100 + "%";
      let amount = "$" + day.amount;

      return {
        ...day,
        amount: amount,
        height: height,
        colorClass: colorClass
      }
    });
    setData(formattedData);
  }, []);

  let barHtml = data.map((el, index) => {
    return <Bar className={el.colorClass} height={el.height} amount={el.amount} key={index} day={el.day} />;
  });

  return (
    <div className={styles.wrapper}>

      <div className={styles.balanceBox}>
        <div className={styles.balance}>
          <h2>My balance</h2>
          <div className={styles.balanceNumber}>$921.48</div>
        </div>

        <img src={logo} alt="logo" />
      </div>

      <div className={styles.spendingBox}>
        <h1>Spending - Last 7 days</h1>

        <div className={styles.chart}>{barHtml}</div>

        <hr />

        <div className={styles.total}>
          <div className={styles.thisMonth}>
            <h3>Total this month</h3>
            <div className={styles.totalNumber}>$478.33</div>
          </div>

          <div className={styles.percentage}>
            <div className={styles.percentNumber}>+2.4%</div>
            <h3>from last month</h3>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ExpensesChart;