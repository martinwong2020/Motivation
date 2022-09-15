import PouchDB from 'pouchdb';

export default class DB{
    constructor(){
        this.db=new PouchDB("Quote_Submission");
        
    }
    async getAllQuotes(){
        // let allQuotes = await this.db.allDocs({include_docs: true});
        // let quotes={};

        // allQuotes.rows.forEach(n=> quotes[n.id]=n.doc);

        // return quotes;
        let quotes={};
        this.db.allDocs({include_docs: true}).then(function(result){
            console.log(result.rows.length);
            result.rows.forEach(n=> quotes[n.id]=n.doc);
            
        })
        return quotes;
    }

    async createQuotes(quote){
        // quote.createdAt = new Date();
        // quote.updatedAt = new Date();
        
        //the ... destruct the quote argument
        //https://stackoverflow.com/questions/31048953/what-are-these-three-dots-in-react-doing#:~:text=(three%20dots%20in%20JavaScript)%20is,It%20is%20a%20JavaScript%20operator.
        // const result=await this.db.post({...quote});
        // this.db.get("quote4").then(function(doc){
        //     delete(doc._rev)
        // })
        
        // const result=await this.db.put({
        //     _id:"quote25",
        //     // _rev:"1-quote5",
        //     content:quote
        // })
        // return result;
        let num=Math.ceil(Math.random()*25)
        let Data=this.db;
        let quote_id="quote"+num.toString();
        Data.get(quote_id).then(function(doc){
            doc.content=quote;
            return Data.put(doc);
        }).then(function(){
            return Data.get(quote_id);
        }).then(function(doc){
            console.log(doc);
        })

    }

    async DestroyDB(){
        this.db.destroy("Quote_Submission");
    }
    async getQuoteId(id,elem){
        let Data=this.db;
        Data.get(id).then(function(doc){
            elem.append(doc.content);
        }).then(function(){
            return Data.get(id);
        }).then(function(doc){
            console.log(doc);
        })
    }
}