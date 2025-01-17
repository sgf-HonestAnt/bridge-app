import React from 'react';
import { useRouter } from 'next/router';

const ResourceDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Resource Details</h1>
            <p>Detailed view of a specific resource (e.g., beds, food, or services).</p>
            <p>Resource ID: {id}</p>
        </div>
    );
};

export default ResourceDetailsPage;
