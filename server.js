 /*     "start": "node server.js",*/
// const http = require('http'); // হ্যান্ডল HTTP প্রোটোকল এর জন্য 'http' মডিউল ইমপোর্ট করা হচ্ছে

// const fs = require('fs');  // ফাইল সিস্টেম এক্সেস করার জন্য 'fs' মডিউল ইমপোর্ট করা হচ্ছে

// const path = require('path'); // পথ রেলেটেড অপারেশন করার জন্য 'path' মডিউল ইমপোর্ট করা হচ্ছে

// const hostname = '127.0.0.1'; // সার্ভারের হোস্টনেম সেট করা হচ্ছে

// const port = 3000; // সার্ভারের পোর্ট সেট করা হচ্ছে

// const server = http.createServer((req, res) => { // HTTP সার্ভার তৈরি করা হচ্ছে, ক্লায়েন্ট থেকে প্রতিটি রিকোয়েস্ট গ্রহণ করবে
//   let filePath = '.' + req.url; // ক্লায়েন্টের রিকোয়েস্ট URL ভিত্তিক ফাইলের পথ নির্ধারণ করা হচ্ছে

//   if (filePath === './') { // যদি পথ './' হয়, তাহলে ডিফল্ট হোম পেজ হিসেবে 'index.html' ফাইলটি ব্যবহৃত হবে
//     filePath = './index.html';
//   }

//   const extname = String(path.extname(filePath)).toLowerCase(); // ফাইলের এক্সটেনশন নির্ধারণ করা হচ্ছে এবং সেটি লোয়ারকেসে রূপান্তরিত করা হচ্ছে

//   const contentType = { // ফাইলের ধরন নির্ধারণ করা হচ্ছে
//     '.html': 'text/html',
//     '.css': 'text/css',
//     '.js': 'text/javascript',
//     '.json': 'application/json',
//     '.png': 'image/png',
//     '.jpg': 'image/jpg',
//     '.gif': 'image/gif',
//     '.svg': 'image/svg+xml',
//   }[extname] || 'application/octet-stream'; // যদি এক্সটেনশন ব্যবহৃত না থাকে তাহলে ডিফল্ট হিসেবে 'application/octet-stream' ব্যবহৃত হবে

//   fs.readFile(filePath, (err, data) => { // ফাইল পঠন করা হচ্ছে
//     if (err) { // যদি ফাইল পঠনে সমস্যা হয়
//       res.writeHead(404); // 404 নোট ফাউন্ড রিস্পন্স প্রেরণ করা হচ্ছে
//       res.end('404 Not Found'); // রেস্পন্স সম্পন্ন করা হচ্ছে
//     } else { // যদি ফাইল পঠন সফল হয়
//       res.writeHead(200, { 'Content-Type': contentType }); // সফল রিকোয়েস্টের সাথে ফাইলের ধরনের কন্টেন্ট টাইপ সেট করা হচ্ছে
//       res.end(data); // ফাইলের ডেটা ক্লায়েন্টে প্রেরণ করা হচ্ছে
//     }
//   });
// });

// server.listen(port, hostname, () => { // সার্ভার পোর্ট ও হোস্টনেমে লিসেন করা হচ্ছে
//   console.log(`Server running at http://${hostname}:${port}/`); // সার্ভার চালু হয়েছে এবং কনসোলে মেসেজ দেয়া হচ্ছে
// });
