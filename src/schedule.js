/* eslint-disable no-unused-vars */

import React from 'react';
import styles from './page.css';


const Day = ({day, date, children}) => (
    <div className={styles.day}>
        <div className={styles.dayHeader}>
            <div className={styles.dayHeaderDay}>{day}</div>
            <div className={styles.dayHeaderDate}>{date}</div>
        </div>
        <div className={styles.dayEntries}>
            {React.Children.map(children, (c, key) => React.cloneElement(c, {key}))}
        </div>
    </div>
);

// There are the hours in the day. This serves as the domain for the y-position
// of the events.
const dMin = 9;
const dMax = 21;

const pct = x => (x*100) + '%';
const fmtTime = x => {
    const h = `${Math.floor(x)}`;
    const m = x === Math.round(x) ? ':00' : (':' + (x - Math.floor(x)).toFixed(2).slice(2));
    return h + m;
}

const DPoint = ({t, label}) => (
    <div className={styles.dPoint} style={{top: pct((t - dMin) / (dMax - dMin))}}>
        <div className={styles.timeHeadline}>{label}</div>
        <div className={styles.timeHours}>{fmtTime(t)}</div>
    </div>
)

const DRange = ({t0, t1, label, location}) => (
    <div className={styles.dTalk + ' ' + (location ? styles['dt-' + location] : '')} style={{top: pct((t0 - dMin) / (dMax - dMin)), height: pct((t1 - t0) / (dMax - dMin))}}>
        <div className={styles.timeHeadline}>{label}</div>
        <div className={styles.timeHours}>{fmtTime(t0)}<span className={styles.timeHoursTill}> – {fmtTime(t1)}</span></div>
    </div>
)

export default () => (
    <div className={styles.container}>
        <a id='schedule' />
        <h1>Розклад</h1>

        <p>
            Всі доповіді відбуватимуться в приміщенні Русанівського Ліцею.
        </p>

        <section className={styles.schedule}>
            <div className={styles.scheduleLabel}>
                <span>{fmtTime(dMin)}</span>
                <span>{fmtTime(dMax)}</span>
            </div>

            <Day day='Friday' date='21 квітня'>
                <DPoint t={9} label='Відкриття дверей' />
                <DRange t0={10} t1={11} label='Доповідь' location='aula' />
                <DRange t0={11} t1={12} label='Доповідь' location='aula' />
                <DRange t0={12} t1={13} label='Обід' location='mensa' />
                <DRange t0={13} t1={14} label='Доповідь' location='aula' />
                <DRange t0={14} t1={15} label='Доповіді-блискавки' location='aula' />
                <DRange t0={15} t1={15} label='Панельна дискусія' location='aula' />
                <DRange t0={16} t1={17} label='Піцца' location='outside' />
            </Day>

        </section>
    </div>
);
