import "./content.css";

export default function Content(props){
    const {title}=props;
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