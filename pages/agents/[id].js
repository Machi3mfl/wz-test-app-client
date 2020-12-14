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
    // id query param
    const { id } = router.query
     // agent context
    const { 
        currentAgent,
        currentAgentId,
        setCurrentAgentId,
        getAgentById }  = useContext(AgentContext);

    // if id param change
    useEffect( () => {
        setCurrentAgentId(id);
    },[id]);

    
    // if current agent id change
    useEffect( () => {
        if(currentAgentId){
            getAgentById(currentAgentId);
        }
        
    }, [currentAgentId]);

        

    return (  
        <div>
            <Layout>
                <div className="container pt-4">
                    {/******** Header  ********/}
                    <div className="row border-bottom mb-3">
                        {/*** Title  ***/}
                        <div className="col-8">
                            <h1>Agent #{currentAgentId}</h1>
                        </div>
                        <div className="col-4">
                            {/*** Breadcrumb Navigation  ***/}
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
                    {/*** Agent data  ***/}
                    { currentAgent ? 
                        <AgentView data={currentAgent}/> : null
                    }
                </div>
               
            </Layout>    
        </div>
    );
}
 
export default Agent;