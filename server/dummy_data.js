
const DUMMY_FIELDS = [
    {
        _id: 'field1',
            name: 'Courts',
            cost: 0,
            createdAt: Date.now,
            rating: 5,
            location: {
                lat: (Math.random()*180-90).toFixed(8),
                lng: (Math.random()*360-180).toFixed(8)
            }
    },  
    {
        _id: 'field2',
            name: 'Field',
            cost: 0,
            createdAt: Date.now,
            rating: 3,
            location: {
                lat: (Math.random()*180-90).toFixed(8),
                lng: (Math.random()*360-180).toFixed(8)
            }
    },  
    {
        _id: 'field3',
            name: 'small field',
            cost: 3,
            createdAt: Date.now,
            rating: 5,
            location: {
                lat: (Math.random()*180-90).toFixed(8),
                lng: (Math.random()*360-180).toFixed(8)
            }
    },  
    {
        _id: 'field4',
            name: 'indoor',
            cost: 0,
            createdAt: Date.now,
            rating: 1,
            location: {
                lat: (Math.random()*180-90).toFixed(8),
                lng: (Math.random()*360-180).toFixed(8)
            }
    }  
    
]