import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function GithubProfile({ username }) {
    const [profile, setProfile] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                setProfile(data);
                setIsLoading(false);
            });
    }, [username]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{profile.login}</h1>
            <img src={profile.avatar_url} alt={profile.name} />
            <h2>{profile.name} - {profile.location}</h2>
        </div>
    );
}

GithubProfile.propTypes = {
    username: PropTypes.string.isRequired
};
