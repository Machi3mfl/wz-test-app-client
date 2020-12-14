import { useEffect, useState, useContext } from 'react';
import { useRouter } from "next/router";
// components
import Layout from '../../app/components/layout/Layout';
import Table from '../../app/components/layout/table/Table';
import Pagination from '../../app/components/layout/table/Pagination';
import Modal from '../../app/components/layout/modal/Modal';
import Alert from '../../app/components/alerts/Alert';

// context
import AlertContext from '../../app/context/alerts/alertContext';
import { SpinnerContext } from '../../app/context/spinner/spinnerContext';





const Alerts = () => {

    const router = useRouter();

    // alert selected from table
    const [selectedAlert, setSelectedAlert] = useState({});

    // table columns setting
    const [columns, setColumns] = useState([
        { title: '#', field: 'id'},
        { title: 'Index', field: '_index' },
        { title: 'Type', field: '_type' },
        { title: 'Timestamp', field: '_source.timestamp' },
        { title: 'Rule Id', field: '_source.rule.id', link: '/rules' },
        { title: 'Rule Description', field: '_source.rule.description' },
        { title: 'Agent Id', field: '_source.agent.id', link: '/agents' },
        { title: 'Agent Name', field: '_source.agent.name' },
    ]);

    // modal state
    const [showModal, setShowModal] = useState(false);

    // alert context
    const alertContext = useContext(AlertContext);
    // spinner
    const { 
        alerts,
        loading,
        totalItems,
        itemsPerPage, 
        currentPage,
        getAlerts } = alertContext;
        
    // spinner state
    const { setShowSpinner } = useContext(SpinnerContext);

    // loading change
    useEffect(() => {
        setShowSpinner(loading);
    }, [loading]);

    // component init
    useEffect( () => {

        getAlerts();

    }, []);

    const redirectToDetail = (data, index) => {
        setSelectedAlert(data);
        setShowModal(true);
    }

    const loadMoreAlerts = pageIndex => {
        getAlerts(pageIndex);
    }

    return (  
        <div>
            <Layout>
                <div className="container pt-2">
                    <div className="row pt-4 pb-2 mb-3 border-bottom">
                       
                            <button type="button" className="btn btn-light col-1 pr-4">
                                <span className="material-icons fs-2 text-primary" onClick={() => router.back() }>arrow_back</span>
                            </button>
                            <span className="h1 col">Alerts</span>
                        
                    </div>
                
                    <div className="row">
                        <Table 
                            data={alerts} 
                            columns={columns}
                            totalItems={totalItems}
                            onRowClicked={redirectToDetail}/>
                    </div>
                    
                    <div className="row mt-3">
                        <Pagination 
                            itemsPerPage={itemsPerPage}
                            totalItems={totalItems}
                            currentPage={currentPage}
                            onPageChange={loadMoreAlerts}/>
                    </div> 
                </div>
                {/* Modal Alert Detail */}
                <Modal isOpen={showModal} handleClose={() => setShowModal(false)}>
                    <Alert data={selectedAlert}/>
                </Modal>
            </Layout>    
        </div>
    );
}
 
export default Alerts;