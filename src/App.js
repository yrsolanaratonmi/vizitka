
import './App.css';
import styles from './1.module.css'
import japan from './vids/japan.mp4'
import london from './vids/london.mp4'
import swiss from './vids/swiss.mp4'
import osaka from './vids/osaka.mp4'
import canada from './vids/canada.mp4'
import moscow from './vids/moscow.mp4'
import Typewriter from 'typewriter-effect'
import Bounce from 'react-reveal/Bounce'

function App() {


    const videos = [japan, london, swiss, osaka, canada]

    const video = Math.floor(Math.random() * videos.length)

  return (
    <div className="App">
         <video autoPlay loop muted className={styles.lol}>
             <source src={videos[video]} type='video/mp4'/>
         </video>
        <div className={styles.text}>
            <Typewriter

                onInit={(typewriter)=> {

                    typewriter

                        .typeString("yrsolanaratonmi")

                        .pauseFor(1000)
                        .start();
                }}
            />
        </div>
        <div className={styles.text2}>
            <Typewriter

                onInit={(typewriter)=> {

                    typewriter

                        .typeString("roma, 21 years old")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("love pascal programming language")
                        .start();
                }}
            />
        </div>
        <div className={styles.text2}>
            <Bounce left cascade>
                <div>
                    <h2>
                        <a href='https://github.com/yrsolanaratonmi' target="_blank" rel="noopener"><img className={styles.image} src = 'https://i.ibb.co/6JD6V1L/free-icon-github-889192.png'></img></a>
                    </h2>
                    <h2>
                        <a href='https://vk.com/mama_ubei_menya' target="_blank" rel="noopener"> <img className={styles.image} src='https://i.ibb.co/wh3VW9R/premium-icon-vk-2673633.png'></img></a>
                    </h2>
                    <h2>
                        <a href='https://t.me/yrsolanaratonmi' target="_blank" rel="noopener"><img className={styles.image} src = 'https://i.ibb.co/1dw561Y/telegram.png'></img></a>
                    </h2>

                </div>
            </Bounce>
        </div>





    </div>
  );
}

export default App;
