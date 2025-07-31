// npm i express

const express = require("express");
const path = require("path");
const app = express();

app.get("/", function(request, response){
    response.send(`<html><head></head>
	<body>
        <form action='http://localhost/draw' method='get'>
            <input id="rowCnt" name="rowCnt" type="text" placeholder="row"/>
            <input id="colCnt" name="colCnt" type="text" placeholder="col"/>
            <button>Draw</button>
        </form>
	</body></html>`);
});

app.get("/draw", function(request, response){
    var rowCnt = request.query.rowCnt;
    var colCnt = request.query.colCnt;

    if(isNaN(rowCnt) || isNaN(colCnt)){
        response.send(`<html><head></head>
        <body>
            <form action='http://localhost/draw' method='get'>
                <input id="rowCnt" name="rowCnt" type="text" placeholder="row"/>
                <input id="colCnt" name="colCnt" type="text" placeholder="col"/>
                <button>Draw</button>
            </form>
        </body></html>`);
    }

    var resultHtml = `<html><head>
    <style>
        table{
            border-collapse: collapse;
            border: 1px black solid;
        }
        td > p{
            display: flex;
            width: 100%;
            justify-content: center;
            font-size: 25px;
        }

        td{
            background: white;
            color: black;
            width: 50px;
            height: 50px;
            overflow: hidden;
        }

        tr:nth-child(2n) > td:nth-child(2n){
            background: black;
            color: white;
        }

        tr:nth-child(2n-1) > td:nth-child(2n-1){
            background: black;
            color: white;
        }
    </style>
    </head><body><table><tbody>`;

    for(var row = 1; row <= rowCnt; row++){
        resultHtml += '<tr>'
        for(var col = 1; col <= colCnt; col++){
            resultHtml += `<td><p>${row*col}</p></td>`;
        }
        resultHtml += '</tr>'
    }

    resultHtml += '</tbody></table><br><a href="/">Back</a></body></html>';
    response.send(resultHtml)
});

app.listen(80);
