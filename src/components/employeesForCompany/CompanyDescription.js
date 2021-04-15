import React from 'react';


export default function CompanyDescription(props) {
const data = props.data

    return(
        <div style={{fontSize: "1.0rem"}}>
           <span>
               {data.companyDescription}
           </span>
        </div>
    )
}
