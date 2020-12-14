import AlertList from '../alerts/AlertList';

const Rule = ({ data }) => {


    const header = [
        { 
            title: 'Id',
            field: 'id'
        },
        { 
            title: 'Description',
            field: 'description'
        },
        { 
            title: 'Total Alerts',
            field: 'total_alerts'
        }
    ]
    
  


    return (  
        <>
            <div className="row">
                <div className="card bg-light border-0">
                    <div className="card-body row">
                        {
                            header && data ? 
                                header.map( (item,index) => (
                                    <div className="col-lg col-sm-12" key={index}>
                                        <label htmlFor="staticEmail" className="col-sm-5 col-form-label col-form-label-lg text-muted">{item.title}</label>
                                        <div className="col-sm-7">
                                            <input type="text" readOnly={true} className="form-control-plaintext form-control-plaintext-lg fs-5" value={data[item.field]}/>
                                        </div>
                                    </div>
                                )) : null
                        }
                    </div>
                </div>
            </div>
            <div className="row">
                <AlertList alerts={data.alerts}/>
            </div>
        </>
    );
}
 
export default Rule;