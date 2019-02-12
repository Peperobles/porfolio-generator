import React from 'react'

export const FormErrors = ({ formErrors }) =>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    // For every field name send a message
                    <div key={i} className="alert alert-warning" role="alert">
                        {fieldName} {formErrors[fieldName]}
                    </div>
                )
            } else {
                return '';
            }
        })}
    </div>