import React, { useEffect } from 'react';

const Content1 = () => {
	useEffect(() => {
		console.log('CONTENT 1 RENDERED');
	}, []);
	return <div>CONTENT 1</div>;
};

export default Content1;
