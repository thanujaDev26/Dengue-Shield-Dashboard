import Stats from "./Stats.jsx";
import Chart from "./Chart.jsx";
import Map from "./Map.jsx";
import SensorData from "./SensorData.jsx";


export default function Home() {

    return(
        <div className="Home">
            <div>
                <Stats/>
                <Chart/>
                <Map/>
                <SensorData/>
            </div>
        </div>
    )
}