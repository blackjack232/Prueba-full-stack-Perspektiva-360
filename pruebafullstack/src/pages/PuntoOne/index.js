import Header from "../../components/Header/Index";
import { useParams } from "react-router-dom";


const PuntoOne = () => {
    const {One} = useParams();

   
    return (
        <>
           <Header props={One}/>
            <div>
            Punto uno 
            </div>

        </>
    );

}

export default PuntoOne;