export default function Input({richText, ...Props}) {
    return (
        <> {richText ? <textarea {...Props } /> : <input {...Props}/> 
        }</>);

}