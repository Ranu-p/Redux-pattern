/*
 * Created on Sun Apr 28 2019
 *
 * Copyright (c) 2019 Sophatar Inc
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pagesRoutes from  '../routes/pagesRoutes';

export default function pagesLayout() {

    return (
      <div>
        <Switch>
          {pagesRoutes.map((prop, key) => {
            return (
              <Route
                component={prop.component && prop.component()}
                key={key}
                path={prop.path}
              />
            );
          })}
        </Switch>
      </div>
    );
  }


