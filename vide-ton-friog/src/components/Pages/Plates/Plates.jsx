//Plates.tsx
import HeaderPage from "../../Header/Header";
import {PlateItem} from "./PlateItem";
import './plates.css';


const product = [
    {
        id: 1,
        title: "Item 1",
        price: 10.99,
        description: "This is item 1.",
        isCold: true,
        isHot: false,
        quantity: 200,
    },
    {
        id: 2,
        title: "Item 2",
        price: 8.49,
        description: "This is item 2.",
        isCold: false,
        isHot: true,
    },
    {
        id: 3,
        title: "Item 3",
        price: 12.99,
        description: "This is item 3.",
        isCold: true,
        isHot: true,
    },
    {
        id: 4,
        title: "Item 4",
        price: 4.99,
        description: "This is item 4.",
        isCold: true,
        isHot: false,
    },
    {
        id: 5,
        title: "Item 5",
        price: 5.99,
        description: "This is item 5.",
        isCold: true,
        isHot: false,
    },
    {
        id: 6,
        title: "Item 6",
        price: 6.99,
        description: "This is item 6.",
        isCold: true,
        isHot: false,
    },
];
function Plates() {



    /*const [products, setProducts] = useState([]); // Initialize state for products

    useEffect(() => {
        // Fetch data from the API when the component mounts
        fetch('http://localhost:3333/getAllProducts')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to run this effect only once when the component mounts*/


    return(
        <div className="plates">
            <HeaderPage/>
            <div className="platesContainer">
                <div className="productGrid">
                    {product && product.length !== 0 ? (
                        product.map((item) => (
                            <PlateItem
                                key={item.id}
                                item={item}
                            />
                        ))
                    ) : (
                        <h1>Aucuns produits sont actuellement disponibles</h1>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Plates;