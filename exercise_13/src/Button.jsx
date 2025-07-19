export default function Button({ children, mode = "filled", Icon, ...props }) {
    let iconContent = <></>
    if(Icon){
        iconContent = <span className="button-icon"><Icon /></span>;
    }
 
 
    return <button className={`button ${mode}-button icon-button`} { ...props }>
    {iconContent}<span>{children}</span>
    </button>
}
