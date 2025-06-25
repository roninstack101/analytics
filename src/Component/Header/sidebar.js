import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Table, CreditCard, User, LogIn, UserPlus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const menuItems = [
        { name: 'Dashboard', icon: Home, path: '/' },
        { name: 'Tables', icon: Table, path: '/tables' },
        { name: 'Billing', icon: CreditCard, path: '/billing' },
        { name: 'Profile', icon: User, path: '/profile' },
        { name: 'Sign In', icon: LogIn, path: '/signin' },
        { name: 'Sign Up', icon: UserPlus, path: '/signup' },
    ];

    const styles = {
        sidebar: {
            position: 'fixed',
            top: '10px',
            left: '20px',
            width: '220px',
            height: '88vh',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
            padding: '1.5rem',
            borderRadius: '1rem',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Poppins, sans-serif',
            display: 'flex',
            flexDirection: 'column',
        },
        brand: {
            fontSize: 'clamp(1.4rem, 2vw, 2rem)',
            fontWeight: 'bold',
            textAlign: 'center',
            
            letterSpacing: '1px',
            margin: '0 0 2rem 0'
        },
        list: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        },
        listItem: (isActive) => ({
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            borderRadius: '8px',
            backgroundColor: isActive ? '#1A2B4F' : 'transparent',
            color: isActive ? '#4FC3F7' : '#ccc',
            fontWeight: isActive ? '600' : '500',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'background-color 0.3s, color 0.3s',
        }),
        icon: {
            width: '20px',
            height: '20px',
        },
    };

    return (
        <aside style={styles.sidebar}>
            <h2 style={styles.brand}>SALES BOARD</h2>
            <ul style={styles.list}>
                {menuItems.map(({ name, icon: Icon, path }, index) => (
                    <li key={index}>
                        <Link
                            to={path}
                            style={styles.listItem(currentPath === path)}
                            onMouseOver={(e) => {
                                if (currentPath !== path) e.currentTarget.style.backgroundColor = '#1A2B4F';
                            }}
                            onMouseOut={(e) => {
                                if (currentPath !== path) e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                        >
                            <Icon style={styles.icon} />
                            <span>{name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
