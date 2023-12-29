import React from 'react'

interface CustomAlertProps {
    AlertMessage: string;
    onCancelAlert: () => void;
}

const CustomSuccessAlert: React.FC<CustomAlertProps> = ({ AlertMessage, onCancelAlert }) => {

    return (
        <div id="alert-3" className="flex justify-between p-4 mb-4 text-green-800 rounded-lg bg-green-50" role="alert">
            <div className="ms-3 text-sm font-medium">
                {AlertMessage}
            </div>
            <button  onClick={onCancelAlert} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#alert-3" aria-label="Close">
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
    )
}

export default CustomSuccessAlert;