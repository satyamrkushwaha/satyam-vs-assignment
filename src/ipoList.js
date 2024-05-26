import React from 'react';
import { Link } from 'react-router-dom';
import SampleData from './data/sampleData.json';

export default function IpoList() {
    const { companies } = SampleData;

    return (
        <div className='ipo-list-container'>
            <div className='nav-bar'>
                <table>
                    <thead>
                        <tr>
                            <th>Company name</th>
                            <th>Issue Size</th>
                            <th>Price Range</th>
                            <th>Min. invest</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map(company => (
                            <tr key={company.id}>
                                <td>
                                    <Link to={`/ipo-details/${company.path}`}>
                                        {company.name}
                                    </Link>
                                </td>
                                <td>{company.issue_size}</td>
                                <td>{company.price_range}</td>
                                <td>{company.min_invest_rupees}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
