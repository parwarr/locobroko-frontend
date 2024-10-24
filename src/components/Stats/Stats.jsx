import React, { useState, useEffect } from 'react';
import { fetchServerData } from '../../utils/serverData';

function Stats() {
    const [serverData, setServerData] = useState({
        online: '',
        server: '',
        motd: '',
        playerCount: 0,
        favicon: '',
        error: null,
    });

    useEffect(() => {
        const getData = async () => {
            const data = await fetchServerData('locobroko.net');
            setServerData(data);
        };

        getData();
    }, []);

    const statsData = [
        {
            title: '16 GB',
            description: 'Arbeitsspeicher',
            imageSrc: '/RAM.webp',
        },
        {
            title: '...',
            description: '',
            imageSrc: '/serverIcon.png',
        },
        {
            title: serverData.online,
            description: '',
            imageSrc: serverData.favicon,
        },
        {
            title: '30',
            description: 'Ø Spieler letzte 30 Tage',
            imageSrc: '/shield.webp',
        },
        {
            title: serverData.playerCount,
            description: 'Spieler Online',
            imageSrc: '/shieldv2.webp',
        },
        {
            title: serverData.server,
            description: 'Server Status',
            imageSrc: serverData.favicon, 
        },
    ];

    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-extrabold text-white mb-10">
                Statistiken
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {statsData.map((stat, index) => (
                    <div
                        key={index}
                        className="relative p-6 rounded-lg shadow-lg text-white text-center bg-opacity-70"
                    >
                        
                        <img
                            src={stat.imageSrc}
                            alt={stat.title}
                            className="mx-auto mb-4 w-full h-full object-cover rounded-3xl"
                        />
                        
                        <div
                            className={`absolute inset-0 flex flex-col justify-center items-center p-6 rounded-3xl `}
                            style={{
                                background: 'rgba(0, 0, 0, 0.3)',  
                                padding: '10px',
                            }}
                        >
                            <h3
                                className={`font-bold text-white text-center text-3xl mt-14`}
                                style={{
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', 
                                }}
                            >
                                {stat.title}
                            </h3>
                            <p
                                className={`mt-2 text-lg text-white`}
                                style={{
                                    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)',  
                                }}
                            >
                                {stat.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Stats;
