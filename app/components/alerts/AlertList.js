import { useState } from 'react';
// components
import Table from '../layout/table/Table';
import Modal from '../layout/modal/Modal';
import Alert from './Alert';


const AlertList = ({alerts}) => {

    const [showModal, setShowModal] = useState(false);
    const [selectedAlert, setSelectAlert] = useState({});

     // table columns setting
     const [columns, setColumns] = useState([
        { title: '#', field: 'id'},
        { title: 'Index', field: '_index' },
        { title: 'Type', field: '_type' },
        { title: 'Timestamp', field: '_source.timestamp' },
        { title: 'Rule Id', field: '_source.rule.id', link: '/rules'  },
        { title: 'Rule Description', field: '_source.rule.description' },
        { title: 'Agent Id', field: '_source.agent.id', link: '/agents' },
        { title: 'Agent Name', field: '_source.agent.name' },
    ]);

    const redirectToDetail = (data, index) => {
        setSelectAlert(data);
        setShowModal(true);
    }

    return (  
        <>   
            <Table 
                data={alerts} 
                columns={columns}
                title="Related Alerts"
                onRowClicked={redirectToDetail}/>
            
            <Modal isOpen={showModal} handleClose={() => setShowModal(false)}>
                <Alert data={selectedAlert}/>
            </Modal>
        </>
    );
}
 
export default AlertList;