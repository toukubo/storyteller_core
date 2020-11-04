


const AirtablePlus = require('airtable-plus');
const airtable = require('airtable-plus-rest-dao-config.js');
const { create } = require('domain');
const config = { tableName: 'Attendances' };

class AttendanceDao{
 
    async create(json){
        const res = await airtable.create(json,config)
    }
 
    async findByID(id){
        const res = await airtable.find(id);
        return res
    }

    
        
    async loadAllFromCache() {
        var fs = require('fs');
        var attendances = []
        var attendanceFiles = fs.readdirSync(process.cwd() + '/attendances/');

        attendancesFiles.forEach(attendanceFile => {
            if (attendanceFile.endsWith(".json")) {
                var jsonObject = require(process.cwd() + '/attendances/' + attendanceFile)
                attendances.push(jsonObject)
            }

        });
        return attendances
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
module.exports = new AttendanceDao()

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

