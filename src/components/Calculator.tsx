import React, { useState } from 'react';

interface Number {
    id: number;
    name: string;
}

const buttons: Number[] = [
    {
        id: 1,
        name: '7',
    },
    {
        id: 2,
        name: '8',
    },
    {
        id: 3,
        name: '9',
    },

    {
        id: 5,
        name: '/',
    },
    {
        id: 6,
        name: '-+',
    },
    {
        id: 7,
        name: '4',
    },
    {
        id: 8,
        name: '5',
    },
    {
        id: 9,
        name: '6',
    },
    {
        id: 10,
        name: '*',
    },
    {
        id: 11,
        name: 'sqrt',
    },
    {
        id: 12,
        name: '1',
    },
    {
        id: 13,
        name: '2',
    },
    {
        id: 15,
        name: '3',
    },
    {
        id: 16,
        name: '-',
    },
    {
        id: 17,
        name: '%',
    },
    {
        id: 18,
        name: '0',
    },
    {
        id: 19,
        name: '.',
    },
    {
        id: 20,
        name: 'C',
    },
    {
        id: 21,
        name: '+',
    },
    {
        id: 22,
        name: '=',
    },
];

const isNumbers = (obj: Number) => {
    if (
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].includes(
            obj.name
        )
    )
        return true;
    return false;
};

const colorSet1 = (obj: Number) => {
    if (['/', '*', '-', '+', '=', '%'].includes(obj.name)) return true;
    return false;
};

const colorSet2 = (obj: Number) => {
    if (['-+', 'sqrt'].includes(obj.name)) return true;
    return false;
};

const solve = (eq: string): string => {
    const splitNumsAndOps = (str: string): string[] => {
        const res = [];
        let temp = '';
        const ops = ['+', '-', '*', '/'];
        for (let i = 0; i < str.length; i++) {
            if (ops.includes(str[i])) {
                res.push(temp);
                res.push(str[i]);
                temp = '';
                continue;
            }
            temp += str[i];
        }
        res.push(temp);
        return res;
    };

    const operation = (newEquationArray: string[], op: string) => {
        let ind = 1;
        while (ind !== -1) {
            if (op === '/') ind = newEquationArray.findIndex((i) => i === '/');
            else if (op === '*')
                ind = newEquationArray.findIndex((i) => i === '*');
            else if (op === '-')
                ind = newEquationArray.findIndex((i) => i === '-');
            else if (op === '+')
                ind = newEquationArray.findIndex((i) => i === '+');
            if (ind === -1) break;
            let pv = newEquationArray[ind - 1];
            let nv = newEquationArray[ind + 1];
            newEquationArray.splice(ind, 1);
            newEquationArray.splice(ind, 1);
            newEquationArray.splice(ind - 1, 1);
            if (op === '/')
                newEquationArray.splice(
                    ind - 1,
                    0,
                    String(Number(pv) / Number(nv))
                );
            else if (op === '*')
                newEquationArray.splice(
                    ind - 1,
                    0,
                    String(Number(pv) * Number(nv))
                );
            else if (op === '-')
                newEquationArray.splice(
                    ind - 1,
                    0,
                    String(Number(pv) - Number(nv))
                );
            else if (op === '+')
                newEquationArray.splice(
                    ind - 1,
                    0,
                    String(Number(pv) + Number(nv))
                );
        }

        return newEquationArray;
    };

    let newEquationArray = splitNumsAndOps(eq);
    // division
    newEquationArray = operation(newEquationArray, '/');
    //multiplication
    newEquationArray = operation(newEquationArray, '*');
    //subtration
    newEquationArray = operation(newEquationArray, '-');
    // addition
    newEquationArray = operation(newEquationArray, '+');

    return newEquationArray[0];
};

const Calculator = () => {
    const [equation, setEquation] = useState('');
    const [res, setRes] = useState('');

    const operationHandler = (opp: string): void => {
        if (opp === '=') {
            setRes(solve(equation));
            return;
        }

        if (opp === 'C') {
            setEquation('');
            setRes('');
            return;
        }
        setEquation((pv) => (pv += opp));
    };

    return (
        <div className="w-full h-[700px] flex items-end">
            <section className="w-full md:w-[430px] h-[600px] p-2">
                <div className="w-full h-[150px] bg-slate-100">
                    <section className="w-full h-1/2 px-4 py-2 text-xl flex justify-end bg-blue-100">
                        {equation}
                    </section>
                    <section className="w-full h-1/2 px-4 py-2 flex justify-end items-center text-2xl font-semibold bg-white">
                        {res}
                    </section>
                </div>
                <div className="w-full h-[450px] p-2 flex flex-wrap justify-between items-center bg-blue-100">
                    {buttons.map((btn) => (
                        <div
                            key={btn.id}
                            className={`${
                                isNumbers(btn) &&
                                'bg-slate-50 hover:bg-slate-100'
                            } ${
                                colorSet1(btn) &&
                                'text-2xl bg-blue-400 text-white hover:bg-blue-300'
                            } ${
                                btn.name === 'C' &&
                                'bg-red-400 font-bold text-2xl hover:bg-red-300'
                            } ${
                                colorSet2(btn) && 'bg-sky-300 hover:bg-sky-200'
                            } w-[65px] md:w-[70px] h-[90px] flex justify-center items-center rounded-lg shadow text-lg cursor-pointer font-semibold`}
                            onClick={() => operationHandler(btn.name)}
                        >
                            {btn.name}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Calculator;
