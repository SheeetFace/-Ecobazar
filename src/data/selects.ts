

interface StatesData {
    label: string;
    "United States":string[];
    "Canada": string[];
    "United Kingdom":string[];
}

export const statesData:StatesData = {
    label:'Country / Region',

    "United States":[
        '',
        'California',
        'Texas',
        'Florida',
        'New York',
        'Pennsylvania',
    ],
    "Canada":[
        '',
        'Toronto',
        'Montreal',
        'Vancouver',
        'Ottawa',
        'Calgary',
    ],
    "United Kingdom":[
        '',
        'London',
        'Birmingham',
        'Manchester',
        'Liverpool',
        'Bristol',
    ],
}

export const regionData = {
    label:'Country / Region',
    regions:[
        '',
        'United States',
        'Canada',
        'United Kingdom'
    ]
}
