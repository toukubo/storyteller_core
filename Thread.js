class Thread {
    constructor() {
        this.threadDao = require('../daos/thread_dao.js')
    }

    instantiate(json) {
        var thread = new Thread()

        thread.json = json

        return thread

    }



    loadAll() {
        this.threadsJson = this.threadDao.loadAll()

        var threads = []
        let threadClass = new Thread()

        this.ThreadsJson.forEach(ThreadJson => {
            
            let thread = threadClass.instantiate(ThreadJson)
            threads.push(thread)
        });
        return threads
    }
}
module.exports = new Thread()


const AirtablePlus = require('airtable-plus');
const airtable = require('airtable-plus-rest-dao-config.js');
const { create } = require('domain');
const config = { tableName: 'Threads' };

class ThreadDao{
 
    async create(json){
        const res = await airtable.create(json,config)
    }
 
    async findByID(id){
        const res = await airtable.find(id);
        return res
    }

    
        
    async loadAllFromCache() {
        var fs = require('fs');
        var threads = []
        var threadFiles = fs.readdirSync(process.cwd() + '/threads/');

        threadsFiles.forEach(threadFile => {
            if (threadFile.endsWith(".json")) {
                var jsonObject = require(process.cwd() + '/threads/' + threadFile)
                threads.push(jsonObject)
            }

        });
        return threads
    }

    async update(json){
        const updateRes = await airtable.update(json.id, {
            Name: 'foobar'
        }, config);
        return updateRes
    }

    async delete(id){
        const deleteRes = await airtable.delete(id,config);
    }


}
module.exports = new ThreadDao()

const AirtablePlus = require('airtable-plus');
require('dotenv').config()

AIRTABLE_BASE_HASH=process.env.AIRTABLE_BASE_HASH
AIRTABLE_API_KEY=process.env.AIRTABLE_API_KEY
console.log("AIRTABLE_BASE_HASH : ")
console.dir(AIRTABLE_BASE_HASH)
console.log("AIRTABLE_API_KEY : ")
console.dir(AIRTABLE_API_KEY)

function read(){

}
const airtable = new AirtablePlus({
    baseID: AIRTABLE_BASE_HASH,
    apiKey: AIRTABLE_API_KEY
});

