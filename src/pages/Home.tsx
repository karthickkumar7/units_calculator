import React from 'react';
import CategoryCard from '../components/CategoryCard';

const categories = [
    {
        _id: 1,
        title: 'Temperature',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iusto soluta rerum.',
        route: 'temperature',
    },
    {
        _id: 2,
        title: 'Volume',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iusto soluta rerum.',
        route: 'volume',
    },
    {
        _id: 3,
        title: 'Length',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iusto soluta rerum.',
        route: 'length',
    },
    {
        _id: 4,
        title: 'Area',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iusto soluta rerum.',
        route: 'area',
    },
    {
        _id: 5,
        title: 'Calculator',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iusto soluta rerum.',
        route: 'calculator',
    },
    {
        _id: 6,
        title: 'Time',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iusto soluta rerum.',
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
                <div
                    className="w-[50px] h-[20px] rounded-full cursor-pointer bg-slate-200 transition-all relative"
                    // onClick={() => setDarkmode((pv) => !pv)}
                >
                    {!false ? (
                        <div className="w-1/2 h-full rounded-full bg-blue-600 duration-200 absolute left-0"></div>
                    ) : (
                        <div className="w-1/2 h-full rounded-full bg-blue-600 duration-200 absolute right-0"></div>
                    )}
                </div>
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
