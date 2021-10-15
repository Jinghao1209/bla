import mdl from './modules';
import axios from 'axios';
import randomuuid from './randomuuid';
import Leaderboard from './leaderboard';
//#region CSS
import Character_1 from './people/character/Character 500x500-1.png';
import Character_2 from './people/character/Character 500x500-2.png';
import Character_3 from './people/character/Character 500x500-3.png';
import Character_4 from './people/character/Character 500x500-4.png';
import Character_5 from './people/character/Character 500x500-5.png';
import Character_6 from './people/character/Character 500x500-6.png';
import Character_7 from './people/character/Character 500x500-7.png';
import Character_8 from './people/character/Character 500x500-8.png';
import Character_9 from './people/character/Character 500x500-9.png';
import Character_10 from './people/character/Character 500x500-10.png';
import Character_11 from './people/character/Character 500x500-11.png';
import Character_12 from './people/character/Character 500x500-12.png';
import Character_13 from './people/character/Character 500x500-13.png';
import Character_14 from './people/character/Character 500x500-14.png';
import Character_15 from './people/character/Character 500x500-15.png';
import Character_16 from './people/character/Character 500x500-16.png';
import Character_17 from './people/character/Character 500x500-17.png';
import Character_18 from './people/character/Character 500x500-18.png';
import Character_19 from './people/character/Character 500x500-19.png';
import Character_20 from './people/character/Character 500x500-20.png';
import Character_21 from './people/character/Character 500x500-21.png';
import Character_22 from './people/character/Character 500x500-22.png';
import Character_23 from './people/character/Character 500x500-23.png';
import Character_24 from './people/character/Character 500x500-24.png';
import Character_25 from './people/character/Character 500x500-25.png';
import Character_26 from './people/character/Character 500x500-26.png';
import Character_27 from './people/character/Character 500x500-27.png';
import Character_28 from './people/character/Character 500x500-28.png';
import Character_29 from './people/character/Character 500x500-29.png';
import Character_30 from './people/character/Character 500x500-30.png';
import './index.css';
//#endregion

let downX, downY, upX, upY, placeX, placeY, lastXY, clicked = false;
function App() {
    if (localStorage.getItem('id') == undefined) randomuuid();
    const [clicktime, changeClickTime] = mdl.React.useState(parseInt(localStorage.getItem('click')))
    const [checkeff, changeCheckEff] = mdl.React.useState(0)
    const [windowHeight, changeWindowHeight] = mdl.React.useState(window.innerHeight)
    const [windowWidth, changeWindowWidth] = mdl.React.useState(window.innerWidth)
    const [baropen, changeBarOpenStatus] = mdl.React.useState(false)
    const [barClass, changeBarClass] = mdl.React.useState("bar")
    const [Worldwide, changeWorldwide] = mdl.React.useState(0)
    const [characterSrc, setCharacterSrc] = mdl.React.useState(Character_1);

    //#region listen
    mdl.React.useEffect(async () => {
        if (clicked) {
            localStorage.setItem('click', clicktime);
            axios.post("/action.php", {
                id: localStorage.getItem('id'),
                click: clicktime
            }).then(res => {
                let data = res.data.click;
                localStorage.setItem('click', data);
                clicked = false;
            })
        }
    }, [checkeff])
    // Render worldwide
    mdl.React.useEffect(() => {
        axios.get('/select.php').then(res => changeWorldwide(res.data))
    })
    // Render click time
    mdl.React.useEffect(() => {
        axios.get('/action.php').then(res => {
            localStorage.setItem('click', parseInt(res.data.click))
            changeClickTime(parseInt(res.data.click))
        })
        changeCharacter(false);
    }, [])
    // character
    mdl.React.useEffect(() => changeCharacter, [clicktime])
    const resize = (e) => {
        changeWindowWidth(window.innerWidth)
        changeWindowHeight(window.innerHeight)
    }
    mdl.React.useEffect(() => {
        window.addEventListener("resize", resize)
        return () => window.removeEventListener("resize", resize)
    })
    //#endregion

    //#region function
    /**
     * @param {boolean} beaten 
     */
    const changeCharacter = (beaten) => {
        if (clicktime <= 100) { // 1...100
            !beaten ? setCharacterSrc(Character_1) : setCharacterSrc(Character_2);
        } else if (clicktime > 100 && clicktime <= 200) { // 101...200
            !beaten ? setCharacterSrc(Character_3) : setCharacterSrc(Character_4);
        } else if (clicktime > 200 && clicktime <= 300) { // 201...300...
            !beaten ? setCharacterSrc(Character_5) : setCharacterSrc(Character_6);
        } else if (clicktime > 300 && clicktime <= 400) {
            !beaten ? setCharacterSrc(Character_7) : setCharacterSrc(Character_8);
        } else if (clicktime > 400 && clicktime <= 500) {
            !beaten ? setCharacterSrc(Character_9) : setCharacterSrc(Character_10);
        } else if (clicktime > 500 && clicktime <= 600) {
            !beaten ? setCharacterSrc(Character_11) : setCharacterSrc(Character_12);
        } else if (clicktime > 600 && clicktime <= 700) {
            !beaten ? setCharacterSrc(Character_13) : setCharacterSrc(Character_14);
        } else if (clicktime > 700 && clicktime <= 800) {
            !beaten ? setCharacterSrc(Character_15) : setCharacterSrc(Character_16);
        } else if (clicktime > 800 && clicktime <= 900) {
            !beaten ? setCharacterSrc(Character_17) : setCharacterSrc(Character_18);
        } else if (clicktime > 900 && clicktime <= 1000) {
            !beaten ? setCharacterSrc(Character_19) : setCharacterSrc(Character_20);
        } else if (clicktime > 1000 && clicktime <= 2000) {
            !beaten ? setCharacterSrc(Character_21) : setCharacterSrc(Character_22);
        } else if (clicktime > 2000 && clicktime <= 3000) {
            !beaten ? setCharacterSrc(Character_23) : setCharacterSrc(Character_24);
        } else if (clicktime > 3000 && clicktime <= 4000) {
            !beaten ? setCharacterSrc(Character_25) : setCharacterSrc(Character_26);
        } else if (clicktime > 4000 && clicktime <= 5000) {
            !beaten ? setCharacterSrc(Character_27) : setCharacterSrc(Character_28);
        } else if (clicktime > 5000 && clicktime <= 6000) {
            !beaten ? setCharacterSrc(Character_29) : setCharacterSrc(Character_30);
        }
    }
    /**
     * mousedown
     * @param {MouseEvent} e 
     */
    const mousedown = (e) => {
        changeCharacter(true);
        downX = parseInt(e.clientX);
        downY = parseInt(e.clientY);
    }
    /**
     * mouseup
     * @param {MouseEvent} e 
     */
    const mouseup = (e) => {
        upX = parseInt(e.clientX)
        upY = parseInt(e.clientY)
        upX > downX ? placeX = upX - downX : placeX = downX - upX;
        upY > downY ? placeY = upY - downY : placeY = downY - upY;
        placeX = placeX * placeX;
        placeY = placeY * placeY;
        if (placeX > placeY) {
            lastXY = Math.sqrt(placeX - placeY, 2);
        } else {
            lastXY = Math.sqrt(placeY - placeX, 2);
        }
        if (lastXY > 10) {
            clicked = true;
            changeClickTime(clicktime + 1)
            changeCheckEff(checkeff + 1)
        }
        changeCharacter(false);
    };
    const barclick = () => {
        if (!baropen) {
            changeBarOpenStatus(true)
            changeBarClass("bar open")
        } else {
            changeBarOpenStatus(false)
            changeBarClass("bar")
        }
    }
    //#endregion

    return (
        <div
            id='app'
            style={{ width: windowWidth, height: windowHeight }}
            onMouseDown={(e) => mousedown(e)}
            onMouseUp={(e) => mouseup(e)}
        >
            <p>POP</p>
            <div className="img">
                <div id="ClickTime" className="ClickTime">{clicktime}</div>
                <img src={characterSrc} />
            </div>
            <section data-leaderboard style={{ display: 'block' }}>
                {/* ≔ */}
                <div className={barClass} style={{ display: 'flex' }} onMouseDown={barclick}>
                    <h1 data-leaderboard>🏆</h1>
                    <div data-score>
                        🌍 Worldwide:&nbsp;{Worldwide}
                    </div>
                    <div data-pull>
                        <button className="show">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {baropen && <Leaderboard />}
            </section>
        </div>
    )
}

export default App;