import React, { Fragment, createContext } from 'react'
import {View} from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';
import {Router,DirectNavigate} from '../navigations'

export const Controller = createContext()

function AppControllers (props) {
    return(
        <Controller.Provider value={{...props,}}>
            <Router ref={navigatorRef => { DirectNavigate.setTopLevelNavigator(navigatorRef) }} />
        </Controller.Provider>
    )
}

function mapStateToProps(state) {
    return {
        newsReducer: state.newsReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators( { ...actions }, dispatch ) };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppControllers);


