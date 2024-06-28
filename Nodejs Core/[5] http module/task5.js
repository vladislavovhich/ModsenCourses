const http = require('http')
const url = require('url')

let items = []
let currentId = 1

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true)
    const method = req.method;
    const path = parsedUrl.pathname;

    res.setHeader('Content-Type', 'application/json');

 
    if (method === 'GET' && path === '/items') {
        res.writeHead(200);
        res.end(JSON.stringify(items))
        return
    }

    if (method === 'GET' && path.match(/^\/items\/\d+$/)) {
        const id = parseInt(path.split('/')[2]);
        const item = items.find(i => i.id === id);

        if (item) {
            res.writeHead(200);
            res.end(JSON.stringify(item));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ message: 'Item not found' }))
        }

        return
    }


    if (method === 'POST' && path === '/items') {
        let body = ''

        req.on('data', chunk => {
            body += chunk.toString()
        });

        req.on('end', () => {
            try {
                console.log(body)
                const { name } = JSON.parse(body)
                const newItem = { id: currentId++, name }
                items.push(newItem)
        
                res.writeHead(201)
                res.end(JSON.stringify(newItem))
            } catch (error) {
                res.writeHead(400);
                res.end(JSON.stringify({ message: 'Invalid JSON' }))
            }
        })

        return
    }

    if (method === 'PUT' && path.match(/^\/items\/\d+$/)) {
        const id = parseInt(path.split('/')[2])
        let body = ''

        req.on('data', chunk => {
            body += chunk.toString()
        })

        req.on('end', () => {
            const { name } = JSON.parse(body)
            const item = items.find(i => i.id === id)

            if (item) {
                    item.name = name;
                    res.writeHead(200);
                    res.end(JSON.stringify(item))
            } else {
                    res.writeHead(404);
                    res.end(JSON.stringify({ message: 'Item not found' }))
            }
        })

        return
    }

    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Route not found' }))
});

server.listen(3000, () => {
    console.log('Server is running on port 3000')
});