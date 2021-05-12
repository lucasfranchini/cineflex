import "./examples.css";

export default function Examples(){
    return(
        <div className="examples">
            <div className="example">
                <div className="seat selected"/>
                <span>Selecionado</span>
            </div>
            <div className="example">
                <div className="seat"/>
                <span>Disponível</span>
            </div>
            <div className="example">
                <div className="seat unavaliable"/>
                <span>Indisponível</span>
            </div>
        </div>

    );
}