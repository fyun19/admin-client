 import React,{Component} from 'react'
 import {message,Button} from 'antd'
 import {HashRouter,BrowserRouter,Route,Switch} from 'react-router-dom'
 import Admin from './pages/admin/admin.jsx'
 import Login from './pages/login/login.jsx'
 class App extends Component{
 
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" component={Admin}></Route>
                </Switch>
            </HashRouter>
        )
    }
}

export default App