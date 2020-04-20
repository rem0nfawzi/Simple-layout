import React, { useState } from 'react';
import { Avatar, Input } from 'antd';
import './sidebar.scss';
import { UserOutlined, GithubOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	const [ activeLink, setActiveLink ] = useState(0);

	const links = [
		{ id: 0, name: 'Content 1', icon: <GithubOutlined />, path: '/content1' },
		{ id: 1, name: 'Content 2', icon: <GithubOutlined />, path: '/content2' }
	];
	return (
		<div id="sidebar">
			<div className="info">
				<Avatar size={100} icon={<UserOutlined />} />
				<h2>Jhon Doe</h2>
				<p>Graphic Designer</p>
			</div>
			<ul className="links">
				{links.map((link) => {
					return (
						<li className={activeLink === link.id ? 'active' : ''} key={link.id}>
							<Link
								to={link.path}
								onClick={() => {
									setActiveLink(link.id);
								}}
							>
								{link.icon} {link.name}
							</Link>
						</li>
					);
				})}
			</ul>
			<div className="footer">
				<p>Instructor Profile</p>
				<Input disabled placeholder="User Link" suffix={<ShareAltOutlined />} value="http://localhost:3000/" />
			</div>
		</div>
	);
};

export default Sidebar;
