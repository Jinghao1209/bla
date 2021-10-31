import './leaderboard.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboard = () => {
    const [a, ca] = useState([])
    /**
     * @returns {any[]} name[n][0] => Country, namme[n][1] => count
     */
    const getLeadercount = async () => {
        var response = await axios.get('/leaderboard.php')
        /**
         * @type {object}
         */
        var data = response.data
        var map = Object.entries(data)
        map.sort((a, b) => { return b[1] - a[1] })
        return map
    }
    useEffect(() => {
        getLeadercount().then(res => ca(res))
    })

    return (
        <main>
            <ol className={'list'}>
                <div className={'li_list'}>
                    <li>hidding...</li>
                    {a.map((value, index) => {
                        return (
                            <li key={index}>#{index+1}&nbsp;&nbsp;{value[0]}<right>{value[1]}</right></li>
                        )
                    })}
                </div>
            </ol>
            <center>Enjoy...</center>
        </main>
    )
}

export default Leaderboard;