import mdl from './modules';
import axios from 'axios';
import randomuuid from './randomuuid';
import Leaderboard from './leaderboard';
import './index.css';

var downX, downY, upX, upY, placeX, placeY, lastXY, clicked = false;
function App() {
    if (localStorage.getItem('id') == undefined) randomuuid();
    const [clicktime, changeClickTime] = mdl.React.useState(Number(localStorage.getItem('click')))
    const [checkeff, changeCheckEff] = mdl.React.useState(0)
    const [windowHeight, changeWindowHeight] = mdl.React.useState(window.innerHeight)
    const [windowWidth, changeWindowWidth] = mdl.React.useState(window.innerWidth)
    const [baropen, changeBarOpenStatus] = mdl.React.useState(false)
    const [barClass, changeBarClass] = mdl.React.useState("bar")
    const [Worldwide, changeWorldwide] = mdl.React.useState(0)

    //#region listen
    mdl.React.useEffect(async () => {
        if (clicked) {
            localStorage.setItem('click', clicktime)
            var Formdata = new FormData();
            Formdata.append("id", localStorage.getItem('id'));
            Formdata.append("click", clicktime);
            var req = new XMLHttpRequest();
            req.open("POST", "/action.php");
            req.send(Formdata);

            var res = await axios.get('/clicktime.php');
            var data = res.data.click
            localStorage.setItem('click', data)
            clicked = false;
        }
    }, [checkeff])
    mdl.React.useEffect(() => {
        axios.get('/select.php').then(res => changeWorldwide(res.data))
    })
    mdl.React.useEffect(async () => {
        axios.get('/clicktime.php').then(res => {
            localStorage.setItem('click', Number(res.data.click))
            changeClickTime(Number(res.data.click))
        })
    }, [])
    var resize = (e) => {
        changeWindowWidth(window.innerWidth)
        changeWindowHeight(window.innerHeight)
    }
    mdl.React.useEffect(() => {
        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize)
        }
    })
    //#endregion

    //#region function
    /**
     * mousedown
     * @param {MouseEvent} e 
     */
    const mousedown = (e) => {
        document.getElementsByClassName('image')[0].style.backgroundImage = 'url(https://popcat.click/img/op.353767c3.png)';
        downX = parseInt(e.clientX);
        downY = parseInt(e.clientY);
    }
    /**
     * mouseup
     * @param {MouseEvent} e 
     */
    const mouseup = async (e) => {
        document.getElementsByClassName('image')[0].style.backgroundImage = 'url(https://popcat.click/img/p.1e9d00be.png)';
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
    }
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
            <div className={'img image'}>
                <div id="ClickTime" className={'ClickTime'}>{clicktime}</div>
            </div>
            <section data-leaderboard style={{ display: 'block' }}>
                {/* ≔ */}
                <div className={barClass} style={{ display: 'flex' }} onMouseDown={barclick}>
                    <h1 data-leaderboard>🏆</h1>
                    <div data-score>
                        🌍 Worldwide:&nbsp;{Worldwide}
                    </div>
                    <div data-pull>
                        <button className={"show"}>
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