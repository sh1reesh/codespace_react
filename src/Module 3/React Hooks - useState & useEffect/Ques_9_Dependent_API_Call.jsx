// Dependent API Calls with useEffect
// Description: Create a component that displays a list of users. When a user is clicked, fetch and display their posts.

// Steps to needed:
//     - First useEffect : Fetches the user list.
//     - Second useEffect([selectedUserId]) : Fetches posts when a user is selected.
//     - Write your code within the file, by the name of component as Dependent_API_Call
import React, { useState, useEffect } from 'react';

function Dependent_API_Call() {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(true);
    const [loadingPosts, setLoadingPosts] = useState(false);
    const [error, setError] = useState(null);

    // Fetch users on component mount
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError('Failed to fetch users');
                console.error(err);
            } finally {
                setLoadingUsers(false);
            }
        };

        fetchUsers();
    }, []);

    // Fetch posts when selectedUserId changes
    useEffect(() => {
        if (selectedUserId === null) return;

        const fetchPosts = async () => {
            setLoadingPosts(true);
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`);
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                setError('Failed to fetch posts');
                console.error(err);
            } finally {
                setLoadingPosts(false);
            }
        };

        fetchPosts();
    }, [selectedUserId]);

    return (
        <div>
            <h2>Users</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {loadingUsers ? (
                <p>Loading users...</p>
            ) : (
                <ul>
                    {users.map(user => (
                        <li
                            key={user.id}
                            onClick={() => setSelectedUserId(user.id)}
                            style={{
                                cursor: 'pointer',
                                fontWeight: selectedUserId === user.id ? 'bold' : 'normal',
                            }}
                        >
                            {user.name}
                        </li>
                    ))}
                </ul>
            )}

            {selectedUserId && (
                <div>
                    <h3>Posts by {users.find(user => user.id === selectedUserId)?.name}</h3>
                    {loadingPosts ? (
                        <p>Loading posts...</p>
                    ) : (
                        <ul>
                            {posts.map(post => (
                                <li key={post.id}>{post.title}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}

export default Dependent_API_Call;
