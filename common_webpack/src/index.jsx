import * as $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import {Post} from "@models/Post";
import './styles/styles.css';
import './styles/less.less';
import json  from '@/assets/json'
import xml  from '@/assets/data.xml'
import csv  from '@/assets/data.csv'
import Logo  from '@/assets/webpack-logo'

const post = new Post({name: 'Nastya', title: 'About Me', logo: Logo})

$('pre').html(post.getPost())

const App = () => (
        <div className="container">
            <h3>Common Webpack</h3>
            <hr/>
            <div className="logo"/>
            <hr/>
            <pre/>
            <div className="logo_2"/>
            <hr/>
            <div className="box">
                <h2>Less</h2>
            </div>
        </div>
)

render(<App/>, document.getElementById('app'))

console.log(json)
console.log('XML:', xml)
console.log('CSV:', csv)