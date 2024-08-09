"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const urlDB = 'mysql://admin:@12LkfU09*as@localhost:3306/curso-node';
const db = new sequelize_1.Sequelize(urlDB);
exports.default = db;
//# sourceMappingURL=connection.js.map