import React, {useState, useEffect } from 'react';
import TypingComponent from '../components/TypingComponent';
import getUser from "./get-user";
import Layout from "../components/Layout";

export default function CodePracticePython(match) {

	useEffect(() => {
		fetchItem();
        console.log(match.match.params._id);
	}, []);

	const [item, setItem] = useState([]); 
	const [code, setCode] = useState(""); 
	const [_id, setID] = useState();
    
	const fetchItem = async () => {
		const fetchItem = await fetch(`http://127.0.0.1:5000/codesnippet/Python`
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
	if(code != ""){
	
	const user = getUser();
	return (
		<Layout user = {user}>
			<TypingComponent text={code}/>
		</Layout>
	);
}
return (
	<div></div>
)
}