import '../Styles/Usertable.css';

const MyTable = () => {
    const data = [
      { id: 1, name: 'John Doe', email: 'sabrinpolin@gmail.com', discount:'25%' },
      { id: 2, name: 'Jane Doe', email: 'sabrinpolin@gmail.com',discount:'25%' },
      { id: 3, name: 'Bob Smith', email: 'sabrinpolin@gmail.com',discount:'25%'  },
    ];
  
    return (
      <div className='tableContainer'>
        <h2 className='headline'>Email List</h2>
        <table>
          <thead>
            <tr>
             <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.discount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default MyTable;