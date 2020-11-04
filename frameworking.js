class Frameworking {
    constructor() {
        this.frameworkingDao = require('../daos/frameworking_dao.js')
    }

    instantiate(json) {
        var frameworking = new Frameworking()

        frameworking.json = json

        return frameworking

    }



    loadAll() {
        this.frameworkingsJson = this.frameworkingDao.loadAll()

        var frameworkings = []
        let frameworkingClass = new Frameworking()

        this.FrameworkingsJson.forEach(FrameworkingJson => {
            
            let frameworking = frameworkingClass.instantiate(FrameworkingJson)
            frameworkings.push(frameworking)
        });
        return frameworkings
    }
}
module.exports = new Frameworking()


const AirtablePlus = require('airtable-plus');
const airtable = require('airtable-plus-rest-dao-config.js');
const { create } = require('domain');
const config = { tableName: 'Frameworkings' };

class FrameworkingDao{
 
    async create({json){
        const res = await airtable.create(json,config)
    }
 
    async findByID(id){
        const res = await airtable.find(id);
        return res
    }

    
        
    async loadAllFromCache() {
        var fs = require('fs');
        var frameworkings = []
        var frameworkingFiles = fs.readdirSync(process.cwd() + '/frameworkings/');

        frameworkingsFiles.forEach(frameworkingFile => {
            if (frameworkingFile.endsWith(".json")) {
                var jsonObject = require(process.cwd() + '/frameworkings/' + frameworkingFile)
                frameworkings.push(jsonObject)
            }

        });
        return frameworkings
    }

    async update(json){
        const updateRes = await airtable.update(json.id, {
            Name: 'foobar'
        }, config);
        return updateRes
    }

    delete(id){
        const deleteRes = await airtable.delete(id,config);
    }


}
module.exports = new FrameworkingDao()

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

