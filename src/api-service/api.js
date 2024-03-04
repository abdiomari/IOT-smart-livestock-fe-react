const BASE_URL = 'http://127.0.0.1:8000/api'

export const fetchData = async(endpoint, method='GET', body=null) => {
    const url = `${BASE_URL}/${endpoint}`;
    const options = {
        method,
        headers: {
            "Content-type": "application/json",
        }
    };
    if(body){
        options.body = JSON.stringify(body);
    } try {
        const response = await fetch(url, options);
        if(!response.ok){
            throw new Error(`Server error: ${response.status}`);
        } 
        return await response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    };


// export const connectWebSocket = (endpoint, onMessage) => {
//     const ws = new WebSocket(`${BASE_URL}/${endpoint}`);
    
//     ws.onopen = () => console.log("WebSocket connection established");
    
//     ws.onmessage = (event) => {
//         const data = JSON.parse(event.data);
//         onMessage(data); // Handle received data
//     };
    
//     ws.onerror = (error) => console.error("WebSocket error:", error);
    
//     return ws;
//     };
