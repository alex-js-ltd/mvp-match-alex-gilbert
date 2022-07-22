import React, { FC, Fragment } from 'react';
import { GlobalStyle } from './theme';
import Header from './comps/header';
import SideBar from './comps/sidebar';
import SubHeader from './comps/subheader';
import Grid from './comps/grid';

const App: FC = () => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <SubHeader />
    <SideBar />
    <Grid />
  </Fragment>
);

export default App;
