import Link from 'next/link';
// helpers
import { GetPropertyValue } from '../../../utils/helpers';

const Alert = ({data}) => {

    // Card data 
    const viewData = [
        { title: 'Timestamp', field: '_source.timestamp' },
        { title: 'Rule Id', field: '_source.rule.id', link: '/rules' },
        { title: 'Rule Description', field: '_source.rule.description' },
        { title: 'Agent Id', field: '_source.agent.id', link: '/agents' },
        { title: 'Agent Name', field: '_source.agent.name' },
    ]
    
    if(!viewData || !data){
        return null;
    }
    
    return ( 
        <div className="container pt-2">
            {/* Header */}
            <div className="row pt-4 pb-2 mb-3 border-bottom">
                <h1>Alert #{data.id}</h1>
            </div>
            <div className="row">
                 {/* Card data */}
                <div className="card bg-light border-0 mb-4">
                    <div className="card-body row">
                        {
                            viewData && data ? 
                            
                            viewData.map( (item,index) => (
                                <div className="col-lg col-sm-12" key={index}>
                                    <h4>{item.title}</h4>
                                    <p className="fs-6">
                                        { item.link ? 
                                            <Link href={`${item.link}/${GetPropertyValue(data,item.field)}`}>{GetPropertyValue(data,item.field)}</Link>
                                            : (GetPropertyValue(data,item.field))     
                                        }
                                        </p>
                                </div>
                            )) : null   
                        }
                    </div>
                </div>
            </div>
            <div className="row">
                 {/* Alert JSON container */}
                <pre className="bg-light p-4">
                    <code>
                        { JSON.stringify(data, null, 4) }
                    </code>
                </pre>
            </div>
        </div>
    );
}
 
export default Alert;