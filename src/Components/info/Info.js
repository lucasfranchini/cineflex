import "./info.css"

export default function Info(props){
    return (
        <div className="info">
            <h2>{props.title}</h2>
            {props.title==="Ingressos" ? props.firstInfo.map((assento,i)=>(<div key={i}>Assento: {assento}</div>)) : (
                <>
                    <div>{props.firstInfo}</div>
                    <div>{props.secondInfo}</div>
                </>
            )}
        </div> 
    );
}