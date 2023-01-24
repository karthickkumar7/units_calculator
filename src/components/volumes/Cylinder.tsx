import { BaseSyntheticEvent, useState } from 'react';

const properties = [
    {
        id: 1,
        name: 'radius',
    },
    {
        id: 2,
        name: 'diameter',
    },
    {
        id: 3,
        name: 'surface area',
    },
    {
        id: 4,
        name: 'volume',
    },
    {
        id: 5,
        name: 'lateral surface',
    },
    {
        id: 6,
        name: 'height',
    },
    {
        id: 7,
        name: 'base area',
    },
];

const Cylinder = () => {
    const [currentProp, setCurrentProp] = useState('radius');
    const [radius, setRadius] = useState('');
    const [diameter, setDiameter] = useState('');
    const [height, setHeight] = useState('');
    const [volume, setVolume] = useState('');
    const [surfaceArea, setSurfaceArea] = useState('');
    const [baseArea, setBaseArea] = useState('');
    const [lateralSurfaceArea, setLateralSurfaceArea] = useState('');

    const mapToCurrentPropHandler = (e: BaseSyntheticEvent) => {
        setRadius('');
        setVolume('');
        setDiameter('');
        setSurfaceArea('');
        setLateralSurfaceArea('');
        setHeight('');
        setBaseArea('');

        switch (e.target.value) {
            case 'volume':
                setCurrentProp('volume');
                return;
            case 'radius':
                setCurrentProp('radius');
                return;
            case 'diameter':
                setCurrentProp('diameter');
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
            case 'base area':
                setCurrentProp('base area');
                return;
        }
    };

    const calculate = () => {
        switch (currentProp) {
            case 'radius':
                setRadius(String(Math.sqrt(Number(baseArea) / Math.PI)));
                return;
            case 'base area':
                setBaseArea(String(Math.PI * Math.pow(Number(radius), 2)));
                return;
            case 'surface area':
                setSurfaceArea(
                    String(
                        2 * Math.PI * Number(radius) * Number(height) +
                            2 * Math.PI * Math.pow(Number(radius), 2)
                    )
                );
                return;
            case 'lateral surface':
                setLateralSurfaceArea(
                    String(2 * Math.PI * Number(radius) * Number(height))
                );
                return;
            case 'height':
                setHeight(
                    String(
                        Number(lateralSurfaceArea) /
                            (2 * Math.PI * Number(radius))
                    )
                );
                return;
            case 'volume':
                setVolume(
                    String(
                        Math.PI * Number(height) * Math.pow(Number(radius), 2)
                    )
                );
                return;
        }
    };

    const inputClass = 'px-4 py-3 mb-3 outline-none border rounded';
    const renderInputsForPropsHandler = (current: string) => {
        switch (current) {
            case 'radius':
                return [
                    <input
                        type="text"
                        placeholder="0"
                        id="base area"
                        value={baseArea}
                        onChange={(e) => setBaseArea(e.target.value)}
                        className={inputClass}
                    />,
                ];
            case 'height':
                return [
                    <input
                        type="text"
                        placeholder="0"
                        id="radius"
                        value={radius}
                        onChange={(e) => setRadius(e.target.value)}
                        className={inputClass}
                    />,
                    <input
                        type="text"
                        placeholder="0"
                        id="lateral surafce"
                        value={lateralSurfaceArea}
                        onChange={(e) => setLateralSurfaceArea(e.target.value)}
                        className={inputClass}
                    />,
                ];
            case 'diameter':
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
                ];
            case 'surface area':
                return [
                    <input
                        type="text"
                        placeholder="0"
                        id="radius"
                        value={radius}
                        onChange={(e) => setRadius(e.target.value)}
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
            case 'lateral surface':
                return [
                    <input
                        type="text"
                        placeholder="0"
                        id="radius"
                        value={radius}
                        onChange={(e) => setRadius(e.target.value)}
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
            case 'volume':
                return [
                    <input
                        type="text"
                        placeholder="0"
                        id="radius"
                        value={radius}
                        onChange={(e) => setRadius(e.target.value)}
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
            case 'base area':
                return [
                    <input
                        type="text"
                        placeholder="0"
                        id="radius"
                        value={radius}
                        onChange={(e) => setRadius(e.target.value)}
                        className={inputClass}
                    />,
                ];
        }
    };

    const renderCalculatedValue = () => {
        switch (currentProp) {
            case 'radius':
                return radius;
            case 'height':
                return height;
            case 'diameter':
                return diameter;
            case 'volume':
                return volume;
            case 'surface area':
                return surfaceArea;
            case 'base area':
                return baseArea;
            case 'lateral surface':
                return lateralSurfaceArea;
        }
    };

    return (
        <div>
            <h1 className="mb-4 text-xl font-semibold">Cylinder</h1>

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

export default Cylinder;
