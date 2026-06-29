const https = require('https');

https.get('https://melbourneautoworks.com.au/', (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
        const bgRegex = /url\(['"]?([^'"\)]+\.(?:jpg|jpeg|png|webp|gif))['"]?\)/gi;
        let images = [];
        let match;
        
        while ((match = imgRegex.exec(data)) !== null) {
            images.push(match[1]);
        }
        while ((match = bgRegex.exec(data)) !== null) {
            images.push(match[1]);
        }
        
        // Output all unique images
        const unique = [...new Set(images)];
        console.log(JSON.stringify(unique, null, 2));
    });
}).on("error", (err) => {
    console.error("Error: " + err.message);
});
