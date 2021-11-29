import React, {useState, useEffect } from 'react';
import TypingComponent from '../components/TypingComponent';




export default function CodePractice(match) {

	useEffect(() => {
		fetchItem();
        console.log(match.match.params._id);
	}, []);

	const [item, setItem] = useState({code:"a"}); 
	const [code, setCode] = useState({code:"a"}); 
	const [_id, setID] = useState();
	const name = 'Josh Perez';
    
	const fetchItem = async () => {
		const fetchItem = await fetch(`http://127.0.0.1:5000/codesnippet/Java`
        );
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
		console.log(item[0]);
		console.log(item[0].code);
		//console.log(item[match.match.params._id].code);
		//console.log(typeof item[0].code)
		//const code = item[match.match.params._id].code;
		//setCode(code)
		console.log(code);
		console.log(typeof code)
		setCode(console.log(item[0].code));

		for(var i = 0; i < item.length; i++) {
			var obj = item[i];
			if (obj._id  == match.match.params._id)
			{
				console.log(obj);
				setCode(obj.code)
				setID(obj._id)
			}
		}
		console.log(_id)
	}


	return (
		<div>
			<TypingComponent ID='3687284161695356416'/>
		</div>
	);
}
