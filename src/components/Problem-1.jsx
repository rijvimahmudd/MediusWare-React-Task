import React, { useState, useEffect } from 'react';

const Problem1 = () => {
  const [show, setShow] = useState('all');
  const [formValues, setFormValues] = useState([]); 
  const [formOutput, setFormOutput] = useState({});
  const [filteredTasks, setFilteredTasks] = useState([]);

  const handleClick = (val) => {
    setShow(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues([...formValues, formOutput]);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormOutput({ ...formOutput, [e.target.name]: e.target.value });
  };

  const filterTasks = (status) => {
      setFilteredTasks(showTasksSorted(status));
  };

  useEffect(() => {
    filterTasks(show);
  }, [show, formValues]);

  const showTasksSorted = (status) => {
      if(status === 'all'){
        const completedTask = formValues.filter((task) => task.status.toLowerCase() === 'completed');
        const activeTask = formValues.filter((task) => task.status.toLowerCase() === 'active');
        const otherTask = formValues.filter((task) => task.status.toLowerCase() !== 'completed' && task.status.toLowerCase() !== 'active');

        return [...activeTask, ...completedTask, ...otherTask];
      }
      else{
        const filtered = formValues.filter((task) => task.status.toLowerCase() === status);
        return [...filtered];
      }
  }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleSubmit} >
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" onChange={handleChange} name='name' value={formOutput.name}/>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" onChange={handleChange} name='status' value={formOutput.status}/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        {filterTasks.length > 0 && filteredTasks.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.status}</td>   
                            </tr>
                        ))}
                        </thead>
                        <tbody>
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;