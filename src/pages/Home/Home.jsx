import ButtonsHome from '../../components/ButtonsHome/ButtonsHome'
import "./home.css";

export default function Home() {
    return (
    <>
        <div className="container-fluid main-cont d-flex flex-column justify-content-center align-items-center">
            <div className="container cont-home d-flex flex-column justify-content-center text-center">
                <h1 className="row justify-content-center">Project Rick & Morty</h1>
                <h2 className="p-3">Welcome to Rick & Morty Project!</h2>
                <p className="p-2">This proyect was made for practising React and to made a functional website.</p>
                <p>In this website you can know information of the characters of this animated series.</p>
                <p>Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.</p>
                <h2>Lets go!</h2>
                <div className='d-flex justify-content-center mt-3'>
                    <ButtonsHome contenido="Characters"/>
                    <ButtonsHome contenido="Contact"/>           
                </div>
            </div>
        </div>
    </>
    );
}
