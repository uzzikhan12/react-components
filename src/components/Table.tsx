function Mytable (props: 
    {
        data: any[]; 
        columns: any[]; 
    }
)  
    {
        const {columns, data} = props;
    return (
      <table className='table table-stripped table-dark table-bordered mt-4 m-auto w-75'>
        <thead>
            <tr>
                {columns.map((col, index) => (
                    <th key={index}>{col.header}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((col, colIndex) => (
                <tr>
                  <td key={colIndex}>{col.id}</td>
                  <td key={colIndex}>{col.userId}</td>
                  <td key={colIndex}>{col.title}</td>
                  <td key={colIndex}>{col.completed? 'True' : 'False'}</td>
                </tr>
            ))}
        </tbody>
      </table>
    );
};
  
export default Mytable;