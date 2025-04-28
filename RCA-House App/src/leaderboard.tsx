import './App.css'
import Navbar from './Navbar'
import Entry from './leaderboardEntry'
import data from './studentData.ts'

export default function Leaderboard(){
    const students = data.map((student) =>{
        return <Entry {...student} />
    })

    return(
        <>
    <head>
        <title>Leaderboard</title>
    </head>
    <body>
        <Navbar />
        <div className = "leaderboard">
            {students}
        </div>
    </body>
    </>
    )
}