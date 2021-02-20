import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import ProjectCreate from './projects/ProjectCreate';
import ProjectDelete from './projects/ProjectDelete';
import ProjectEdit from './projects/ProjectEdit';
import ProjectList from './projects/ProjectList';
import ProjectShow from './projects/ProjectShow';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={ProjectList} />
          <Route path="/projects/new" exact component={ProjectCreate} />
          <Route path="/projects/edit" exact component={ProjectEdit} />
          <Route path="/projects/delete" exact component={ProjectDelete} />
          <Route path="/projects/show" exact component={ProjectShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
