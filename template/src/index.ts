import Vue from 'vue'
import HomePage from './pages/home';
import './css/index.css';
import { setTitle } from './util/index';

setTitle({
  title: 'Dingtalk'
});

HomePage.el = '#root';
new Vue(HomePage);
