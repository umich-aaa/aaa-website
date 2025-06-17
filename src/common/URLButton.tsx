import "./URLButton.css"

export default function URLButton(props: {
    img: any, text: string, color: string, backgroundColor: string, 
    invertIconColor?: boolean, smallerIcon?: boolean, alt: string,
    url: string
}): JSX.Element {
    return (
        <a className="url-button-container" href={props.url} style={{color:props.color}}>
            <span className="url-button" style={{
                backgroundColor: props.backgroundColor,
                color: props.color
            }}>
                <img src={props.img} alt={props.alt} 
                    className={props.smallerIcon ? "smaller-icon" : ""}
                style={{
                    filter: props.invertIconColor ? "invert(100%)" : "none",
                }}/>
                <span>{props.text}</span>
            </span>
        </a>

    )
}
