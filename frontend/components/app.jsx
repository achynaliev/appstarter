import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import ProjectsIndexContainer from './projects/projects_index_container';
import ProjectsMainpageIndex from './projects/mainpage_projects_container';
import ProjectPageContainer from './project_view/project_page_container';
import AppStaterStatsView from './totalstats/total_stats_main';
import AppStaterFooter from './footer/footer';
import ProjectCreationContainer from './project_creation/project_creation_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SearchContainer from './search/search_container';
import RecommendedProjects from './projects/recommended/recommended_projects_container';
import LastReading from './reading/reading_last';

const App = () => (
  <div>
    <header>
    <NavBarContainer />
    <Route exact path="/" component={AppStaterStatsView}/>
    </header>
    <main>
    <Route exact path="/project/new" component={ProjectCreationContainer}/>
    <Route exact path="/projects/:projectid" component={ProjectPageContainer}/>
    <Route exact path="/" component={ProjectsMainpageIndex}/>
    <Route exact path="/" component={RecommendedProjects}/>
    <Route exact path="/" component={LastReading}/>
    <Route exact path="/explore" component={ProjectsIndexContainer}/>
    </main>

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <AppStaterFooter />
  </div>
);

export default App;
