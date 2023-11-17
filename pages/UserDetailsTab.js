import { useState } from 'react';

import styles from '@/styles/UserDetailsTab.module.css'

const usersData = [
    {
        id: 1,
        username: 'johnson',
        email: 'johnson@email.com',
        phone: '501-233-9876',
        createdAt: '2022-01-15'
    },
    {
        id: 2,
        username: 'jane_doe',
        email: 'jane.doe@email.com',
        phone: '492-139-8726',
        createdAt: '2021-03-05'
    },
    {
        id: 3,
        username: 'chris_123',
        email: 'chris123@email.com',
        phone: '384-129-3756',
        createdAt: '2020-09-24'
    },
    {
        id: 4,
        username: 'sarah.johnson',
        email: 'sarahjohnson@email.com',
        phone: '583-274-1293',
        createdAt: '2022-08-11'
    },
    {
        id: 5,
        username: 'david54',
        email: 'david54@email.com',
        phone: '194-286-3395',
        createdAt: '2021-11-03'
    },
    {
        id: 6,
        username: 'michael_scott',
        email: 'michael.scott@email.com',
        phone: '583-274-1293',
        createdAt: '2019-02-11'
    },
    {
        id: 7,
        username: 'dwight72',
        email: 'dwight72@email.com',
        phone: '194-382-4759',
        createdAt: '2020-12-06'
    },
    {
        id: 8,
        username: 'jim_halpert',
        email: 'jim.halpert@email.com',
        phone: '583-942-3381',
        createdAt: '2018-04-09'
    },
    {
        id: 9,
        username: 'pam_beesly',
        email: 'pam.beesly@email.com',
        phone: '492-817-3921',
        createdAt: '2017-08-12'
    },
    {
        id: 10,
        username: 'stanley_hudson',
        email: 'stanley.hudson@email.com',
        phone: '384-129-5234',
        createdAt: '2022-05-19'
    },
    {
        id: 11,
        username: 'angela_martin',
        email: 'angela.martin@email.com',
        phone: '573-123-9876',
        createdAt: '2022-10-08',
    },
    {
        id: 12,
        username: 'kevin_123',
        email: 'kevin123@email.com',
        phone: '281-398-7645',
        createdAt: '2021-06-15',
    },
    {
        id: 13,
        username: 'meredith_grey',
        email: 'meredith.grey@email.com',
        phone: '459-876-2341',
        createdAt: '2020-12-30',
    },
    {
        id: 14,
        username: 'joey_tribbiani',
        email: 'joey.tribbiani@email.com',
        phone: '732-456-7890',
        createdAt: '2021-09-22',
    },
    {
        id: 15,
        username: 'rachel_green',
        email: 'rachel.green@email.com',
        phone: '212-555-6789',
        createdAt: '2019-11-18',
    },
    {
        id: 16,
        username: 'ross_geller',
        email: 'ross.geller@email.com',
        phone: '212-555-1234',
        createdAt: '2018-07-03',
    },
    {
        id: 17,
        username: 'phoebe_buffay',
        email: 'phoebe.buffay@email.com',
        phone: '212-555-4321',
        createdAt: '2017-04-11',
    },
    {
        id: 18,
        username: 'monica_geller',
        email: 'monica.geller@email.com',
        phone: '212-555-9876',
        createdAt: '2016-02-28',
    },
    {
        id: 19,
        username: 'chandler_bing',
        email: 'chandler.bing@email.com',
        phone: '212-555-5678',
        createdAt: '2015-09-14',
    },
    {
        id: 20,
        username: 'joanna_smith',
        email: 'joanna.smith@email.com',
        phone: '615-987-2345',
        createdAt: '2014-12-07',
    },
];

const UserDetails = () => {

    const [search, setSearch] = useState('');
    const [users, setUsers] = useState(usersData);

    const handleSearch = (e) => {
        const inputValue = e.target.value;
        setSearch(inputValue);

        if (!inputValue.trim()) {
            setUsers(usersData);
        } else {
            setUsers(usersData.filter((user) =>
                user.username.includes(inputValue) ||
                user.email.includes(inputValue) ||
                user.phone.includes(inputValue) || 
                user.createdAt.includes(inputValue)
            ));
        }
    }

        return (
            <div className={styles.userDetails}>

                <input
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={handleSearch}
                    className={styles.searchBox}
                />

                <table className={styles.table}>
                    <thead>
                        <tr className={styles.tr}>
                            <th className={styles.th}>ID</th>
                            <th className={styles.th}>Name</th>
                            <th className={styles.th}>Email</th>
                            <th className={styles.th}>Phone</th>
                            <th className={styles.th}>Created</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map(user => (
                            <tr
                                key={user.id}
                                onClick={() => openModal(user)}
                                className={styles.tr}
                            >
                                <td className={styles.td}>{user.id}</td>
                                <td className={styles.td}>{user.username}</td>
                                <td className={styles.td}>{user.email}</td>
                                <td className={styles.td}>{user.phone}</td>
                                <td className={styles.td}>{user.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        );
    }

    export default UserDetails;