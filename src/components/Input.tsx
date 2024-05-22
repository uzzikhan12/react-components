function Myinput (props:any) 
{
    const {placeholder , onchange} = props

  return (
    <div className="container">
        <div className="row">
            <input className="p-2 w-50 m-auto" type="text" placeholder={placeholder} onChange={onchange} />
        </div>
    </div>
  );
}

export default Myinput;