const csv = require('csv-parser')
const fs = require('fs')


module.exports.create=(req,res)=>{
     //console.log(req.file)
    const results = [];
    fs.createReadStream(`${req.file.path}`)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            fs.unlink(`${req.file.path}`, (err)=>{
                //console.log(err)
            })
            res.send(results)
        });
        
}