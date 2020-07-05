var temp = require("./temp1.html");
import '../api/def.api';
import { Logger } from '../api/logger.api';

var trace = new Logger("sample1");


trace.log(temp);