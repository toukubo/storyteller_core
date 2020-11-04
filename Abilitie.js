
class AbilitieDao{

    findByTools(tools){
        var file_path = process.cwd()+"/abilities/" +  tools + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByName(Name){
        var file_path = process.cwd()+"/abilities/" +  Name + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByAbilitiestools(AbilitiesTools){
        var file_path = process.cwd()+"/abilities/" +  AbilitiesTools + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByStaffs(Staffs){
        var file_path = process.cwd()+"/abilities/" +  Staffs + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    findByJobs(jobs){
        var file_path = process.cwd()+"/abilities/" +  jobs + ".json"
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }

    findByTools(Tools){
        abilities = this.loadAll()
        var found = {}
        abilities.forEach(abilitie => {
            if( abilitie.tools === tools ){
                found = abilitie
            }
        });
        return found
    }
    findByName(Name){
        abilities = this.loadAll()
        var found = {}
        abilities.forEach(abilitie => {
            if( abilitie.Name === Name ){
                found = abilitie
            }
        });
        return found
    }
    findByAbilitiestools(Abilitiestools){
        abilities = this.loadAll()
        var found = {}
        abilities.forEach(abilitie => {
            if( abilitie.AbilitiesTools === AbilitiesTools ){
                found = abilitie
            }
        });
        return found
    }
    findByStaffs(Staffs){
        abilities = this.loadAll()
        var found = {}
        abilities.forEach(abilitie => {
            if( abilitie.Staffs === Staffs ){
                found = abilitie
            }
        });
        return found
    }
    findByJobs(Jobs){
        abilities = this.loadAll()
        var found = {}
        abilities.forEach(abilitie => {
            if( abilitie.jobs === jobs ){
                found = abilitie
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
module.exports = new AbilitieDao()

const AirtablePlus = require('airtable-plus');
const airtable = require('airtable-plus-rest-dao-config.js');
const { create } = require('domain');
const config = { tableName: 'Abilities' };

class AbilitieDao{
 
    async create({json){
        const res = await airtable.create(json,config)
    }
 
    async findByID(id){
        const res = await airtable.find(id);
        return res
    }

    async findByTools(tools){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Tools = '+tools,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
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
    async findByAbilitiestools(AbilitiesTools){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Abilitiestools = '+AbilitiesTools,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByStaffs(Staffs){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Staffs = '+Staffs,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByJobs(jobs){ // this is for the unique key based finding, like it has anotehr key like name, account mail address, one time passwords.
        const readRes = await airtable.read({
            filterByFormula: 'Jobs = '+jobs,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    
     // this is for OF restriction. 
    async ofTools(tools){ 
        const readRes = await airtable.read({
            filterByFormula: 'Tools = '+tools,
            maxRecords: 500
        });
        abilities = readRes // ? this must be more like the 
        return abilities
    }
 // this is for OF restriction. 
    async ofName(Name){ 
        const readRes = await airtable.read({
            filterByFormula: 'Name = '+Name,
            maxRecords: 500
        });
        abilities = readRes // ? this must be more like the 
        return abilities
    }
 // this is for OF restriction. 
    async ofAbilitiestools(AbilitiesTools){ 
        const readRes = await airtable.read({
            filterByFormula: 'Abilitiestools = '+AbilitiesTools,
            maxRecords: 500
        });
        abilities = readRes // ? this must be more like the 
        return abilities
    }
 // this is for OF restriction. 
    async ofStaffs(Staffs){ 
        const readRes = await airtable.read({
            filterByFormula: 'Staffs = '+Staffs,
            maxRecords: 500
        });
        abilities = readRes // ? this must be more like the 
        return abilities
    }
 // this is for OF restriction. 
    async ofJobs(jobs){ 
        const readRes = await airtable.read({
            filterByFormula: 'Jobs = '+jobs,
            maxRecords: 500
        });
        abilities = readRes // ? this must be more like the 
        return abilities
    }
    
    async loadAllFromCache() {
        var fs = require('fs');
        var abilities = []
        var abilitieFiles = fs.readdirSync(process.cwd() + '/abilities/');

        abilitiesFiles.forEach(abilitieFile => {
            if (abilitieFile.endsWith(".json")) {
                var jsonObject = require(process.cwd() + '/abilities/' + abilitieFile)
                abilities.push(jsonObject)
            }

        });
        return abilities
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
module.exports = new AbilitieDao()

class Abilitie {
    constructor() {
        this.abilitieDao = require('../daos/abilitie_dao.js')
    }

    instantiate(json) {
        var abilitie = new Abilitie()

        abilitie.json = json

        abilitie.tools = abilitie.json.tools

        // this is for nested models. to reference to the tools model abilitieibutes
        abilitie.toolssJson = abilitie.json.toolss
        abilitie.toolss = []
        abilitie.toolssJson.forEach(toolsJson => {
            const Tools = require('./tools.js')
            var tools = Tools.instantiate(toolsJson)
            tools.setAbilitie(tools)
            abilitie.toolss.push(tools)
        });
        abilitie.Name = abilitie.json.Name

        // this is for nested models. to reference to the Name model abilitieibutes
        abilitie.NamesJson = abilitie.json.Names
        abilitie.Names = []
        abilitie.NamesJson.forEach(NameJson => {
            const Name = require('./Name.js')
            var Name = Name.instantiate(NameJson)
            Name.setAbilitie(Name)
            abilitie.Names.push(Name)
        });
        abilitie.AbilitiesTools = abilitie.json.AbilitiesTools

        // this is for nested models. to reference to the AbilitiesTools model abilitieibutes
        abilitie.AbilitiesToolssJson = abilitie.json.AbilitiesToolss
        abilitie.AbilitiesToolss = []
        abilitie.AbilitiesToolssJson.forEach(AbilitiesToolsJson => {
            const Abilitiestools = require('./AbilitiesTools.js')
            var AbilitiesTools = Abilitiestools.instantiate(AbilitiesToolsJson)
            AbilitiesTools.setAbilitie(AbilitiesTools)
            abilitie.AbilitiesToolss.push(AbilitiesTools)
        });
        abilitie.Staffs = abilitie.json.Staffs

        // this is for nested models. to reference to the Staffs model abilitieibutes
        abilitie.StaffssJson = abilitie.json.Staffss
        abilitie.Staffss = []
        abilitie.StaffssJson.forEach(StaffsJson => {
            const Staffs = require('./Staffs.js')
            var Staffs = Staffs.instantiate(StaffsJson)
            Staffs.setAbilitie(Staffs)
            abilitie.Staffss.push(Staffs)
        });
        abilitie.jobs = abilitie.json.jobs

        // this is for nested models. to reference to the jobs model abilitieibutes
        abilitie.jobssJson = abilitie.json.jobss
        abilitie.jobss = []
        abilitie.jobssJson.forEach(jobsJson => {
            const Jobs = require('./jobs.js')
            var jobs = Jobs.instantiate(jobsJson)
            jobs.setAbilitie(jobs)
            abilitie.jobss.push(jobs)
        });
        return abilitie

    }


    findByTools(tools) {
        
        var json = this.toolsDao.findByTools(tools)
        return this.instantiate(json)
    }
    findByName(Name) {
        
        var json = this.NameDao.findByName(Name)
        return this.instantiate(json)
    }
    findByAbilitiestools(AbilitiesTools) {
        
        var json = this.AbilitiesToolsDao.findByAbilitiestools(AbilitiesTools)
        return this.instantiate(json)
    }
    findByStaffs(Staffs) {
        
        var json = this.StaffsDao.findByStaffs(Staffs)
        return this.instantiate(json)
    }
    findByJobs(jobs) {
        
        var json = this.jobsDao.findByJobs(jobs)
        return this.instantiate(json)
    }

    loadAll() {
        this.abilitiesJson = this.abilitieDao.loadAll()

        var abilities = []
        let abilitieClass = new Abilitie()

        this.AbilitiesJson.forEach(AbilitieJson => {
            
            let abilitie = abilitieClass.instantiate(AbilitieJson)
            abilities.push(abilitie)
        });
        return abilities
    }
}
module.exports = new Abilitie()


