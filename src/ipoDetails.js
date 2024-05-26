import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SampleData from './data/sampleData.json';
import './styles/ipoDetails.css';

export default function IpoDetails() {
    const { id } = useParams();
    const { companies } = SampleData;
    const company = companies.find(company => company.path === (id));

    console.log(useParams());

    if (!company) {
        return <div>Company not found</div>;
    }

    return (
        <div className='ipo-details-container'>
            <nav>
                <Link to="/">Home</Link> {'>'}<span className="current-page">Market Watch</span>
            </nav>
            <h2>{company.name} Details</h2>
            <img src={company.logo} alt={company.name} />
            <div>Issue Date: {company.issue_date}</div>
            <div>Issue Size: {company.issue_size}</div>
            <div>Price Range: {company.price_range}</div>
            <div>Min. Invest: {company.min_invest_rupees}</div>
            <div>Min. Invest Quantity: {company.min_invest_quantity}</div>
            <div>Issue Range: {company.details.issue_range}</div>
            <div>Listed On: {company.details.listed_on}</div>
            <div>Listed Price: {company.details.listed_price}</div>
            <div>Listed Gains: {company.details.listed_gains}</div>
            <div>Listed Gains Percentage: {company.details.listed_gains_percentage}</div>
        </div>
    );
}
