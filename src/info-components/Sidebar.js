import React, { useState } from 'react';

const Sidebar = ({ chosenUrl, overthrown, setOverthrown }) => {

    const axios = require('axios');
    const [info, setInfo] = useState(['SELECT TIMELINE POINT']);

    let scrape_url = "https://asia-east2-cultivated-card-319407.cloudfunctions.net/scrape_plot?url="

    if (chosenUrl.url !== undefined && !overthrown) {
        axios.get(scrape_url + chosenUrl.url)
            .then(function (response) {
                let infoList = []
                for (const [key, value] of Object.entries(response.data)) {
                    infoList.push(value)
                }
                setInfo(infoList)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    let generate_url = "https://asia-east2-cultivated-card-319407.cloudfunctions.net/generate_prompt?url="

    function handleOverthrow() {
        setOverthrown(true);
        setInfo(['...Removing restraints...']);

        for (let i = 0; i < 10; i++) {
            axios.get(generate_url + chosenUrl.url)
                .then(function (response) {
                    let promptList = ["ALTERNATE BRANCH DETECTED: " + response.data + "..."]
                    setInfo(promptList)
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    }

    return (
        <div className="sidebar">
            <div className="infobox" id="heading">
                <h3>THE SACRED TIMELINE</h3>
            </div>
            <div className="infobox" id="details">
                {info.map((paragraph) =>
                    <p>{paragraph}</p>
                )}
            </div>
            <button className="overthrow" onClick={handleOverthrow}>
                OVERTHROW TIME KEEPERS
            </button>
        </div>
    )
}

export default Sidebar;