import { useState, useEffect } from 'react'

function Github() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://api.github.com/users/Arbinnn')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div>Github followers : {data.followers}
        <img src={data.avatar_url} alt="Avatar" />
        </div>
    )
}

export default Github