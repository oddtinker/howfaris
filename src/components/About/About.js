import React from 'react';
import classes from './About.module.css';
import Link from '../UI/Link/Link';

const about = () => (
  <section className={classes.About}>
    <h2>About this project</h2>
    <p>Literal physical distancing can be tough. This app visualizes the distances we're supposed to keep from each other in public spaces.</p>
    <p>Sources:</p>
    <ul>
      <li><Link urlAddress="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" urlText="World Health Organization" urlTitle="World Health Organization, official website"/></li>
      <li><Link urlAddress="https://www.ecdc.europa.eu/en/covid-19/questions-answers" urlText="European Centre for Disease Prevention and Control" urlTitle="European Centre for Disease Prevention and Control, official website"/></li>
      <li><Link urlAddress="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fprepare%2Fprevention.html" urlText="Centers for Disease Control and Prevention (CDC)" urlTitle="Centers for Disease Control and Prevention, official website"/></li>
      <li><Link urlAddress="https://www.nhs.uk/conditions/coronavirus-covid-19/staying-at-home-to-avoid-getting-coronavirus/staying-at-home-and-away-from-other-people/" urlText="National Health Service (NHS)" urlTitle="National Health Service, official website"/></li>
      <li><Link urlAddress="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks.html?topic=tilelink" urlText="Health Canada" urlTitle="Health Canada, official website"/></li>
      <li><Link urlAddress="https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/how-to-protect-yourself-and-others-from-coronavirus-covid-19/physical-distancing-for-coronavirus-covid-19" urlText="Australian Government, Department of Health" urlTitle="Australian Government, Department of Health, official website"/></li>
      <li><Link urlAddress="https://www.bundesgesundheitsministerium.de/coronavirus.html#c17088" urlText="Bundesministerium für Gesundheit" urlTitle="Bundesministerium für Gesundheit, official website"/></li>
      <li><Link urlAddress="https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-health-advice-general-public/protecting-yourself-and-others-covid-19#physicaldistancing" urlText="New Zealand Ministry of Health" urlTitle="New Zealand Ministry of Health, official website"/></li>
    </ul>
  </section>
);

export default about;