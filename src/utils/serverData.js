export const fetchServerData = async (serverIp, serverPort = '25565') => {
    try {
      const response = await fetch(`https://mcapi.us/server/status?ip=${serverIp}&port=${serverPort}`);
      const data = await response.json();
  
      if (data.status === 'error') {
        console.error(data.error);
        return { error: data.error };
      }
  
       return {
      online: data.online.toString(),
      motd: data.motd || 'No MOTD available',
      playerCount: data.players.now || 0,
      favicon: data.favicon,
      server: data.server.name
    };
    } catch (error) {
      console.error('Error fetching server data:', error);
      return { error: 'Error fetching data' };
    }
  };
  