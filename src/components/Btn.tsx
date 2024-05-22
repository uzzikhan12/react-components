function Btn (props:{
    Mytext:string,
    onClick:()=>void,
}) 
{
    const {onClick , Mytext} = props
    return(
        <div className="container">
            <div className="row">
                <button className="w-25 m-auto mt-3 btn btn-danger p-2 " onClick={onClick}>{Mytext}</button>
            </div>
        </div>
    )
}

export default Btn