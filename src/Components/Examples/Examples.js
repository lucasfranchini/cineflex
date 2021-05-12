import "./examples.css";

export default function Examples(){
    const examples = [{type:"selected",name:" Selecionado"},{type:"",name:"Disponível"},{type:"unavaliable",name:"Indisponível"}]
    return(
        <div className="examples">
            {examples.map((example,i)=>(
                <div key={i} className="example">
                    <div className={`seat ${example.type}`}/>
                    <span>{example.name}</span>
                </div>
            ))}
        </div>

    );
}