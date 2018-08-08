import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Lessons from './modules/Lessons/Lessons'
import LessonJSX from './modules/Lessons/1_LessonJSX/LessonJSX';
import LessonElements from './modules/Lessons/2_LessonElements/LessonElements';
import LessonCompProps from './modules/Lessons/3_LessonCompProps/LessonCompProps';
import LessonStateLifeHooks from './modules/Lessons/4_LessonStateLifeHooks/LessonStateLifeHooks';
import LessonConditionalRenders from './modules/Lessons/5_LessonConditionalRenders/LessonConditionalRenders';
import LessonStateLiftup from './modules/Lessons/6_LessonStateLiftup/LessonStateLiftup';
import LessonContainerPresentational from './modules/Lessons/7_LessonContainerPresentational/LessonContainerPresentational';
import LessonUserData from './modules/Lessons/8_LessonUserData/LessonUserData';
import LessonAPIIntegration from './modules/Lessons/9_LessonAPIIntegration/LessonAPIIntegration';

export default (
	<Switch>
		<Route path="/" exact controller={Lessons}/>
		<Route path="/jsx" controller={LessonJSX}/>
		<Route path="/elements" controller={LessonElements}/>
		<Route path="/comp-props" controller={LessonCompProps}/>
		<Route path="/lifecycle-hooks" controller={LessonStateLifeHooks}/>
		<Route path="/conditional-renders" controller={LessonConditionalRenders}/>
		<Route path="/state-lift-up" controller={LessonStateLiftup}/>
		<Route path="/container-presentational" controller={LessonContainerPresentational}/>
		<Route path="/user-data" controller={LessonUserData}/>
		<Route path="/api-integration" controller={LessonAPIIntegration}/>
	</Switch>
);