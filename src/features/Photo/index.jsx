import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MainPage from './pages/Main'
import NotFound from '../../components/NotFound';
import AddEdit from './pages/AddEdit';

Photo.propTypes = {

};
function Photo(props) {
    const match = useRouteMatch();
    console.log({ match });
    return (
        <Switch>
            <Route exact path={match.url}>
                <MainPage></MainPage>
            </Route>
            <Route path={`${match.url}/add`} >
                <AddEdit></AddEdit>
            </Route>
            <Route path={`${match.url}/:photoId`} >
                <AddEdit></AddEdit>
            </Route>
            <Route >
                <NotFound></NotFound>
            </Route>
        </Switch>
    );
}
export default Photo;