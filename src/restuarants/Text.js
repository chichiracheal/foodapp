

const Text = ({quote})=>{
    return (
        <tr key={quote.text}>
        <td>{quote.text}</td>
        <td>{quote.author}</td>
       
                </tr>
    )
}
export default Text;