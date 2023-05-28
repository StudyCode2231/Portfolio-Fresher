import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./Hrc.png"
								alt="Hrc"
								className="work-image"
							/>
							<div className="work-title">HighRadius</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">Jan ,2022 -  May ,2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
