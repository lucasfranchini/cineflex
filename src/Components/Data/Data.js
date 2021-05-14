import "./data.css";

export default function Data(props){
    const {reservation,setReservation,seat} = props;
    const {letter} = reservation;
    const buyer=reservation.seats.findIndex((selectedSeat)=>selectedSeat===seat);

    function changeName(e){   
        letter.compradores[buyer].nome=e.target.value;
        setReservation({...reservation});
    }

    function changeCpf(e){
        letter.compradores[buyer].cpf=e.target.value;
        setReservation({...reservation});
    }

    return (
        <div>
            <span  className="seat-title">{`Assento: ${seat}`}</span>
            <div className="data">
                <span>Nome do comprador:</span>
                <input type="text" placeholder="Digite seu nome..." onChange={(e)=>changeName(e)} value={letter.compradores[buyer].nome}/>
            </div>
            <div className="data">
                <span>CPF do comprador:</span>
                <input type="text" placeholder="Digite seu nome..." onChange={(e)=>changeCpf(e)} value={letter.compradores[buyer].cpf}/>
            </div>
        </div>
    );
}