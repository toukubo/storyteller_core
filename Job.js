
class JobDao{

    findByName(Name){
        var file_path = process.cwd()+"/jobs/" +  Name + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByContracts(Contracts){
        var file_path = process.cwd()+"/jobs/" +  Contracts + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }

    findByName(Name){
        jobs = this.loadAll()
        var found = {}
        jobs.forEach(job => {
            if( job.Name === Name ){
                found = job
            }
        });
        return found
    }
    findByContracts(Contracts){
        jobs = this.loadAll()
        var found = {}
        jobs.forEach(job => {
            if( job.Contracts === Contracts ){
                found = job
            }
        });
        return found
    }
    
    loadAll() {
        var fs = require('fs');
        var s = []
        var Files = fs.readdirSync(process.cwd() + '/s/');

        sFiles.forEach(File => {
            if (File.endsWith(".json")) {
                var jsonObject = require(process.cwd() + '/s/' + File)
                s.push(jsonObject)
            }

        });
        return s
    }

}
module.exports = new JobDao()

const AirtablePlus = require('airtable-plus');
const airtable = require('airtable-plus-rest-dao-config.js');
const { create } = require('domain');
const config = { tableName: 'Jobs' };

class JobDao{
 
    async create({json){
        const res = await airtable.create(json,config)
    }
 
    async findByID(id){
        const res = await airtable.find(id);
        return res
    }

    async findByName(Name){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Name = '+Name,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByContracts(Contracts){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Contracts = '+Contracts,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    
     // this is for OF restriction. 
    async ofName(Name){ 
        const readRes = await airtable.read({
            filterByFormula: 'Name = '+Name,
            maxRecords: 500
        });
        jobs = readRes // ? this must be more like the 
        return jobs
    }
 // this is for OF restriction. 
    async ofContracts(Contracts){ 
        const readRes = await airtable.read({
            filterByFormula: 'Contracts = '+Contracts,
            maxRecords: 500
        });
        jobs = readRes // ? this must be more like the 
        return jobs
    }
    
    async loadAllFromCache() {
        var fs = require('fs');
        var jobs = []
        var jobFiles = fs.readdirSync(process.cwd() + '/jobs/');

        jobsFiles.forEach(jobFile => {
            if (jobFile.endsWith(".json")) {
                var jsonObject = require(process.cwd() + '/jobs/' + jobFile)
                jobs.push(jsonObject)
            }

        });
        return jobs
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
module.exports = new JobDao()

class Job {
    constructor() {
        this.jobDao = require('../daos/job_dao.js')
    }

    instantiate(json) {
        var job = new Job()

        job.json = json

        job.Name = job.json.Name

        // this is for nested models. to reference to the Name model jobibutes
        job.NamesJson = job.json.Names
        job.Names = []
        job.NamesJson.forEach(NameJson => {
            const Name = require('./Name.js')
            var Name = Name.instantiate(NameJson)
            Name.setJob(Name)
            job.Names.push(Name)
        });
        job.Contracts = job.json.Contracts

        // this is for nested models. to reference to the Contracts model jobibutes
        job.ContractssJson = job.json.Contractss
        job.Contractss = []
        job.ContractssJson.forEach(ContractsJson => {
            const Contracts = require('./Contracts.js')
            var Contracts = Contracts.instantiate(ContractsJson)
            Contracts.setJob(Contracts)
            job.Contractss.push(Contracts)
        });
        return job

    }


    findByName(Name) {
        
        var json = this.NameDao.findByName(Name)
        return this.instantiate(json)
    }
    findByContracts(Contracts) {
        
        var json = this.ContractsDao.findByContracts(Contracts)
        return this.instantiate(json)
    }

    loadAll() {
        this.jobsJson = this.jobDao.loadAll()

        var jobs = []
        let jobClass = new Job()

        this.JobsJson.forEach(JobJson => {
            
            let job = jobClass.instantiate(JobJson)
            jobs.push(job)
        });
        return jobs
    }
}
module.exports = new Job()


