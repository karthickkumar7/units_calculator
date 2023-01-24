import { useNavigate } from 'react-router-dom';

import { Category } from '../models/category.model';

const CategoryCard = (props: Category) => {
    const navigate = useNavigate();

    const genRandomRGB = () => {
        const genRandomNum = () => Math.floor(Math.random() * 181);
        return `rgb(${genRandomNum()},${genRandomNum()},${genRandomNum()})`;
    };

    return (
        <section className="border px-4 py-3 rounded hover:shadow">
            <h4 className="text-lg font-semibold">{props.title}</h4>
            <p className="my-2 text-sm capitalize text-slate-500">
                {props.desc}
            </p>
            <button
                className="w-[200px] py-2 rounded uppercase font-semibold to-white text-white"
                style={{
                    backgroundImage: `linear-gradient(to right,${genRandomRGB()},white)`,
                }}
                onClick={() => navigate(`/${props.route}`)}
            >
                go
            </button>
        </section>
    );
};

export default CategoryCard;
