import http from 'http';
import fs from 'fs/promises';

const server = http.createServer(async (req, res) => {
    if (req.url === '/styles/site.css') {
        const cssContent = await fs.readFile('./styles/site.css', 'utf-8');

        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(cssContent);

        return res.end();
    }

    let htmlContent = '';
    res.writeHead(200, { 'content-type': 'text/html' });

    if (req.url === '/') {
        htmlContent = await fs.readFile('./views/home/index.html', 'utf-8');
    } else if (req.url === '/cats/add-breed') {
        htmlContent = await fs.readFile('./views/addBreed.html', 'utf-8');
    } else if (req.url === '/cats/add-cat') {
        htmlContent = await fs.readFile('./views/addCat.html', 'utf-8');
    }

    res.write(htmlContent);

    res.end();
});

server.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000...');
});