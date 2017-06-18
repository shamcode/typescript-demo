import { ZipCodeValidator } from "./modules-export";
let myValidator = new ZipCodeValidator();

import { ZipCodeValidator as ZCV } from "./modules-export";
myValidator = new ZCV();

import * as validator from "./modules-export";
myValidator = new validator.ZipCodeValidator();

import num from "./modules-export";