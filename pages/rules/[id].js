import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// components
import Layout from '../../app/components/layout/Layout';
import RuleView from '../../app/components/rules/Rule';

// state
import RuleContext from '../../app/context/rules/ruleContext';

const Rule = () => {

    const router = useRouter();
    // id query param
    const { id } = router.query
    // rule context
    const { 
        currentRule,
        currentRuleId,
        setCurrentRuleId,
        getRuleById } = useContext(RuleContext);

    // when url id param change
    useEffect( () => {
        setCurrentRuleId(id);
    },[id]);

    // when selected rule change
    useEffect( () => {
        if(currentRuleId){
            getRuleById(currentRuleId);
        }
        
    }, [currentRuleId]);

        

    return (  
        <div>
            <Layout>
                <div className="container pt-4">
                    {/*** Header  ***/}
                    <div className="row border-bottom mb-3">
                        {/*** Title and Breadcrumb navigation  ***/}
                        <div className="col-8">
                            <h1>Rule #{currentRuleId}</h1>
                        </div>
                        <div className="col-4">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb p-0 m-0  fs-5">
                                    <li className="breadcrumb-item">
                                        <Link href="/rules">Rules</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Rule View #{currentRuleId}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    {/*** Rule Detail  ***/}
                    { currentRule ? 
                        <RuleView data={currentRule}/> : null
                    }
                </div>
            </Layout>    
        </div>
    );
}
 
export default Rule;