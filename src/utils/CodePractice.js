import React, {useState, useEffect } from 'react';

export default function CodePractice(match) {
	useEffect(() => {
		fetchItem();
        console.log(match.match.params.id);
	}, []);

	const [item, setItem] = useState({code:"a"});
    
	const fetchItem = async () => {
		const fetchItem = await fetch(`http://127.0.0.1:5000/codesnippet/Java`
        );
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
	}

	return (
		<div>
			<h1>hello</h1>
            <div>{item[match.match.params.id].code}</div>
		</div>
	)
}

