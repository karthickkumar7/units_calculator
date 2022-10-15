import React, { BaseSyntheticEvent, useEffect, useState } from 'react';

const inputs = [
    {
        id: 1,
        name: 'a',
    },
    {
        id: 2,
        name: 'b',
    },
    {
        id: 3,
        name: 'c',
    },
    {
        id: 4,
        name: 'd',
    },
    {
        id: 5,
        name: 'e',
    },
    {
        id: 6,
        name: 'h',
    },
    {
        id: 7,
        name: '&alpha;',
    },
    {
        id: 8,
        name: '&beta;',
    },
    {
        id: 9,
        name: '&theta;',
    },
    {
        id: 10,
        name: '&gamma;',
    },
];

const Test = () => {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [d, setD] = useState('');
    const [e, setE] = useState('');
    const [h, setH] = useState('');
    const [al, setAL] = useState('');
    const [be, setBE] = useState('');
    const [ga, setGA] = useState('');
    const [th, setTH] = useState('');

    const mapIdToValue = (id: number) => {
        switch (id) {
            case 1:
                return a;
            case 2:
                return b;
            case 3:
                return c;
            case 4:
                return d;
            case 5:
                return e;
            case 6:
                return h;
            case 7:
                return al;
            case 8:
                return be;
            case 9:
                return ga;
            case 10:
                return th;
        }
    };

    const inputHandler = (e: BaseSyntheticEvent, id: number) => {
        switch (id) {
            case 1:
                setA(e.target.value);
                return;
            case 2:
                setB(e.target.value);
                return;
            case 3:
                setC(e.target.value);
                return;
            case 4:
                setD(e.target.value);
                return;
            case 5:
                setE(e.target.value);
                return;
            case 6:
                setH(e.target.value);
                return;
            case 7:
                setAL(e.target.value);
                return;
            case 8:
                setBE(e.target.value);
                return;
            case 9:
                setGA(e.target.value);
                return;
            case 10:
                setTH(e.target.value);
                return;
        }
    };

    // useEffect(() => {
    //     if (a && c) {
    //         setH(String(Number()));
    //     }
    // }, [a, c]);

    useEffect(() => {
        if (c && h) {
            setA(String(0.5 * Number(c) * Number(h)));
        }
    }, [h, c]);

    useEffect(() => {
        if (a && h) {
            setD(
                String(
                    Math.sqrt(Math.pow(Number(a), 2) - Math.pow(Number(h), 2))
                )
            );
        }
    }, [h, a]);

    useEffect(() => {
        if (b && h) {
            setE(
                String(
                    Math.sqrt(Math.pow(Number(b), 2) - Math.pow(Number(h), 2))
                )
            );
        }
    }, [h, b]);

    useEffect(() => {
        if (d && e) {
            setC(String(Number(d) + Number(e)));
        }
    }, [d, e]);

    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-[450px] bg-slate-100">
                <img src="./assets/acute.png" alt="" className="w-[300px]" />
            </div>
            <div className="px-4 w-[500px]">
                {inputs.map((inp) => (
                    <React.Fragment key={inp.id}>
                        <label htmlFor={inp.name} className="text-xl">
                            {inp.name}
                        </label>
                        <input
                            type="text"
                            id="a"
                            placeholder="0"
                            value={mapIdToValue(inp.id)}
                            onChange={(e) => inputHandler(e, inp.id)}
                            className="w-full px-4 py-3 text-xl font-semibold outline-none border rounded"
                        />
                    </React.Fragment>
                ))}
                <button className="px-4 py-3 mt-3 uppercase rounded bg-blue-600 text-white">
                    calculate
                </button>
            </div>
        </div>
    );
};

export default Test;
