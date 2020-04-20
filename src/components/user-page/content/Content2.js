import React, { useEffect } from 'react';

const Content2 = () => {
	useEffect(() => {
		console.log('CONTENT 2 RENDERED');
	}, []);
	return <div>CONTENT 2</div>;
};

export default Content2;
