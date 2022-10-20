import React, { BaseSyntheticEvent, useState } from 'react';

const properties = [
    {
        id: 1,
        name: 'length',
    },
    {
        id: 2,
        name: 'width',
    },
    {
        id: 3,
        name: 'height',
    },
    {
        id: 4,
        name: 'volume',
    },
    {
        id: 5,
        name: 'surface area',
    },
    {
        id: 6,
        name: 'perimeter',
    },
    {
        id: 7,
        name: 'face diagonals',
    },
    {
        id: 8,
        name: 'space diagonals',
    },
    {
        id: 9,
        name: 'lateral surface',
    },
];

const Cuboid = () => {
    const [currentProp, setCurrentProp] = useState('length');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [volume, setVolume] = useState('');
    const [surfaceArea, setSurfaceArea] = useState('');
    const [perimeter, setPerimeter] = useState('');
    const [spaceDiagonals, setSpaceDiagonals] = useState('');
    const [faceDiagonals, setFaceDiagonals] = useState('');
    const [lateralSurface, setLateralSurface] = useState('');

    const mapToCurrentPropHandler = (e: BaseSyntheticEvent) => {
        setLength('');
        setHeight('');
        setVolume('');
        setWidth('');
        setSurfaceArea('');
        setPerimeter('');
        setLateralSurface('');
        setSpaceDiagonals('');
        setFaceDiagonals('');

        switch (e.target.value) {
            case 'volume':
                setCurrentProp('volume');
                return;
            case 'perimeter':
                setCurrentProp('perimeter');
                return;
            case 'length':
                setCurrentProp('length');
                return;
            case 'face diagonals':
                setCurrentProp('face diagonals');
                return;
            case 'space diagonals':
                setCurrentProp('space diagonals');
                return;
            case 'height':
                setCurrentProp('height');
                return;
            case 'lateral surface':
                setCurrentProp('lateral surface');
                return;
            case 'surface area':
                setCurrentProp('surface area');
                return;
        }
    };

    const calculate = () => {
        switch (currentProp) {
            case 'length':
                setLength(
                    String(Number(volume) / (Number(height) * Number(width)))
                );
                return;
            case 'width':
                setLength(
                    String(Number(volume) / (Number(height) * Number(length)))
                );
                return;
            case 'height':
                setHeight(
                    String(Number(volume) / (Number(length) * Number(width)))
                );
                return;
            case 'volume':
                setVolume(
                    String(Number(length) * Number(width) * Number(height))
                );
                return;
            case 'surface area':
                setSurfaceArea(
                    String(
                        2 * Number(length) * Number(width) +
                            2 * Number(length) * Number(height) +
                            2 * Number(height) * Number(width)
                    )
                );
                return;
            case 'lateral surface':
                setLateralSurface(
                    String(
                        2 * Number(height) * (Number(length) + Number(width))
                    )
                );
                return;
            case 'perimeter':
                setPerimeter(
                    String(
                        4 * (Number(height) + Number(length) + Number(width))
                    )
                );
                return;

            case 'face diagonals':
                setFaceDiagonals(
                    String(
                        4 * (Number(height) + Number(length) + Number(width))
                    )
                );
                return;
            case 'space diagonals':
                setSpaceDiagonals(
                    String(
                        Math.sqrt(
                            Math.pow(Number(length), 2) +
                                Math.pow(Number(width), 2) +
                                Math.pow(Number(height), 2)
                        )
                    )
                );

                return;
        }
    };

    const inputClass = 'px-4 py-3 mb-3 outline-none border rounded';
    const renderInputsForPropsHandler = (current: string) => {
        switch (current) {
            case 'length':
                return [
                    <input
                        type="text"
                        placeholder="0"
                        id="volume"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className={inputClass}
                    />,
                    <input
                        type="text"
                        placeholder="0"
                        id="width"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        className={inputClass}
                    />,
                    <input
                        type="text"
                        placeholder="0"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className={inputClass}
                    />,
                ];
            case 'height':
                return [
                    <input
                        type="text"
                        placeholder="0"
                        id="volume"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className={inputClass}
                    />,
                    <input
                        type="text"
                        placeholder="0"
                        id="width"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        className={inputClass}
                    />,
                    <input
                        type="text"
                        placeholder="0"
                        id="length"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className={inputClass}
                    />,
                ];
            case 'width':
                return [
                    <input
                        type="text"
                        placeholder="0"
                        id="volume"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className={inputClass}
                    />,
                    <input
                        type="text"
                        placeholder="0"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className={inputClass}
                    />,
                    <input
                        type="text"
                        placeholder="0"
                        id="length"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className={inputClass}
                    />,
                ];
            default:
                return [
                    <input
                        type="text"
                        placeholder="0"
                        id="length"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className={inputClass}
                    />,
                    <input
                        type="text"
                        placeholder="0"
                        id="width"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        className={inputClass}
                    />,
                    <input
                        type="text"
                        placeholder="0"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className={inputClass}
                    />,
                ];
        }
    };

    const renderCalculatedValue = () => {
        switch (currentProp) {
            case 'length':
                return length;
            case 'height':
                return height;
            case 'width':
                return width;
            case 'volume':
                return volume;
            case 'surface area':
                return surfaceArea;
            case 'lateral surface':
                return lateralSurface;
            case 'face diagonals':
                return faceDiagonals;
            case 'space diagonals':
                return spaceDiagonals;
            case 'perimeter':
                return perimeter;
        }
    };

    return (
        <div>
            <h1 className="mb-4 text-xl font-semibold">Cuboid</h1>

            <div className="flex">
                <p className="mr-2">Find for</p>
                <select
                    name="props"
                    id="props"
                    className="mx-2"
                    onChange={mapToCurrentPropHandler}
                >
                    {properties.map((prop) => (
                        <option key={prop.name} value={prop.name}>
                            {prop.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="my-4">
                {renderInputsForPropsHandler(currentProp)?.map((inp) => (
                    <div key={inp.props.id} className="flex flex-col">
                        <label htmlFor={inp.props.id}>{inp.props.id}</label>
                        {inp}
                    </div>
                ))}
                <button
                    className="w-full px-4 py-3 rounded text-white bg-green-500"
                    onClick={calculate}
                >
                    calulate
                </button>
            </div>
            <h4 className="text-3xl font-semibold text-green-500">
                {renderCalculatedValue()}
            </h4>
        </div>
    );
};

export default Cuboid;
