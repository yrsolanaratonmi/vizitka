
import './App.css';
import styles from './1.module.css'
import vid from './vids/chemical veins.mp4'
import Typewriter from 'typewriter-effect'
import Bounce from 'react-reveal/Bounce'

function App() {

  return (
    <div className="App">
         <video autoPlay loop muted className={styles.lol}>
             <source src={vid} type='video/mp4'/>
         </video>
        <Bounce left cascade>
            <div className={styles.text}>
                <a href='https://vk.com/mama_ubei_menya' className={styles.a} target='_blank'>
                    <Typewriter

                        onInit={(typewriter)=> {

                            typewriter

                                .typeString("yrsolanaratonmi")

                                .pauseFor(1000)
                                .start();
                        }}
                    />
                </a>

            </div>
        </Bounce>

        <Bounce right cascade>
            <div className={styles.text2}>
                <a href='https://wwwwwwwww.jodi.org/100cc/index.html' className={styles.b} target='_blank'>
                    <Typewriter

                        onInit={(typewriter)=> {

                            typewriter

                                .typeString("roma, 21 yrsold")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("trying to become a frontend software engineer. this is my card")
                                .start();
                        }}
                    />
                </a>

            </div>
        </Bounce>

        <div className={styles.text_block}>
            <Bounce left cascade>
                <div>
                    <h2>
                        <a href='https://github.com/yrsolanaratonmi' target="_blank" rel="noopener"><img className={styles.image} src = 'https://i.ibb.co/6JD6V1L/free-icon-github-889192.png'></img></a>
                    </h2>
                    <h2>
                        <a href='https://t.me/yrsolanaratonmi' target="_blank" rel="noopener"><img className={styles.image} src = 'https://i.ibb.co/1dw561Y/telegram.png'></img></a>
                    </h2>
                    <h2>
                        <a href='https://www.instagram.com/yrsolanaratonmi' target="_blank" rel="noopener"><img className={styles.image} src = 'https://i.ibb.co/zRFSRgj/instagram.png'></img></a>
                    </h2>

                </div>
            </Bounce>
        </div>




        <div className={styles.text3}>
            <Bounce left cascade>
                <div>
                    <h2>
                        <a href='https://www.kinopoisk.ru/user/23079690/' target="_blank" rel="noopener"><img className={styles.my} src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Kinopoisk_colored_favicon.svg/220px-Kinopoisk_colored_favicon.svg.png'></img></a>
                    </h2>
                    <h2>
                        <a href="https://shikimori.one/yrsolanaratonmi" target="_blank"><img className={styles.image} src="https://i.ibb.co/0XdXkhw/24500012-1.png" alt="24500012-1"></img></a>
                    </h2>
        
                    <h2>
                        <a href='https://steamcommunity.com/id/mama_ubei_menya' target="_blank" rel="noopener"> <img className={styles.image} src='https://i.ibb.co/Jsktdjq/steam.png'></img></a>
                    </h2>
        
                </div>
            </Bounce>
        </div>
        <Bounce bottom cascade>
<div className={styles.div}>

        <div className={styles.int}>
            <Typewriter

                onInit={(typewriter)=> {

                    typewriter

                        .typeString("social")

                        .pauseFor(1000)
                        .start();
                }}
            />
        </div>

        <div className={styles.int2}>
            <Typewriter

                onInit={(typewriter)=> {

                    typewriter

                        .typeString("internet hobbies")

                        .pauseFor(1000)
                        .start();
                }}
            />
        </div>



</div>
        </Bounce>




    </div>
  );
}

export default App;
