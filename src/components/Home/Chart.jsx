import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Register required Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const lineChartData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [
        {
            label: 'Annual Reported Dengue Cases',
            data: [45000, 60000, 75000, 85000, 90000],
            borderColor: '#EF4444',
            backgroundColor: 'rgba(239, 68, 68, 0.2)',
            borderWidth: 2,
            tension: 0.3,
            pointBackgroundColor: '#EF4444',
        },
    ],
};

const lineChartOptions = {
    responsive: true,
    plugins: {
        legend: { display: true, position: 'top' },
    },
    scales: {
        x: { grid: { display: false }, title: { display: true, text: 'Year' } },
        y: { title: { display: true, text: 'Number of Cases' } },
    },
};

const progressValue = 75;

export default function Chart() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-16">
                    Dengue Analytics
                </h2>
                <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
                    {/* Line Chart */}
                    <div className="rounded-xl bg-gray-50 p-8 shadow-lg">
                        <h3 className="mb-4 text-2xl font-bold text-gray-800">Annual Reported Cases</h3>
                        <Line data={lineChartData} options={lineChartOptions}/>
                    </div>

                    {/* Circular Progress Bar */}
                    <div className="flex flex-col items-center justify-center rounded-xl bg-gray-50 p-8 shadow-lg">
                        <h3 className="mb-4 text-2xl font-bold text-gray-800">Places Checked Progress</h3>
                        <div className="w-40 h-40">
                            <CircularProgressbar
                                value={progressValue}
                                text={`${progressValue}%`}
                                styles={buildStyles({
                                    pathColor: 'blue',
                                    textColor: '#22C55E',
                                    trailColor: 'green',
                                    backgroundColor: '#F0FDF4',
                                    textSize: '16px',
                                })}
                            />
                        </div>
                        <p className="mt-6 text-lg text-gray-600">
                            75% of places have been inspected for dengue control.
                        </p>
                        <div className="mt-4 text-sm text-gray-500 flex space-x-4">
                            <div className="flex items-center">
                                <div className="w-6 h-6 mr-2" style={{backgroundColor:'blue'}}></div>
                                <p className="font-semibold">Completed</p>
                            </div>
                            <div className="flex items-center" >
                                <div className="w-6 h-6 mr-2" style={{backgroundColor:'green'}}></div>
                                <p className="font-semibold">Remaining</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
