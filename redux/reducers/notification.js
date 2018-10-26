const INITIAL_STATE = [
    {
        type: 'Recommendation',
        book: {
            title: 'The Lord of the Rings'
        },
        friend: {
            _id: "5bb3ffe9f6fc0cd8aebdaa88",
            first_name: "Eddie",
            last_name: "Lee",
            email: "eddie.le@stanford.edu",
            alias: 'Atticus Finch',
            job: 'Lawyer',
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Atticus_Finch.png/250px-Atticus_Finch.png",
            address: {
                street: "1000 ABC Rd",
                city: "Star City",
                state: "New York",
                zipcode: "123456",
                country: "USA",
                additional_info: "Suite 1/2"
            }
        },
        date: new Date()
    },
    {
        type: 'Medal',
        book: {
        },
        friend: {
        },
        medal: {
            _id: '12353w',
            name: 'The Fellowship',
        },
        date: new Date()
    },
    {
        type: 'New friend',
        book: {
        },
        friend: {
            _id: "5bb3ffe9f6fc0cd8aebdaa88",
            first_name: "Eddie",
            last_name: "Lee",
            email: "eddie.le@stanford.edu",
            alias: 'Atticus Finch',
            job: 'Lawyer',
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Atticus_Finch.png/250px-Atticus_Finch.png",
            address: {
                street: "1000 ABC Rd",
                city: "Star City",
                state: "New York",
                zipcode: "123456",
                country: "USA",
                additional_info: "Suite 1/2"
            }
        },
        date: new Date()
    },
];

notificationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state
    }
};