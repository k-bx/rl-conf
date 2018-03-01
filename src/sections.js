import React from 'react'
import styles from './page.css';



export const Header = () => (
    <header className={styles.header}>
        <img className={styles.headerLogo} alt="RL Conf 2018, 21 April" src={require('../static/header-logo.png')} />
    </header>
);


export const About = () => (
    <div className={styles.container}>
        <a id='about' />
        <h1>Про подію</h1>
        <p>
        21 квітня, <a href="https://rl.kiev.ua/ua/" target="_blank">Русанівський Ліцей</a> організовує Конференцію Русанівського Ліцею 2018, на якій відбудуться доповіді випускників, панельні дискусії, спілкування із викладачами та інші активності.
        </p>

        <p>
            Конференція є безкоштовною та відкритою для всіх охочих, та має на меті зібрати в офлайні спільноту випускників, надати майданчик для спілкування з ліцеїстами в дружній та ненапруженій формі, замінити формат додаткових занять на свято.
        </p>

        <p>
            Це прекрасна можливість випускникам розказати про щось цікаве, що вони б самі хотіли знати, будучи учнями, завести нові знайомства, а дітям та викладачам — відчути, чим живуть колишні ліцеїсти.
        </p>

        <p>
            Окрім доповідей, на конференції буде панельна дискусія, а також всі охочі зможуть зробити коротку міні-доповідь (lightning talk) на вільну тему, аби розказати про цікаву ініціативу, поділитись короткою історією тощо.
        </p>
    </div>
);


export const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.innerFooter}>
            © 2017-2018 ZuriHac Organization Committee
            <div>
                <a className={styles.footerContactLink} href='mailto:tomas.carnecky@gmail.com'>tomas.carnecky@gmail.com</a>
                <div className={styles.footerLinkSeparator} />
                <a className={styles.footerContactLink} href='https://github.com/k-bx/rl-conf'>website source</a>
            </div>
        </div>
    </footer>
);

export const Sponsors = () => (
    <div>
        <h2>За підтримки</h2>
        <div className={styles.sponsors}>
            <a href="https://www.adjoint.io" target="_blank">
              <img className={'lazyload ' + styles.sponsor} alt="Adjoint Logo" data-src={require('../static/adjoint.png')} />
            </a>
            <a href="http://hub.digitalasset.com/events/zurich/zurihac" target="_blank">
              <img className={'lazyload ' + styles.sponsor} alt="Digital Asset Logo" data-src={require('../static/digitalasset-big-blue.png')} />
            </a>
            {/*
            <a href="https://developers.google.com/open-source/" target="_blank">
              <img className={'lazyload ' + styles.sponsor} alt="Google Open Source Programs Office, Google Logo" data-src={require('../static/google.png')} />
            </a>
            */}
            <a href="https://www.hsr.ch" target="_blank">
              <img className={'lazyload ' + styles.sponsor} alt="HSR Logo" data-src={require('../static/hsr.jpg')} />
            </a>
        </div>
    </div>
);


export const Contact = () => (
    <div className={styles.container}>
        <a id='contact' />
        <h1>Контакти</h1>
        <p>
            Якщо у вас виникли питання, зв'яжіться з <a href='mailto:k-bx@k-bx.com'>Костянтином Рибніковим</a> або надішліть повідомлення на <a href="https://www.facebook.com/rl.kiev.ua/">сторінку Русанівського Ліцею в Facebook</a>.
        </p>
    </div>
);

export const Conditions = () => (
    <div className={styles.container}>
        <a id='conditions' />
    </div>
);

export const Registration = () => (
    <div className={styles.container}>
        <a id='registration' />
        <h1>Реєстрація</h1>

        <a href="/register" className={styles.registrationForm}>
            Перейти до реєстрації
        </a>
    </div>
);

export const Beginners = () => (
    <div className={styles.container}>
   </div>
);

export const Venue = () => (
    <div className={styles.container}>
    </div>
);



const VenueImage = ({src}) => (
    <img className={'lazyload ' + styles.venueImage} alt="Venue" data-src={src} />
);

export const Media = () => (
    <section className={styles.media}>
    </section>
);

export const Cpp = () => (
    <div className={styles.container}>
    </div>
);

export const Food = () => (
    <div className={styles.container}>
    </div>
);
