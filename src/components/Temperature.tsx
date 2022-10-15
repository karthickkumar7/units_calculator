import { BaseSyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Units {
    cel: string;
    far: string;
    kel: string;
}

const Temperature = () => {
    const [units, setUnits] = useState<Units>({ cel: '', far: '', kel: '' });

    const convertions = (e: BaseSyntheticEvent) => {
        switch (e.target.id) {
            case 'cel':
                setUnits({
                    cel: e.target.value,
                    far: String(Number(e.target.value) * 1.8 + 32),
                    kel: String(Number(e.target.value) + 273.15),
                });
                return;
            case 'far':
                setUnits({
                    cel: String(((Number(e.target.value) - 32) * 5) / 9),
                    far: e.target.value,
                    kel: String(
                        ((Number(e.target.value) - 32) * 5) / 9 + 273.15
                    ),
                });
                return;
            case 'kel':
                setUnits({
                    cel: String(Number(e.target.value) - 273.15),
                    far: String((Number(e.target.value) - 273.15) * 1.8),
                    kel: e.target.value,
                });
                return;
        }
    };

    return (
        <div className="w-full h-full p-4 flex flex-col">
            <h1 className="text-2xl text-red-500 font-semibold my-4">
                Temperature Converter
            </h1>
            <div className="flex justify-between items-center w-[350px] mb-4">
                <label htmlFor="cel" className="text-lg font-semibold">
                    celcius
                </label>
                <input
                    type="text"
                    id="cel"
                    value={units.cel}
                    placeholder="0"
                    onChange={convertions}
                    className="border px-4 py-2 mx-2 outline-none"
                />
            </div>
            <div className="flex justify-between items-center w-[350px] mb-4">
                <label htmlFor="far" className="text-lg font-semibold">
                    farenheit
                </label>
                <input
                    type="text"
                    id="far"
                    placeholder="0"
                    value={units.far}
                    onChange={convertions}
                    className="border px-4 py-2 mx-2 outline-none"
                />
            </div>
            <div className="flex justify-between items-center w-[350px] mb-4">
                <label htmlFor="kel" className="text-lg font-semibold">
                    kelvin
                </label>
                <input
                    type="text"
                    id="kel"
                    placeholder="0"
                    value={units.kel}
                    onChange={convertions}
                    className="border px-4 py-2 mx-2 outline-none"
                />
            </div>
            <button
                className="px-4 py-3 md:my-6 rounded uppercase font-semibold bg-yellow-400 text-black"
                onClick={() => setUnits({ cel: '', far: '', kel: '' })}
            >
                Reset
            </button>
        </div>
    );
};

export default Temperature;
