import React, { BaseSyntheticEvent, useState } from 'react';

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
];

const Sphere = () => {
    const [currentProp, setCurrentProp] = useState('radius');
    const [radius, setRadius] = useState('');
    const [diameter, setDiameter] = useState('');
    const [volume, setVolume] = useState('');
    const [surfaceArea, setSurfaceArea] = useState('');

    const mapToCurrentPropHandler = (e: BaseSyntheticEvent) => {
        setRadius('');
        setVolume('');
        setDiameter('');
        setSurfaceArea('');

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
            case 'surface area':
                setCurrentProp('surface area');
                return;
        }
    };

    const calculate = (e: BaseSyntheticEvent) => {
        switch (e.target.id) {
            case 'volume':
                setVolume(e.target.value);
                setRadius(
                    String(
                        Math.pow(
                            (3 * Number(e.target.value)) / (4 * Math.PI),
                            1 / 3
                        )
                    )
                );
                return;

            case 'radius':
                setRadius(e.target.value);
                if (currentProp === 'diameter') {
                    setDiameter(String(Number(e.target.value) * 2));
                } else if (currentProp === 'surface area') {
                    setSurfaceArea(
                        String(
                            4 * Math.PI * Math.pow(Number(e.target.value), 2)
                        )
                    );
                } else if (currentProp === 'volume') {
                    setVolume(
                        String(
                            (4 / 3) *
                                Math.PI *
                                Math.pow(Number(e.target.value), 3)
                        )
                    );
                }
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
                        id="volume"
                        value={volume}
                        onChange={calculate}
                        className={inputClass}
                    />,
                ];
            default:
                return [
                    <input
                        type="text"
                        placeholder="0"
                        id="radius"
                        value={radius}
                        onChange={calculate}
                        className={inputClass}
                    />,
                ];
        }
    };

    const renderCalculatedValue = () => {
        switch (currentProp) {
            case 'radius':
                return radius;
            case 'diameter':
                return diameter;
            case 'volume':
                return volume;
            case 'surface area':
                return surfaceArea;
        }
    };

    return (
        <div>
            <h1 className="mb-4 text-xl font-semibold">Sphere</h1>

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
                    <React.Fragment key={inp.props.id}>
                        <label htmlFor={inp.props.id}>{inp.props.id}</label>
                        {inp}
                    </React.Fragment>
                ))}
            </div>
            <h4 className="text-3xl font-semibold text-green-500">
                {renderCalculatedValue()}
            </h4>
        </div>
    );
};

export default Sphere;
