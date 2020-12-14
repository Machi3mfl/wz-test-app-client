import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// components
import Layout from '../../app/components/layout/Layout';
import AgentView from '../../app/components/agents/Agent';

// state
import AgentContext from '../../app/context/agents/agentContext';

const Agent = () => {

    const router = useRouter();
    const { id } = router.query
     // agent context
    const agentContext = useContext(AgentContext);

    const { 
        currentAgent,
        currentAgentId,
        setCurrentAgentId,
        getAgentById } = agentContext;



    useEffect( () => {
        setCurrentAgentId(id);
    },[id]);

    
    useEffect( () => {
        if(currentAgentId){
            getAgentById(currentAgentId);
        }
        
    }, [currentAgentId]);

        

    return (  
        <div>
            <Layout>
                <div className="container pt-4">
                    <div className="row border-bottom mb-3">
                        <div className="col-8">
                            <h1>Agent #{currentAgentId}</h1>
                        </div>
                        <div className="col-4">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb p-0 m-0  fs-5">
                                    <li className="breadcrumb-item">
                                        <Link href="/agents">Agents</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Agent View #{currentAgentId}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    { currentAgent ? 
                        <AgentView data={currentAgent}/> : null
                    }
                </div>
               
            </Layout>    
        </div>
    );
}
 
export default Agent;