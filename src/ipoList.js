import React from 'react';
import { Link } from 'react-router-dom';
import SampleData from './data/sampleData.json';
import './styles/ipoList.css';

export default function IpoList() {
    const { companies } = SampleData;

    return (
        <div className='ipo-list-container'>
            <div className='nav-bar'>
                <table>
                    <thead>
                        <tr>
                            <th>Company / Issue date</th>
                            <th className='text-center'>Issue size</th>
                            <th className='text-center'>Price range</th>
                            <th className='text-center'>Min.invest / qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map(company => (
                            <tr key={company.id}>
                                <td className='company-details'>
                                    <img src={company.logo} alt={company.name} />
                                    <div>
                                        <Link to={`/ipo-details/${company.path}`}>
                                            {company.name}
                                        </Link>
                                        <span>{company.issue_date}</span>
                                    </div>
                                </td>
                                <td className='text-center'>{company.issue_size}</td>
                                <td className='text-center'>{company.price_range}</td>
                                <td className='text-center'>{company.min_invest_rupees}
                                    <span>{company.min_invest_quantity}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
