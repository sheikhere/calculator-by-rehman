#!/usr/bin/env node

import chalk from 'chalk';
import {num1,num2,operator} from "./input.js";
import {calculator}  from './function.js';
import { thank } from './function.js';

//-----------------------------------------------


calculator(operator,num1,num2);

//---------------------------------------------------------



thank();