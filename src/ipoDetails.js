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
            <div className='ipo-header-row flex-pad'>

                <div className='flex-pad '>
                    <div className='back-btn' onClick={() => window.history.back()}>
                        &lt;
                    </div>
                    <img src={company.logo} alt={company.name} />
                    <div>
                        <div className='company-name'>{company.name}  </div>
                        <div className='issue-date'>{company.issue_date}</div>
                    </div>
                </div>
                <div className='flex-pad download-apply'>
                    <img src={'../asset/logos/download-icon.svg'}></img>
                    <button className='apply-btn' >Apply now</button>
                </div>
            </div>
            <div className='ipo-heading-details section-gap'>
                <h5 className='ipo-heading'>IPO details</h5>
                <div className='ipo-details'>
                    <div className='flex'>
                        <div className='flex-1'>
                            <h5>Issue size</h5>
                            <div>{company.details.issue_range}</div>
                        </div>
                        <div className='flex-1'>
                            <h5>Prince range</h5>
                            <div>{company.price_range}</div>
                        </div>
                        <div className='flex-1'>
                            <h5>Minimum amount</h5>
                            <div>{company.min_invest_rupees}</div>
                        </div>
                        <div className='flex-1'>
                            <h5>Lot size</h5>
                            <div>{company.min_invest_quantity}</div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex-1'>
                            <h5>Issue dates</h5>
                            <div>{company.issue_date}</div>
                        </div>
                        <div className='flex-1'>
                            <h5>List on</h5>
                            <div>{company.details.listed_on}</div>
                        </div>
                        <div className='flex-1'>
                            <h5>Listed price</h5>
                            <div>{company.details.listed_price}</div>
                        </div>
                        <div className='flex-1'>
                            <h5>Listing gains</h5>
                            <div>{company.details.listed_gains} <span className='listed-gains'>{`(${company.details.listed_gains_percentage})`}</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ipo-heading-timeline section-gap'>
                <h5 className='ipo-heading'>IPO timeline</h5>
                <div className='ipo-timeline'>
                    <ul class="base-timeline">
                        <li class="base-timeline-item">
                            <span class="base-timeline-summary-text">Binding starts</span>
                            <span class="base-timeline-summary-text1">12 Dec 2023</span>
                        </li>
                        <li class="base-timeline-item">
                            <span class="base-timeline-summary-text">Binding ends</span>
                            <span class="base-timeline-summary-text1">12 Dec 2023</span>
                        </li>
                        <li class="base-timeline-item">
                            <span class="base-timeline-summary-text">Allotment finalization</span>
                            <span class="base-timeline-summary-text1">12 Dec 2023</span>
                        </li>
                        <li class="base-timeline-item">
                            <span class="base-timeline-summary-text">Refund Initiation</span>
                            <span class="base-timeline-summary-text1">12 Dec 2023</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='ipo-description section-gap'>
                <h5 className='ipo-heading'>About the company</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                </p>
            </div>
        </div>
    );
}
