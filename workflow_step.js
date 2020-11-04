class WorkflowStep {
    constructor() {
        this.workflowstepDao = require('../daos/workflowstep_dao.js')
    }

    instantiate(json) {
        var workflowstep = new WorkflowStep()

        workflowstep.json = json

        return workflowstep

    }



    loadAll() {
        this.workflowstepsJson = this.workflowstepDao.loadAll()

        var workflowsteps = []
        let workflowstepClass = new WorkflowStep()

        this.WorkflowStepsJson.forEach(WorkflowStepJson => {
            
            let workflowstep = workflowstepClass.instantiate(WorkflowStepJson)
            workflowsteps.push(workflowstep)
        });
        return workflowsteps
    }
}
module.exports = new WorkflowStep()


const AirtablePlus = require('airtable-plus');
const airtable = require('airtable-plus-rest-dao-config.js');
const { create } = require('domain');
const config = { tableName: 'WorkflowSteps' };

class WorkflowStepDao{
 
    async create({json){
        const res = await airtable.create(json,config)
    }
 
    async findByID(id){
        const res = await airtable.find(id);
        return res
    }

    
        
    async loadAllFromCache() {
        var fs = require('fs');
        var workflowsteps = []
        var workflowstepFiles = fs.readdirSync(process.cwd() + '/workflowsteps/');

        workflowstepsFiles.forEach(workflowstepFile => {
            if (workflowstepFile.endsWith(".json")) {
                var jsonObject = require(process.cwd() + '/workflowsteps/' + workflowstepFile)
                workflowsteps.push(jsonObject)
            }

        });
        return workflowsteps
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
module.exports = new WorkflowStepDao()

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

