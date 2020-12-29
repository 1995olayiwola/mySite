import React, {Suspense} from 'react';
import {BrowserRouter as Router,Switch,Redirect,Route} from 'react-router-dom';
import MyErrorBoundary from '../../Utils/MyErrorBoundary';
import RouteWithLayout from './RouteWithLayout';
import ProjectLayout from './ProjectLayout';
import ScrollToTop from '../../Utils/ScrollToTop';
import Loading from '../../Utils/Loading';
import Location from '../../Widgets/LocationBox/Location';
import Add4 from './Add4';
import Add6 from './Add6';
import BuyPosPaper from '../../Components/Auth/BuyPosPaper';
import Chat from './Chat';
const NotFound = React.lazy(()=> import('./NotFound'));
const Home = React.lazy(()=> import('./Home'));
const Subscribe = React.lazy(()=> import('./Subscribe'));

const Add = React.lazy(()=> import('./Add'));
const Add2 = React.lazy(()=> import('./Add2'));
const Add3 = React.lazy(()=> import('./Add3'));
const Add5 = React.lazy(()=> import('./Add5'));
//const Add4 = React.lazy(()=> import('./Add4'));
const Transfer = React.lazy(()=> import('./Transfer'));
const Admin = React.lazy(()=> import('./Admin'));

const Withdraw = React.lazy(()=> import('./Withdraw'));
const Dashboard = React.lazy(()=> import('./Dashboard'));

const Auth = React.lazy(()=> import('../../Components/Auth/Auth'));
const Payment = React.lazy(()=> import('./Payment'));
const Logout = React.lazy(()=> import('../../Components/Auth/Logout'));
const Repair = React.lazy(()=> import('../../Components/Auth/Repair'));
const Pos = React.lazy(()=> import('../../Components/Auth/Pos'));
const Register = React.lazy(()=> import('./Register'));
const Put = React.lazy(()=> import('./Put'));
 const Routes =() =>{
    

    return (
        <>
        <MyErrorBoundary>
            <Suspense fallback={<Loading />}>
                <Router>
<ScrollToTop>

    <Switch>
<RouteWithLayout component={Home} layout={ProjectLayout} path="/" exact/>
<Route component={Add} layout={ProjectLayout} path="/page/:pageId" exact/>
<Route component={Put} layout={ProjectLayout} path="/admin2" exact/>
<Route component={Add} layout={ProjectLayout} path="/add" exact/>
<Route component={Add2} layout={ProjectLayout} path="/add2" exact/>
<Route component={Add3} layout={ProjectLayout} path="/add3" exact/>
<Route component={Add4} layout={ProjectLayout} path="/add4" exact/>
<Route component={Add5} layout={ProjectLayout} path="/add5" exact/>
<Route component={Add6} layout={ProjectLayout} path="/add6" exact/>
<Route component={Subscribe} layout={ProjectLayout} path="/subscribe" exact/>
<Route component={Register} layout={ProjectLayout} path="/register" exact/>
<Route component={Payment} layout={ProjectLayout} path="/payment" exact/>
<Route component={Chat} layout={ProjectLayout} path="/chat" exact/>


            
<Route component={Transfer} layout={ProjectLayout} path="/transfer" exact/>
<Route component={Pos} layout={ProjectLayout} path="/pos" exact/>
<Route component={BuyPosPaper} layout={ProjectLayout} path="/paper" exact/>
<Route component={Repair} layout={ProjectLayout} path="/repair" exact/>
<Route component={Withdraw} layout={ProjectLayout} path="/withdraw" exact/>
<Route component={Admin} layout={ProjectLayout} path="/admin" exact/>
<RouteWithLayout  component={Dashboard} path="/dashboard" exact/>


<Route   component={Auth} path="/auth" exact/>
<Route component={Logout} layout={ProjectLayout} path="/logout" exact/>
<Route   component={NotFound} path="/notfound" exact/>
<Redirect to="/notfound" />

    </Switch>
</ScrollToTop>

                </Router>
            </Suspense>
        </MyErrorBoundary>
        </>
    )
}
export default Routes;