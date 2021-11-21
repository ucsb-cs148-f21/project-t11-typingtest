import React, {useState, useEffect } from 'react';

export default function CodePractice(match) {
	useEffect(() => {
		fetchItem();
        console.log(match.match.params.id);
	}, []);

	const [item, setItem] = useState({code:"a"}); 
	const [code, setCode] = useState({code:"a"}); 
	const name = 'Josh Perez';
    
	const fetchItem = async () => {
		const fetchItem = await fetch(`http://127.0.0.1:5000/codesnippet/Java`
        );
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
		console.log(item[0]);
		console.log(item[0].code);
		console.log(item[match.match.params.id].code);
		console.log(typeof item[0].code)
		const code = item[match.match.params.id].code;
		setCode(code)
		console.log(code);
		console.log(typeof code)
	}

	return (
		<pre>
			{JSON.stringify(code, null, 2)}
		</pre>
	);
}
