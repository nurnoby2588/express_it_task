// export default async function handler(req, res) {
//     try {
//         const response = await fetch("https://glore-bd-backend-node-mongo.vercel.app/api/product", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         const data = await response.json();
//         res.setHeader("Access-Control-Allow-Origin", "*");
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).json({ error: "Proxy failed" });
//     }
// }
