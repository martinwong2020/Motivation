import PouchDB from 'pouchdb';
import React, { useState } from 'react';
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
        let Speech=[
            "“Everything you can imagine is real.” — Pablo Picasso",
            "Why not start now?",
            "The best time to plant a tree was 20 years ago. The next best time is now!",
            "If not today, then when?",
            "It's not about the goal, rather focus on the journey and things that are pertinent.",
            "Difficult road often leads to beautiful arrivals.",
            "Opportunities don't happen, you create them.",
            "It's time to embrace and start on your goals.",
            "“If you want to buy things without looking at the price. Work without looking at the clock.” - @IAmAaronWill",
            "If the plan doesn't work, change the plan but never change your goal.",
            "It's easy to give up but holding it together will make you stand out.",
            "'Success is not final; failure is not fatal: It is… to continue that counts.' — Winston S. Churchill",
            "“Don’t let yesterday take up too much of today.” — Will Rogers'",
            "Failure builds character.",
            "“Either you run the day or the day runs you.” — Jim Rohn",
            "Take a second to understand what's holding you bac…Now think about what you can do by overcoming it.",
            "“When we strive to become better than we are, ever…ing around us becomes better too.” — Paulo Coelho",
            "“You've got to get up every morning with determina…to go to bed with satisfaction.” — George Lorimer",
            "“The most difficult thing is the decision to act, the rest is merely tenacity.” —Amelia Earhart",
            "The best preparation for tomorrow is what you do today.",
            "Start by doing what's necessary. Then you will do …sible. Eventually you'll be doing the impossible.",
            "Starting your goal will help spiral you to reach your goal.",
            "Understand how to grow by planning and starting today",
            "Just do it",
            "You got it!"    
        ]
        let Data=this.db;
        let dbdestroy=this.DestroyDB();
        this.db.allDocs({include_docs: true}).then(function(result){
            let num=result.rows.length
            console.log("here");
            console.log(num);
            if(num<=10){
                // dbdestroy;
                for(let i=0; i<25;i++){
                    let quote_id="quote"+(i+1).toString();
                    const result= Data.put({
                        _id:quote_id,
                        content:Speech[i]
                    })
                }
            }
            if(num<25){
                let quote_id="quote"+(num+1).toString();
                const result= Data.put({
                    _id:quote_id,
                    // _rev:"1-quote5",
                    content:quote
                })
            }
            else{
                let num=Math.ceil(Math.random()*25)
                
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
        })
        // const result=await this.db.put({
        //     _id:"quote25",
        //     // _rev:"1-quote5",
        //     content:quote
        // })
        // return result;
        

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
    async remove25(){
        let data=this.db
        this.db.get('quote25').then(function (doc) {
            return data.remove(doc);
        });
    }

}