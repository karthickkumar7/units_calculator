import React from 'react';
import CategoryCard from '../components/CategoryCard';

const categories = [
    {
        _id: 1,
        title: 'Temperature',
        desc: 'convert tempearture units from celcius, kelvin and farenheit',
        route: 'temperature',
    },
    {
        _id: 2,
        title: '3d Geometries',
        desc: 'calculate the radius, diameter, surafce area, volume, etc of 3d objects such as shpere, cuboid, cone and cylinder',
        route: 'volume',
    },
    {
        _id: 3,
        title: 'Length',
        desc: 'convert lengths in multiple units in SI and imperial standards such as meter, mile, yard, feet, etc',
        route: 'length',
    },
    {
        _id: 4,
        title: '2d Geometries',
        desc: 'calculate the radius, area, perimeter, length and other dimensions of the 2d objects suck as circle, triangle, rectangle and elipse',
        route: 'area',
    },
    {
        _id: 5,
        title: 'Calculator',
        desc: 'calculator to perform simple calculations',
        route: 'calculator',
    },
    {
        _id: 6,
        title: 'Time',
        desc: 'convert units of time from and to seconds, minutes, hours, months, years, etc',
        route: 'time',
    },
];

const Home = () => {
    return (
        <div className={`${false ? 'bg-slate-900' : ''} container mx-auto`}>
            <div className="mb-4 p-2 flex justify-evenly items-center">
                <h1 className="uppercase text-center text-2xl font-semibold text-green-600">
                    units converter
                </h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((cat) => (
                    <React.Fragment key={cat._id}>
                        <CategoryCard
                            title={cat.title}
                            desc={cat.desc}
                            route={cat.route}
                        />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Home;
