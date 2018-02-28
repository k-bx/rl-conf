import React from 'react';
import {twitterIcon, githubIcon, clockIcon} from './icons.js';
import styles from './page.css';


const Speaker = ({img, title, author, github, twitter, children}) => (
    <div className={styles.talk}>
        <div className={styles.talkTop}>
            <img alt={author} className={'lazyload ' + styles.talkImage} data-src={img} />

            <div className={styles.talkMeta}>
                <h2 className={styles.talkTitle}>{author}</h2>
                <div className={styles.talkMetaTop}>
                    { false && <div className={styles.talkAuthor}>{author}</div>}
                    {github && <a className={styles.talkIconLink} href={"https://github.com/" + github}>{githubIcon}</a>}
                    {twitter && <a className={styles.talkIconLink} href={"https://twitter.com/" + twitter}>{twitterIcon}</a>}
                </div>
            </div>
        </div>
        {false && <div className={styles.talkWhen}>
            <div className={styles.talkClockIcon}>{clockIcon}</div>
            Sunday 1am
        </div>}
        <div className={styles.talkAbstract}>{children}</div>
    </div>
);


const TimeAndPlace = ({children}) => (
    <div className={styles.speakerTimeAndPlace}>{children}</div>
);


export default () => (
    <div className={styles.talks}>
        <a id='speakers' />
        <h1>Спікери</h1>

        <div className={styles.talksSection}>

            <Speaker author="Костянтин Рибніков" img={require('../static/rybnikov.jpg')} twitter='ko_bx'>
                {/* <TimeAndPlace>Keynote on Sunday 10:00</TimeAndPlace> */}
                Костя випусився з РЛ 2006 року. Haskell-програміст та VP of Engineering в компанії <a href="http://www.thoughtleadr.com" target="_blank">ThoughtLeadr</a>, організатор <a href="https://github.com/KyivHaskell/haskell-study-group" target="_blank">Kyiv Haskell Study Group</a>. Отримав ступінь бакалавра в КПІ, ФІОТ за спеціальністю Обчислювальна Техніка.
            </Speaker>

            <Speaker author="Та інші..." img={require('../static/unknown-speaker.svg')}>
                Згодом буде додано інших спікерів
            </Speaker>
        </div>
    </div>
);

/*
            <Speaker author="Niki Vazou" img={require('../static/niki-vazou.jpg')} twitter='nikivazou'>
                Niki Vazou is a post-doc scholar at PLUM of University of Maryland, focusing mostly on refinement types, static program verification, and type systems.  She is the author of <a href="https://ucsd-progsys.github.io/liquidhaskell-blog/">Liquid Haskell</a>, a type system extension to GHC that lets you add sophisticated predicates to type signatures.
            </Speaker>

            <Speaker author="Stephen Diehl" img={require('../static/stephen-diehl.jpg')} github='sdiehl' twitter='smdiehl'>
                Stephen is a Haskell developer, entrepreneur, and financial systems architect from Boston. His open source
                work is around numerical computing, compilers, security, and improving Haskell documentation.
                Author of the amazing <a href="http://dev.stephendiehl.com/hask/">What I Wish I Knew When Learning Haskell</a>.
            </Speaker>
*/
