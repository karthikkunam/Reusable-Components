import React from 'react';
import { action } from '@storybook/addon-actions';
import BreadCrumb from '.';

export default {
  title: 'BreadCrumb',
  component: BreadCrumb,
};

 const route1 = [{name:'Home', href:'https://getbootstrap.com/docs/4.0/components/breadcrumb/#'}];
 const route2 = [{name:'Home', href:'https://getbootstrap.com/docs/4.0/components/breadcrumb/#'}, {name:'Products', href:'home/products'}];
 const route3 = [{name:'Home', href:'home'}, {name:'Products', href:'home/products'}, {name:'Library', href:'home/products/library'} ];

 export const BasicBreadCrumb = () => (
    <>
    <BreadCrumb routes={route1} routeChangeFromBreadCrumb={action('href')}/>
    <BreadCrumb routes={route2} routeChangeFromBreadCrumb={action('href')}/>
    <BreadCrumb routes={route3} routeChangeFromBreadCrumb={action('href')}/>
    </>
);
