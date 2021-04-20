import React from 'react';
import './styles2/CompanyDescription.css'


export default function CompanyDescription(props) {
const data = props.data

    return(
        <div className="company_description">
           <span>
               {data.companyDescription}
           </span>
        </div>
    )
}
