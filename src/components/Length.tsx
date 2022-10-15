import React, { BaseSyntheticEvent, useState } from 'react';

const units = [
    {
        _id: 1,
        name: 'meter',
    },
    {
        _id: 2,
        name: 'kilometer',
    },
    {
        _id: 3,
        name: 'millimeter',
    },
    {
        _id: 4,
        name: 'mile',
    },
    {
        _id: 5,
        name: 'yard',
    },
    {
        _id: 6,
        name: 'feet',
    },
    {
        _id: 7,
        name: 'inch',
    },
];

const Length = () => {
    const [m, setM] = useState('');
    const [km, setKM] = useState('');
    const [mm, setMM] = useState('');
    const [ml, setML] = useState('');
    const [y, setY] = useState('');
    const [f, setF] = useState('');
    const [i, setI] = useState('');

    const mapKeyToValue = (name: string) => {
        switch (name) {
            case 'meter':
                return m;
            case 'kilometer':
                return km;
            case 'millimeter':
                return mm;
            case 'mile':
                return ml;
            case 'yard':
                return y;
            case 'feet':
                return f;
            case 'inch':
                return i;
        }
    };

    const conversionHandler = (e: BaseSyntheticEvent) => {
        switch (e.target.id) {
            case 'meter':
                setM(e.target.value);
                setKM(String(Number(e.target.value) / 1000));
                setMM(String(Number(e.target.value) * 1000));
                setML(String(Number(e.target.value) / 1609));
                setY(String(Number(e.target.value) * 1.094));
                setF(String(Number(e.target.value) * 3.281));
                setI(String(Number(e.target.value) * 39.37));
                return;
            case 'kilometer':
                setM(String(Number(e.target.value) * 1000));
                setKM(e.target.value);
                setMM(String(Number(e.target.value) * 1e6));
                setML(String(Number(e.target.value) / 1.609));
                setY(String(Number(e.target.value) * 1094));
                setF(String(Number(e.target.value) * 3281));
                setI(String(Number(e.target.value) * 39370));
                return;
            case 'millimeter':
                setM(String(Number(e.target.value) / 1000));
                setKM(String(Number(e.target.value) / 1e6));
                setMM(e.target.value);
                setML(String(Number(e.target.value) / 1.609e6));
                setY(String(Number(e.target.value) / 914.4));
                setF(String(Number(e.target.value) / 304.8));
                setI(String(Number(e.target.value) / 25.4));
                return;
            case 'mile':
                setM(String(Number(e.target.value) * 1609));
                setKM(String(Number(e.target.value) * 1.609));
                setMM(String(Number(e.target.value) * 1.609e6));
                setML(e.target.value);
                setY(String(Number(e.target.value) * 1760));
                setF(String(Number(e.target.value) * 5280));
                setI(String(Number(e.target.value) * 63360));
                return;
            case 'yard':
                setM(String(Number(e.target.value) / 1.094));
                setKM(String(Number(e.target.value) / 1094));
                setMM(String(Number(e.target.value) * 914.4));
                setML(String(Number(e.target.value) / 1760));
                setY(e.target.value);
                setF(String(Number(e.target.value) * 3));
                setI(String(Number(e.target.value) * 36));
                return;
            case 'feet':
                setM(String(Number(e.target.value) / 3.281));
                setKM(String(Number(e.target.value) / 3281));
                setMM(String(Number(e.target.value) * 304.8));
                setML(String(Number(e.target.value) / 5280));
                setY(String(Number(e.target.value) / 3));
                setF(e.target.value);
                setI(String(Number(e.target.value) * 12));
                return;
            case 'inch':
                setM(String(Number(e.target.value) / 39.37));
                setKM(String(Number(e.target.value) / 39370));
                setMM(String(Number(e.target.value) * 25.4));
                setML(String(Number(e.target.value) / 63360));
                setY(String(Number(e.target.value) / 36));
                setF(String(Number(e.target.value) / 12));
                setI(e.target.value);
                return;
        }
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
            </div>
        </div>
    );
};

export default Length;
