import { useState, useEffect } from 'react';
import "./AccountCreationTab.css"

const AccountCreation = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAccountCreated, setAccountCreated] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (isAccountCreated) {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
                setAccountCreated(false);
            }, 6000); // Close toast after 6 seconds
        }
    }, [isAccountCreated]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            // Dummy asynchronous request handling (simulate API call)
            await simulateAccountCreationRequest(username, password);
            setAccountCreated(true);
            setUsername('');
            setPassword('');
        } catch (error) {
            console.error('Account creation failed:', error);
        } finally {
            setLoading(false);
        }
    };

    const simulateAccountCreationRequest = (username, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    };

    return (
        <div className="account-creation">
            <h1>Create Account</h1>

            <form className="account-form" onSubmit={handleSubmit}>
                <input
                    className="form-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    required={true}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="form-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required={true}
                />
                <button className="submit-btn" type="submit" disabled={isLoading}>
                    {isLoading ? 'Creating Account...' : 'Submit'}
                </button>
            </form>

            {isLoading && (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            )}

            {showToast && (
                <div className="toast success-toast">
                    <p>Account created successfully!</p>
                </div>
            )}
        </div>
    );
};

export default AccountCreation;
