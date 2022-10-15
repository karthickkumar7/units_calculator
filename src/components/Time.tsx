import React, { BaseSyntheticEvent, useState } from 'react';

const units = [
    {
        _id: 1,
        name: 'second/s',
    },
    {
        _id: 2,
        name: 'milliseconds',
    },
    {
        _id: 3,
        name: 'minute/s',
    },
    {
        _id: 4,
        name: 'hour/s',
    },
    {
        _id: 5,
        name: 'day/s',
    },
    {
        _id: 6,
        name: 'month/s',
    },
    {
        _id: 7,
        name: 'year/s',
    },
];

const Time = () => {
    const [s, setS] = useState('');
    const [ms, setMS] = useState('');
    const [min, setMIN] = useState('');
    const [hr, setHR] = useState('');
    const [day, setDay] = useState('');
    const [mon, setMON] = useState('');
    const [y, setY] = useState('');

    const mapKeyToValue = (name: string) => {
        switch (name) {
            case 'second/s':
                return s;
            case 'milliseconds':
                return ms;
            case 'minute/s':
                return min;
            case 'hour/s':
                return hr;
            case 'day/s':
                return day;
            case 'month/s':
                return mon;
            case 'year/s':
                return y;
        }
    };

    const conversionHandler = (e: BaseSyntheticEvent) => {
        switch (e.target.id) {
            case 'second/s':
                setS(e.target.value);
                setMS(String(Number(e.target.value) * 1000));
                setMIN(String(Number(e.target.value) / 60));
                setHR(String(Number(e.target.value) / 3600));
                setDay(String(Number(e.target.value) / 86400));
                setMON(String(Number(e.target.value) / 2629746));
                setY(String(Number(e.target.value) / 31556952));
                return;
            case 'milliseconds':
                setS(String(Number(e.target.value) / 1000));
                setMS(e.target.value);
                setMIN(String(Number(e.target.value / 1000) / 60));
                setHR(String(Number(e.target.value / 1000) / 3600));
                setDay(String(Number(e.target.value) / 8.64e7));
                setMON(String(Number(e.target.value) / 2629746000));
                setY(String(Number(e.target.value) / 31556952000));
                return;
            case 'minute/s':
                setS(String(Number(e.target.value) * 60));
                setMS(String(Number(e.target.value) * 60000));
                setMIN(e.target.value);
                setHR(String(Number(e.target.value) / 60));
                setDay(String(Number(e.target.value) / 1440));
                setMON(String(Number(e.target.value) / 43800));
                setY(String(Number(e.target.value) / 525600));
                return;
            case 'hour/s':
                setS(String(Number(e.target.value) * 3600));
                setMS(String(Number(e.target.value) * 3600000));
                setMIN(String(Number(e.target.value) * 60));
                setHR(e.target.value);
                setDay(String(Number(e.target.value) / 24));
                setMON(String(Number(e.target.value) / 730));
                setY(String(Number(e.target.value) / 8760));
                return;
            case 'day/s':
                setS(String(Number(e.target.value) * 86400));
                setMS(String(Number(e.target.value) * 8.64e7));
                setMIN(String(Number(e.target.value) * 1440));
                setHR(String(Number(e.target.value) * 24));
                setDay(e.target.value);
                setMON(String(Number(e.target.value) / 30.417));
                setY(String(Number(e.target.value) / 365));
                return;
            case 'month/s':
                setS(String(Number(e.target.value) * 2629800));
                setMS(String(Number(e.target.value) * 2629800000));
                setMIN(String(Number(e.target.value) * 43800));
                setHR(String(Number(e.target.value) * 730));
                setDay(String(Number(e.target.value) * 30.417));
                setMON(e.target.value);
                setY(String(Number(e.target.value) / 12));
                return;

            case 'year/s':
                setS(String(Number(e.target.value) * 31556952));
                setMS(String(Number(e.target.value) * 31556926000));
                setMIN(String(Number(e.target.value) * 525600));
                setHR(String(Number(e.target.value) * 8760));
                setMON(String(Number(e.target.value) * 12));
                setY(e.target.value);
                return;
        }
    };

    const resetHandler = () => {
        setS('');
        setMS('');
        setHR('');
        setDay('');
        setMIN('');
        setY('');
        setMON('');
    };

    return (
        <div>
            <h1 className="text-2xl font-semibold uppercase text-green-600">
                length converter
            </h1>
            <div className="">
                {units.map((unit) => (
                    <div key={unit._id} className="flex flex-col p-2">
                        <label
                            htmlFor={unit.name}
                            className="text-lg font-semibold"
                        >
                            {unit.name}
                        </label>
                        <input
                            type="text"
                            placeholder="0"
                            id={unit.name}
                            value={mapKeyToValue(unit.name)}
                            onChange={conversionHandler}
                            className="px-2 py-4 outline-none border-2 rounded"
                        />
                    </div>
                ))}
                <button
                    className="ml-3 px-2 py-3 rounded bg-yellow-500 uppercase font-semibold"
                    onClick={resetHandler}
                >
                    reset
                </button>
            </div>
        </div>
    );
};

export default Time;
