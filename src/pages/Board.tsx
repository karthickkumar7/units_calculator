import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const Board = () => {
    const [darkmode, setDarkmode] = useState(true);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        const units = localStorage.getItem('units');
        if (!units) {
            localStorage.setItem('units', JSON.stringify({ darkmode: false }));
        }
    }, []);

    return (
        <div className="w-screen min-h-screen">
            <div className="container mx-auto">
                {pathname !== '/' && (
                    <p
                        className="my-2 uppercase cursor-pointer hover:underline"
                        onClick={() => navigate('/')}
                    >
                        home
                    </p>
                )}
                <Outlet />
            </div>
        </div>
    );
};

export default Board;
