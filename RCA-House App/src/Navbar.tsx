import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className = "NavBar">
            <img src = "src/assets/houseCrest.webp" className = "logo" alt ="House Crest Image" />
            <Link to = "/">House Points</Link>
            <Link to = "/leaderboard">Leaderboard</Link>
            <Link to = "/store">Student Store</Link>
            <Link to = "/profile">Profile</Link>
            <img src = "src/assets/picture.jpg" className = "photo" alt = "Profile Picture" />
        </div>
    )
}