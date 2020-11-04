import { RemoteDataSource } from "../../../type";
import { ProjectDailyReportsPerPaymentTypes } from "../../models/projectdailyreportsperpaymenttypes";

import airtable from './airtable-plus-rest-dao-config';
import { create } from 'domain'

const config = { tableName: 'ProjectDailyReportsPerPaymentTypess' } 

export class ProjectDailyReportsPerPaymentTypesAirtableData implements RemoteDataSource<ProjectDailyReportsPerPaymentTypes>{
 
    async create(json:object){
        const res = await airtable.create(json,config)
    }
 
    async findByID(id:string){
        const res = await airtable.find(id);
        return res
    }
    fromData(row: any): ProjectDailyReportsPerPaymentTypes { 
        return new ProjectDailyReportsPerPaymentTypes(
            row.day,
            row.project,
            row.payment_type,
            row.value,
        );
    }
    async fetch(): Promise<ProjectDailyReportsPerPaymentTypes[]> {
        const response = await fetch(ProjectDailyReportsPerPaymentTypesRedashData.URL).then(
          async (res) => (await res.json()) as RedashQueryResult
        );
        return response.query_result.data.rows.map((row: ProjectDailyReportsPerPaymentTypes) =>
          this.fromData(row)
        );
      }
    

    async findByday(day:){
        const readRes = await airtable.read({
            filterByFormula: 'Day = '+day,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByproject(project:rechkBokzxLsjrRGa){
        const readRes = await airtable.read({
            filterByFormula: 'Project = '+project,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findBypayment_type(payment_type:recUZhExUiudS3vYg){
        const readRes = await airtable.read({
            filterByFormula: 'Payment_type = '+payment_type,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    async findByvalue(value:){
        const readRes = await airtable.read({
            filterByFormula: 'Value = '+value,
            maxRecords: 1
        });
        this.jsonObject = {}
        var jsonObject = require(file_path)
        return jsonObject
    }
    
     // this is for OF restriction. 
    async ofDay(day){ 
        const readRes = await airtable.read({
            filterByFormula: 'Day = '+day,
            maxRecords: 500
        });
        projectdailyreportsperpaymenttypess = readRes // ? this must be more like the 
        return projectdailyreportsperpaymenttypess
    }
 // this is for OF restriction. 
    async ofProject(project){ 
        const readRes = await airtable.read({
            filterByFormula: 'Project = '+project,
            maxRecords: 500
        });
        projectdailyreportsperpaymenttypess = readRes // ? this must be more like the 
        return projectdailyreportsperpaymenttypess
    }
 // this is for OF restriction. 
    async ofPayment_type(payment_type){ 
        const readRes = await airtable.read({
            filterByFormula: 'Payment_type = '+payment_type,
            maxRecords: 500
        });
        projectdailyreportsperpaymenttypess = readRes // ? this must be more like the 
        return projectdailyreportsperpaymenttypess
    }
 // this is for OF restriction. 
    async ofValue(value){ 
        const readRes = await airtable.read({
            filterByFormula: 'Value = '+value,
            maxRecords: 500
        });
        projectdailyreportsperpaymenttypess = readRes // ? this must be more like the 
        return projectdailyreportsperpaymenttypess
    }
    


    async update(id:string,json:object):Promise<void>{
        const updateRes = await airtable.update(id, { 
            Name: 'foobar'
        }, config);
        return updateRes
    }

    async delete(id:string){
        const deleteRes = await airtable.delete(id,config);
    }


}

