import "./content.css";

export default function Content(props){
    const {title}=props; 
    console.log(props);
    if(props.children.length===0 || props.children===false){
        return (
            <div className="content">
                <img src="https://lh3.googleusercontent.com/proxy/Bd0au_i6rLJFx2rEo-Qnvu52PhDdD53AOSquCLujYzJMQYo4-0zsr6NVGL175iGEBr7BqO4mkXPJkJZTvQjSzCOsRbapX8ye=s0-d" alt= "loading"/>
            </div>
        );
    }
    return (
        <div className="content">
            <div className="title">
                {title}        
            </div>
            <ul>
                {props.children}
            </ul>
        </div>
    );
}