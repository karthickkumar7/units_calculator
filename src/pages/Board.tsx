import { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const Board = () => {
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
                    <button
                        className="px-4 py-2 mt-2 mb-3 ml-2 rounded uppercase shadow-md text-white bg-fuchsia-600"
                        onClick={() => navigate('/')}
                    >
                        home
                    </button>
                )}

                <Outlet />
            </div>
        </div>
    );
};

export default Board;
