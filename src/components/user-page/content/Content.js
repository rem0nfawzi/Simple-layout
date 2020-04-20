import React, { Suspense } from 'react';
import './content.scss';
import { useParams, Redirect } from 'react-router-dom';
const Content1 = React.lazy(() => import('./Content1'));
const Content2 = React.lazy(() => import('./Content2'));

const Content = () => {
	const { id } = useParams();
	const displayContent = (p) => {
		switch (p) {
			case 'content1':
				return <Content1 />;
			case 'content2':
				return <Content2 />;
			default:
				return <Redirect to="/content1" />;
		}
	};
	return (
		<div id="content">
			<Suspense fallback={<div>...Loading</div>}>{displayContent(id)}</Suspense>
		</div>
	);
};

export default Content;
