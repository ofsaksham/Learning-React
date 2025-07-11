export default function tabbutton({children, onselect}) {

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