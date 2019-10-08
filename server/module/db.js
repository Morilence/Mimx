const MongoClient = require('mongodb').MongoClient;
const Config = require('./config');

class Db {

    // 实现单例模式
    static getInstance () {
        if (!Db.instance) {
            Db.instance = new Db();
        }
        return Db.instance;
    }

    constructor () {
        this.db = '';
        this.connect();
    }

    // 连接数据库
    connect () {
        // 使返回一个异步对象
        return new Promise( (resolve, reject) => {
            // 判断db对象存不存在，不存在则创建，存在则返回已有的，避免每次都进行重新连接
            if (!this.db) {
                MongoClient.connect(Config.dbUrl, {useNewUrlParser:true, useUnifiedTopology: true}, (err, client) => {
                    if (err) {
                        reject(err);
                    } else {
                        this.db = client.db(Config.dbName);
                        resolve(this.db);
                    }
                });
            } else {
                resolve(this.db);
            }
        }); 
    }

    find (collectionName, json) {
        return new Promise( (resolve, reject) => {
            this.connect().then( (db) => {
                var result = db.collection(collectionName).find(json);
                // 遍历结果
                result.toArray(function (err, docs) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(docs);
                    }
                });
            });
        });
    }

    update (collectionName, wjson, ujson) {
        return new Promise( (resolve, reject) => {
            this.connect().then( (db) => {
                db.collection(collectionName).updateOne(wjson, { $set:ujson }, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
        });
    }

    insert (collectionName, json) {
        return new Promise( (resolve, reject) => {
            this.connect().then( (db) => {
                db.collection(collectionName).insertOne(json, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
        });
    }

    remove (collectionName, json) {
        return new Promise( (resolve, reject) => {
            this.connect().then( (db) => {
                db.collection(collectionName).removeOne(json, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
        });
    }
}

module.exports = Db.getInstance();