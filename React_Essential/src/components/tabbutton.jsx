export default function tabbutton({children, onselect, isSelected}) {
    console.log('TABBUTTON COMPONENT EXECUTING')
    return (

        <li>
            {/* here className => css styling  */}
            <button className={isSelected ? 'active' : undefined} onClick={onselect}>
                {children}
            </button>
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