import CountUp from 'react-countup';

const stats = [
    { id: 1, name: 'Total Dengue Cases', value: 90678 },
    { id: 2, name: 'Recovered Patients', value: 68456 },
    { id: 3, name: 'Deaths', value: 345 },
];

export default function Stats() {
    return (
        <div className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl mb-16">
                    Dengue Statistics Overview
                </h2>
                <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="relative flex flex-col items-center rounded-3xl bg-gradient-to-r from-white to-gray-100 shadow-xl p-8 sm:p-10 hover:shadow-2xl transition-shadow duration-300"
                        >
                            <dd className="text-5xl font-extrabold text-red-500 sm:text-6xl">
                                <CountUp end={stat.value} duration={5} separator="," />
                            </dd>
                            <dt className="mt-4 text-xl font-medium text-gray-700 tracking-wide uppercase">
                                {stat.name}
                            </dt>
                            <div className="absolute -z-10 h-20 w-20 rounded-full bg-red-300 opacity-20 blur-3xl" />
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}
