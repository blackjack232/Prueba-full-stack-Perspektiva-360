import Header from "../../components/Header/Index";
import { useParams } from "react-router-dom";
const Home = () => {
    const {id} = useParams();
    return (
        <>
            <div>
                <Header />
                Home {id}
            </div>

        </>
    );

}

export default Home;