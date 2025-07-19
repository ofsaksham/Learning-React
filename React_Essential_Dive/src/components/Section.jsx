export default function Section ({ title, children, ...props }) {   // forwarder props or proxy props
    return (
        <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>);
}

// export default function section ({ title, id, className, children }) {
// <section id={id} className={className}> this is not really scalable and not rally convinient
// ... =>  the js feature which called "Rest property". 
// This syntax groups all remaining object properties into a new object(named "props in this case").