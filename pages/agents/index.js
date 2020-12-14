import { useEffect, useState, useContext } from 'react';
import { useRouter } from "next/router";
// components
import Layout from '../../app/components/layout/Layout';
import Table from '../../app/components/layout/table/Table';
import Pagination from '../../app/components/layout/table/Pagination';
// state
import AgentContext from '../../app/context/agents/agentContext';
import { SpinnerContext } from '../../app/context/spinner/spinnerContext';

const Agents = () => {

    const router = useRouter();

    const [columns, setColumns] = useState([
        { 
            title: '#',
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
    ]);

    // agent context
    const agentContext = useContext(AgentContext);

     // spinner
     const { setShowSpinner } = useContext(SpinnerContext);

    
    const { 
        agents,
        loading,
        totalItems,
        itemsPerPage, 
        currentPage,
        getAgents,
        goToAgentDetail } = agentContext;

    
    // loading change
    useEffect(() => {
        setShowSpinner(loading);
    }, [loading]);

    // component init
    useEffect( () => {

        getAgents();

    }, []);

    /**
     * 
     * @param {*} data 
     */
    const redirectToDetail = (data) => {
        goToAgentDetail(data.id);
    }

    /**
     * 
     * @param {*} pageIndex 
     */
    const loadMoreAgents = pageIndex => {
        getAgents(pageIndex);
    }

    return (  
        <div>
            <Layout>
                <div className="container pt-2">
                    <div className="row pt-4 pb-2 mb-3 border-bottom">
                            <button type="button" className="btn btn-light col-1 pr-4">
                                <span className="material-icons fs-2 text-primary" onClick={() => router.back() }>arrow_back</span>
                            </button>
                            <span className="h1 col">Agents</span>
                    </div>
                    <div className="row">
                        <Table 
                            data={agents} 
                            columns={columns}
                            totalItems={totalItems}
                            onRowClicked={redirectToDetail}/>
                    </div>
                    <div className="row mt-3">
                        <Pagination 
                            itemsPerPage={itemsPerPage}
                            totalItems={totalItems}
                            currentPage={currentPage}
                            onPageChange={loadMoreAgents}/>
                    </div> 
                </div>  
            </Layout>    
        </div>
    );
}
 
export default Agents;