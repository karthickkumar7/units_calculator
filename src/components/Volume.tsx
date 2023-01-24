import { BaseSyntheticEvent, useState } from 'react';
import Cone from './volumes/Cone';
import Cuboid from './volumes/Cuboid';
import Cylinder from './volumes/Cylinder';
import Sphere from './volumes/Sphere';

const units = [
    {
        id: 1,
        name: 'sphere',
    },
    {
        id: 2,
        name: 'cuboid',
    },
    {
        id: 3,
        name: 'cone',
    },
    {
        id: 4,
        name: 'cylinder',
    },
];

const Volume = () => {
    const [currentComponent, setCurrentComponent] = useState('sphere');
    // const [shpere, setShpere] = useState({
    //     raduis: '',
    //     diameter: '',
    //     surfaceArea: '',
    //     volume: '',
    // });
    // const [cuboid, setCuboid] = useState({
    //     width: '',
    //     length: '',
    //     height: '',
    //     diagonal: '',
    //     surfaceArea: '',
    //     volume: '',
    // });
    // const [cone, setCone] = useState({
    //     radius: '',
    //     height: '',
    //     slantHeight: '',
    //     surfaceArea: '',
    //     volume: '',
    //     baseArea: '',
    //     lateralSurfaceArea: '',
    // });

    // const [cylinder, setCylinder] = useState({});

    const setUnitComponentMapHandler = (e: BaseSyntheticEvent) => {
        switch (e.target.value) {
            case 'sphere':
                setCurrentComponent('sphere');
                return;
            case 'cuboid':
                setCurrentComponent('cuboid');
                return;
            case 'cone':
                setCurrentComponent('cone');
                return;
            case 'cylinder':
                setCurrentComponent('cylinder');
                return;
        }
    };

    const renderComponentHandler = (currentComp: string) => {
        switch (currentComp) {
            case 'sphere':
                return <Sphere />;
            case 'cuboid':
                return <Cuboid />;
            case 'cone':
                return <Cone />;
            case 'cylinder':
                return <Cylinder />;
        }
    };

    return (
        <div className="p-2">
            <h1 className="text-xl font-semibold uppercase text-green-600">
                volume converter
            </h1>
            <div className="my-4 flex">
                <h4 className="text-lg mr-4">Select object</h4>
                <select
                    name="vol"
                    id="vol"
                    onChange={setUnitComponentMapHandler}
                >
                    {units.map((unit) => (
                        <option key={unit.id} value={unit.name} className="">
                            {unit.name}
                        </option>
                    ))}
                </select>
            </div>
            {/* render specific component */}
            <div>{renderComponentHandler(currentComponent)}</div>
        </div>
    );
};

export default Volume;
