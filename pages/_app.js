import '../styles/globals.css'

// States
import AlertState from '../app/context/alerts/alertState';
import AgentState from '../app/context/agents/agentState';
import RuleState from '../app/context/rules/ruleState';
import SpinnerProvider from '../app/context/spinner/spinnerContext';

function MyApp({ Component, pageProps, router }) {
  return (
      <AlertState>
        <AgentState>
          <RuleState>
            <SpinnerProvider>
              <Component {...pageProps} key={router.route}/>
            </SpinnerProvider>
          </RuleState>
        </AgentState>
      </AlertState> 
  )
    
}

export default MyApp
