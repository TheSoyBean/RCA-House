import './App.css'
import Navbar from './Navbar'
import Entry from './leaderboardEntry.tsx'
import data from './studentData.ts'

export default function AwardPoints(){
const students = data.map((student) =>{
    return <Entry {...student} />
})

    return (<>
    <head>
        <title>Student Store</title>
    </head>
    <body>
        <Navbar />
        <div className = "howManyWhatReason">
            <div className = "howMany">
                <h1>How Many Points do you want to give?</h1>
                <button  type = "button">+</button>
                <input type = "text" />
            </div>
            <div className = "whatReason">
                <h1>Why are you adding/removing these points?</h1>
                <select id = "options">
                    <option value = "select a response">Select a response</option>
                    <option value = "Disruptive">Disruptive</option>
                    <option value = "Did well on test">did well on test</option>
                    <option value = "Helping others">helping others</option>
                    <option value = "harmful behavior">harmful behavior</option>
                </select>
            </div>
        </div>
        
        <h1>What House is Recieving these points?</h1>
        <div className =  "whatHouse">
            <div className = "House1">
                <img src = "houseCrest.webp" alt ="House Crest Image" />
                <p>Barbarians2</p>
            </div>
            <div className = "House2">
                <img src = "houseCrest.webp" alt ="House Crest Image" />
                <p>Barbarians2</p>
            </div>
            <div className = "House3">
                <img src = "houseCrest.webp" alt ="House Crest Image" />
                <p>Barbarians2</p>
            </div>
            <div className = "House4">
                <img src = "houseCrest.webp" alt ="House Crest Image" />
                <p>Barbarians2</p>
            </div>
            <div className = "House5">
                <img src = "houseCrest.webp" alt ="House Crest Image" />
                <p>Barbarians2</p>
            </div>
            <div className = "House6">
                <img src = "houseCrest.webp" alt ="House Crest Image" />
                <p>Barbarians2</p>
            </div>
            <div className = "House7">
                <img src = "houseCrest.webp" alt ="House Crest Image" />
                <p>Barbarians2</p>
            </div>
            <div className = "House8">
                <img src = "houseCrest.webp" alt ="House Crest Image" />
                <p>Barbarians2</p>
            </div>
        </div>
        <h1>Who gets the points?</h1>
        <div className = "whoGetsPoints">
            { students }
        </div>
    </body>
    </>)
}