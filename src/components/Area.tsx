import React, { BaseSyntheticEvent, useEffect, useState } from 'react';

const geometries = [
    {
        _id: 1,
        name: 'Circle',
        area: '',
        radius: '',
        diameter: '',
        perimeter: '',
    },
    {
        _id: 2,
        name: 'Triangle',
        area: '',
        base: '',
        height: '',
    },
    {
        _id: 3,
        name: 'Rectangle',
        area: '',
        length: '',
        breadth: '',
    },
    {
        _id: 4,
        name: 'Ellipse',
        area: '',
        minorAxis: '',
        majorAxis: '',
    },
];

const Area = () => {
    const [selected, setSelected] = useState<string>('Circle');
    const [circle, setCircle] = useState({
        area: '',
        radius: '',
        diameter: '',
        perimeter: '',
    });
    const [rectangle, setRectanle] = useState({
        area: '',
        length: '',
        breadth: '',
    });
    const [triangle, setTriangle] = useState({
        area: '',
        base: '',
        height: '',
    });
    const [ellipse, setEllipse] = useState({
        area: '',
        majorA: '',
        minorA: '',
    });

    const circleCalc = (e: BaseSyntheticEvent) => {
        switch (e.target.id) {
            case 'area':
                setCircle({
                    radius: String(Math.sqrt(Number(e.target.value) / Math.PI)),
                    diameter: String(
                        Math.sqrt(Number(e.target.value) / Math.PI) * 2
                    ),
                    area: e.target.value,
                    perimeter: String(
                        (2 * Number(e.target.value)) /
                            Math.sqrt(Number(e.target.value) / Math.PI)
                    ),
                });
                return;
            case 'radius':
                setCircle({
                    radius: e.target.value,
                    diameter: String(Number(e.target.value) * 2),
                    area: String(Math.PI * Math.pow(Number(e.target.value), 2)),
                    perimeter: String(2 * Math.PI * Number(e.target.value)),
                });
                return;
            case 'diameter':
                setCircle({
                    radius: String(Number(e.target.value) / 2),
                    diameter: e.target.value,
                    area: String(
                        Math.PI * Math.pow(Number(e.target.value) / 2, 2)
                    ),
                    perimeter: String(
                        2 * Math.PI * (Number(e.target.value) / 2)
                    ),
                });
                return;
            case 'perimeter':
                setCircle({
                    radius: String(Number(e.target.value) / (2 * Math.PI)),
                    diameter: String(Number(e.target.value) / Math.PI),
                    area: String(
                        (Number(e.target.value) * Number(e.target.value)) /
                            (2 * Math.PI) /
                            2
                    ),
                    perimeter: e.target.value,
                });
                return;
        }
    };

    // rectangle calculations
    const rectCalc = () => {
        if (rectangle.length && rectangle.breadth) {
            setRectanle({
                ...rectangle,
                area: String(
                    Number(rectangle.length) * Number(rectangle.breadth)
                ),
            });
            return;
        } else if (rectangle.area && rectangle.breadth) {
            setRectanle({
                ...rectangle,
                length: String(
                    Number(rectangle.area) / Number(rectangle.breadth)
                ),
            });
            return;
        } else if (rectangle.area && rectangle.length) {
            setRectanle({
                ...rectangle,
                breadth: String(
                    Number(rectangle.area) / Number(rectangle.length)
                ),
            });
            return;
        } else if (!rectangle.length) {
            setRectanle({ ...rectangle, length: 'length is required' });
        } else if (!rectangle.breadth) {
            setRectanle({ ...rectangle, length: 'breadth is required' });
        }
    };

    const triCalc = () => {
        if (triangle.base && triangle.height) {
            setTriangle({
                ...triangle,
                area: String(
                    Number(
                        0.5 * Number(triangle.base) * Number(triangle.height)
                    )
                ),
            });
        } else if (triangle.base && triangle.area) {
            setTriangle({
                ...triangle,
                height: String(
                    Number((2 * Number(triangle.area)) / Number(triangle.base))
                ),
            });
        } else if (triangle.height && triangle.area) {
            setTriangle({
                ...triangle,
                base: String(
                    Number(
                        (2 * Number(triangle.area)) / Number(triangle.height)
                    )
                ),
            });
        } else if (!triangle.area)
            setTriangle({ ...triangle, area: 'area is required' });
        else if (!triangle.height)
            setTriangle({ ...triangle, height: 'height is required' });
        else if (!triangle.base)
            setTriangle({ ...triangle, base: 'base is required' });
    };

    const inputClass =
        'w-5/6 h-[60px] px-4 py-3 mb-3 outline-none border rounded';

    const maps = {
        Circle: [
            <input
                type="text"
                id="radius"
                placeholder="radius"
                className={inputClass}
                value={circle.radius}
                onChange={circleCalc}
            />,
            <input
                type="text"
                id="diameter"
                placeholder="diameter"
                className={inputClass}
                value={circle.diameter}
                onChange={circleCalc}
            />,
            <input
                type="text"
                id="perimeter"
                placeholder="perimeter"
                className={inputClass}
                value={circle.perimeter}
                onChange={circleCalc}
            />,
            <input
                type="text"
                id="area"
                placeholder="area"
                className={inputClass}
                value={circle.area}
                onChange={circleCalc}
            />,
        ],
        Rectangle: [
            <input
                type="text"
                id="lenght"
                placeholder="length"
                className={inputClass}
                value={rectangle.length}
                onChange={(e) =>
                    setRectanle({
                        ...rectangle,
                        length: e.target.value,
                    })
                }
            />,
            <input
                type="text"
                id="breadth"
                placeholder="breadth"
                className={inputClass}
                value={rectangle.breadth}
                onChange={(e) =>
                    setRectanle({
                        ...rectangle,
                        breadth: e.target.value,
                    })
                }
            />,
            <input
                type="text"
                id="area"
                placeholder="area"
                className={inputClass}
                value={rectangle.area}
                onChange={(e) =>
                    setRectanle({
                        ...rectangle,
                        area: e.target.value,
                    })
                }
            />,
        ],
        Triangle: [
            <input
                type="text"
                placeholder="base"
                id="base"
                className={inputClass}
                value={triangle.base}
                onChange={(e) =>
                    setTriangle({ ...triangle, base: e.target.value })
                }
            />,
            <input
                type="text"
                id="height"
                placeholder="height"
                className={inputClass}
                value={triangle.height}
                onChange={(e) =>
                    setTriangle({ ...triangle, height: e.target.value })
                }
            />,
            <input
                type="text"
                id="area"
                placeholder="area"
                className={inputClass}
                value={triangle.area}
                onChange={(e) =>
                    setTriangle({ ...triangle, area: e.target.value })
                }
            />,
        ],
        Ellipse: [
            <input
                type="text"
                placeholder="minor axis"
                className={inputClass}
                value={ellipse.area}
                onChange={(e) =>
                    setEllipse({ ...ellipse, minorA: e.target.value })
                }
            />,
            <input
                type="text"
                placeholder="major axis"
                className={inputClass}
                value={ellipse.area}
                onChange={(e) =>
                    setEllipse({ ...ellipse, majorA: e.target.value })
                }
            />,
            <input
                type="text"
                placeholder="area"
                className={inputClass}
                value={ellipse.area}
                onChange={(e) =>
                    setEllipse({ ...ellipse, area: e.target.value })
                }
            />,
        ],
    };

    const getCircle = () => maps.Circle;
    const getRectangle = () => maps.Rectangle;
    const getTriangle = () => maps.Triangle;
    const getEllipse = () => maps.Ellipse;

    const renderInputs = () => {
        switch (selected) {
            case 'Circle':
                return getCircle();
            case 'Rectangle':
                return getRectangle();
            case 'Triangle':
                return getTriangle();
            case 'Ellipse':
                return getEllipse();
        }
    };

    const resethandler = () => {
        setCircle({ area: '', diameter: '', perimeter: '', radius: '' });
        setRectanle({ area: '', breadth: '', length: '' });
        setTriangle({ area: '', base: '', height: '' });
        setEllipse({ area: '', majorA: '', minorA: '' });
    };

    // useEffect(() => {
    //     console.log()
    // },[circle])

    return (
        <div className="p-2">
            <select
                name="choices"
                id="choices"
                className="mb-4 p-2"
                onChange={(e) => setSelected(e.target.value)}
            >
                {geometries.map((geo) => (
                    <option key={geo._id} value={geo.name}>
                        {geo.name}
                    </option>
                ))}
            </select>
            <div className="w-full md:w-[800px] h-full p-2 bg-slate-100">
                {renderInputs()?.map((inp, i) => (
                    <div key={i} className="flex flex-col">
                        <label
                            htmlFor={inp.props.id}
                            className="text-lg font-semibold"
                        >
                            {inp.props.id}
                        </label>
                        {inp}
                    </div>
                ))}
            </div>
            {(selected === 'Rectangle' || selected === 'Triangle') && (
                <button
                    className="w-full md:w-[661px] my-4 px-4 py-3 rounded bg-green-500 text-white uppercase font-semibold"
                    onClick={selected === 'Rectangle' ? rectCalc : triCalc}
                >
                    calculate
                </button>
            )}
            <div>
                <button
                    className="w-full md:w-[661px] my-4 px-4 py-3 rounded bg-yellow-400 uppercase font-semibold"
                    onClick={resethandler}
                >
                    reset
                </button>
            </div>
        </div>
    );
};

export default Area;
