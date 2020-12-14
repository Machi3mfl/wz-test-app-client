import { useContext, useEffect, useState } from 'react';
//component
import Layout from '../app/components/layout/Layout'
// chart
import PieChart from '../app/components/layout/charts/pie-chart/PieChart';
import BarChart from '../app/components/layout/charts/bar-chart/BarChart';
// state
import RuleContext from '../app/context/rules/ruleContext';


export default function Home() {

  const [rulesChart, setRulesChart] = useState([]);
  const [totalAlerts, setTotalAlerts] = useState(0);

  // rule context
  const  { 
    rules,
    getRules } = useContext(RuleContext);


  // component init
  useEffect( () => {
    // get rules to draw charts
    getRules();
  }, []);


  // if rules change
  useEffect( () => {
    parseRulesToChartValue(rules);
  }, [rules]);


  /**
   * Parse rules data to chart data
   * @param {*} rules 
   */
  const parseRulesToChartValue = rules => {
    let data = [];
    let total = 0;

    rules.forEach(element => {
      
      data.push({
        label: element.description.toUpperCase(),
        value: element.total_alerts
      });

      total = total + element.total_alerts;
      
    });


    // set rules chart data
    setRulesChart(data);
    // set total alerts by rules
    setTotalAlerts(total);

  }

  return (
    <div>
      <Layout>
        <div className="container pt-2">
        {/*** Title  ***/}
        <div className="row pt-4 pb-2 mb-3 border-bottom">
          <h1>Dashboard</h1>
        </div>
        <div className="row mb-4 ">
          <div className="col">
            {/*** Total Alerts Card  ***/}
            <div className="card bg-light border-0">
              <div className="card-body row text-center">    
                  <div className="col-md-12">
                      <p className="fs-4 text-muted mb-1">TOTAL ALERTS</p>
                      <h1 className="font-weight-normal mb-3">
                          <span className="material-icons fs-1 align-middle">campaign</span>
                          <span className="align-middle">{totalAlerts}</span>
                      </h1>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">   
          
          <div className="col-7">
            {/****  Card Bar Chart *****/}
            <div className="card bg-light border-0">
              <div className="card-body text-center">
                <p className="fs-4 text-muted mb-1">AGENTS</p>
                <BarChart id="bar-chart" />
              </div>
            </div>
          </div>
          <div className="col-5">
            {/****** Card Pie Chart *******/}
            <div className="card bg-light border-0">
              <div className="card-body text-center">
                <p className="fs-4 text-muted mb-1">RULES</p>
                <PieChart 
                  data={rulesChart}
                  outerRadius={120}
                  innerRadius={10}/>
              </div>
            </div>
          </div>
         
        </div>
      </div>
     
      </Layout>    
    </div>
  )
}
