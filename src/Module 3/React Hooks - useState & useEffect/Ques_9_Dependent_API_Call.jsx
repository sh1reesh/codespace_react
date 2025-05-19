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

    // First useEffect: Fetch users
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoadingUsers(false);
            })
            .catch(err => {
                console.error('Error fetching users:', err);
                setLoadingUsers(false);
            });
    }, []);

    // Second useEffect: Fetch posts when selectedUserId changes
    useEffect(() => {
        if (selectedUserId !== null) {
            setLoadingPosts(true);
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`)
                .then(res => res.json())
                .then(data => {
                    setPosts(data);
                    setLoadingPosts(false);
                })
                .catch(err => {
                    console.error('Error fetching posts:', err);
                    setLoadingPosts(false);
                });
        }
    }, [selectedUserId]);

    return (
        <div>
            <h2>Users</h2>
            {loadingUsers ? (
                <p>Loading users...</p>
            ) : (
                <ul>
                    {users.map(user => (
                        <li 
                            key={user.id} 
                            onClick={() => setSelectedUserId(user.id)} 
                            style={{ cursor: 'pointer', fontWeight: selectedUserId === user.id ? 'bold' : 'normal' }}
                        >
                            {user.name}
                        </li>
                    ))}
                </ul>
            )}

            {selectedUserId && (
                <div>
                    <h3>Posts by User {selectedUserId}</h3>
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
