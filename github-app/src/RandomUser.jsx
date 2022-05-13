import React, { useEffect, useState } from 'react';

export default function RandomUser() {
    const [user, setUser] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=1')
            .then(response => response.json())
            .then(
                data => {
                    setUser(data.results[0]);
                    setIsLoading(false);
                },
                error => {
                    setHasError(true);
                    setIsLoading(false);
                }
            );
    }, []);

    // useEffect(() => {
    //     const getUser = async () => {
    //         try {
    //             const response = await fetch('https://randomuser.me/api/?results=1')
    //             const data = await response.json();
    //             setUser(data.results[0]);
    //             setIsLoading(false);
    //         } catch {
    //             setHasError(true);
    //             setIsLoading(false);
    //         }
    //     };
    //     getUser();

    //     // fetch('https://randomuser.me/api/?results=1')
    //     //     .then(response => response.json())
    //     //     .then(data => {
    //     //         setUser(data.results[0]);
    //     //         setIsLoading(false);
    //     //     })
    //     //     .catch(() => {
    //     //         setHasError(true);
    //     //         setIsLoading(false);
    //     //     });
    // }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (hasError) {
        return <p>An error occurred, please try again later.</p>
    }

    return (
        <div>
            <h1>{user.name.first} {user.name.last}</h1>
            <img
                src={user.picture.thumbnail}
                alt={`${user.name.first}'s portrait`}
            />
        </div>
    );
}
