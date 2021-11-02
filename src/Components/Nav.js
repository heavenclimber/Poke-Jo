import React from 'react'
import GetPokemon from './GetPokemon'
import DisplayPokemon from './DisplayPokemon'
import MyPokemon from './MyPokemon'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logocollection from '../img/bag.png'
import logoapp from '../img/pokejo.png'



function Nav() {
    return (
        <Router >
            <div data-testid="navbar" className='navbar'>
                <div className='pokejoContainer'>
                    <Link to={"/pokelist/"} href='#' data-testid='homebutton'>
                        <img className='pokejo' src={logoapp} alt='nav-logo' />
                    </Link>
                </div>
                <div>
                    <Link to={"/mypokemon/"} data-testid='bagbutton'  href='#'>
                        <img className='bagnav bouncemycollection' src={logocollection} alt='nav-bag' />
                    </Link>
                </div>

            </div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pokelist" component={GetPokemon} />
                <Route path={"/pokedetail"} component={DisplayPokemon} />
                <Route path={"/mypokemon"} component={MyPokemon} />
            </Switch>

        </Router>
    )
}

const Home = () => (
    <GetPokemon />
)

export default Nav
