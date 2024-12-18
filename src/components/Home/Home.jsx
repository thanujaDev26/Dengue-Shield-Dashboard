import Stats from "./Stats.jsx";
import Chart from "./Chart.jsx";
import Map from "./Map.jsx";


export default function Home() {

    return(
        <div className="Home">
            <div>
                <Stats/>
                <Chart/>
                <Map/>
            </div>
        </div>
    )
}