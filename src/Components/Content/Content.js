import "./content.css";

export default function Content(props){
    const {title}=props;
    return (
        <div className="content">
            <div className="title">
                {title}        
            </div>
                {props.children}
        </div>
    );
}