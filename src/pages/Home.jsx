import '../styles/home.css'
import KINO_TEKI_SQUARE from '../assets/images/KINO-TEKI-SQUARE.png'

// Página a ser terminada (principal)
export default function Home(){
    return(
    <main>
        <article classNamev = 'robotPresentation'>
            <div>
                <h1 className = 'homeTitle'>KINO-TEKI</h1>
            </div>
            <div className = 'robotPresentation-container'>
                <div className = 'robotPresentation-container-photo'>
                    <img src = {KINO_TEKI_SQUARE} className = 'KINO_TEKI_SQUARE'/>
                </div>
                <div className = 'robotPresentation-container-text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in vulputate risus, sit amet pulvinar purus. Sed elementum tincidunt velit. Curabitur quis dolor rhoncus, pretium augue non, faucibus purus. Donec pellentesque pretium luctus. Praesent faucibus ligula nec dolor consectetur pulvinar. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in vulputate risus, sit amet pulvinar purus. Sed elementum tincidunt velit. Curabitur quis dolor rhoncus, pretium augue non, faucibus purus. Donec pellentesque pretium luctus. Praesent faucibus ligula nec dolor consectetur pulvinar. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in vulputate risus, sit amet pulvinar purus. Sed elementum tincidunt velit. Curabitur quis dolor rhoncus, pretium augue non, faucibus purus. Donec pellentesque pretium luctus. Praesent faucibus ligula nec dolor consectetur pulvinar. </p>
                </div>
            </div>
        </article>
        <article className = 'investmentProcess'>
            <h2></h2>
            {/* <Card/> => Elemento que reprensa card explicativo na tela home*/}
        </article>
        <article className = 'robotCTA'>
            <h2></h2>
            <img />
            <button></button>
        </article>
    </main>
    )
}