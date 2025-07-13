export default function tabbutton({children, onselect}) {
    console.log('TABBUTTON COMPONENT EXECUTING')
    return (

        <li>
            <button onClick={onselect}>{children}</button>
        </li>
    );
    
}







// export default function tabbutton(label) {
//     return (

//         <li>
//             <button>{label}</button>
//         </li>
//     );
    
// }