import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action(params, queryParams) {
    BlazeLayout.render('App_body', { main: 'App_home', params: params });
  },
});

FlowRouter.route('/memo/:param', {
  name: 'App.home',
  action(params, queryParams) {
      BlazeLayout.render('App_body', { main: 'App_home', params: params });
    },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
