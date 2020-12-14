import AlertList from '../alerts/AlertList';
// helpers
import { GetPropertyValue } from '../../../utils/helpers';

const Agent = ({ data }) => {

    // Agent card data
    const viewData = [
        { 
            title: 'Id',
            field: 'id'
        },
        { 
            title: 'Name',
            field: 'name'
        },
        { 
            title: 'Ip',
            field: 'ip'
        },
        { 
            title: 'Total Alerts',
            field: 'total_alerts'
        }
    ]

    if(!viewData || !data){
        return null;
    }

    return (  
        <>
            <div className="row">
                {/* Card Data */}
                <div className="card bg-light border-0">
                    <div className="card-body row">
                        {
                            viewData && data ? 
                            
                            viewData.map( (item,index) => (
                                <div className="col-lg col-sm-12" key={index}>
                                    <label htmlFor="staticEmail" className="col-sm-5 col-form-label col-form-label-lg text-muted">{item.title}</label>
                                    <div className="col-sm-7">
                                        <input type="text" readOnly={true} className="form-control-plaintext form-control-plaintext-lg fs-5"  value={GetPropertyValue(data,item.field)}/>
                                    </div>
                                </div>
                            )) : null   
                        }
                    </div>
                </div>
            </div>
            <div className="row">
                 {/* Related Alert list */}
                <AlertList alerts={data.alerts}/>
            </div>
        </>
    );
}
 
export default Agent;