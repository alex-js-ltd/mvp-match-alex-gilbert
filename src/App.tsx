import React, { FC } from 'react';
import { GlobalStyle } from './theme';
import Header from './comps/header';
import SideBar from './comps/sidebar';
import SubHeader from './comps/subheader';
import Grid from './comps/grid';

const App: FC = () => (
  <div>
    <GlobalStyle />
    <Header />
    <SubHeader />
    <SideBar />
    <Grid />
  </div>
);

export default App;
