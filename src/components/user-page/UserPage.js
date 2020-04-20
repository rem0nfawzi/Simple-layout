import React from 'react';
import { Row, Col } from 'antd';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';
import { Switch, Route } from 'react-router-dom';

const UserPage = () => {
	return (
		<Row style={{ width: '100%' }}>
			<Col span={5} style={{ height: '100%', maxHeight: '100%' }}>
				<Sidebar />
			</Col>
			<Col span={19} style={{ minHeight: '100%' }}>
				<Switch>
					<Route exact path={[ '/', '/:id' ]} children={<Content />} />
				</Switch>
			</Col>
		</Row>
	);
};

export default UserPage;
