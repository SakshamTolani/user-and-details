import { useState, useEffect } from 'react';
import styles from '@/styles/AccountCreationTab.module.css'

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
            }, 6000);
        }
    }, [isAccountCreated]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
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
        <div className={styles.accountCreation}>
            <h1>Create Account</h1>

            <form className={styles.accountForm} onSubmit={handleSubmit}>
                <input
                    className={styles.formInput}
                    type="text"
                    placeholder="Username"
                    value={username}
                    required={true}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className={styles.formInput}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required={true}
                />
                <button className={styles.submitBtn} type="submit" disabled={isLoading}>
                    {isLoading ? 'Creating Account...' : 'Submit'}
                </button>
            </form>

            {isLoading && (
                <div className={styles.loaderContainer}>
                    <div className={styles.loader}></div>
                </div>
            )}

            {showToast && (
                <div className={styles.successToast}>
                    <p>Account created successfully!</p>
                </div>
            )}
        </div>
    );
};

export default AccountCreation;
