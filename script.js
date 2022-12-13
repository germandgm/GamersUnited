//const express = require('express');
import express from "express";
const app = express()
const port = 3000;


app.use(express.json());

const products = [
    {
        id:1,
        name: "MSI RTX 3070ti",
        span: "Nvidia",
        price: 109000,
        image: "imagenes/products/3070ti.jpg",
        stock: 50
    },
    {
        id:2,
        name: "ASUS RTX 3080ti",
        span: "Nvidia",
        price: 169000,
        image: "imagenes/products/3080tiasus.jpg",
        stock: 50
    },
    {
        id:3,
        name: "Zotac RTX 4090",
        span: "Nvidia",
        price: 504000,
        image: "imagenes/products/4090zotac.jpeg",
        stock: 50
    },
    {
        id:4,
        name: "Gigabyte RTX 3060",
        span: "Nvidia",
        price: 99000,
        image: "imagenes/products/3060.jpg",
        stock: 50
    },
    {
        id:5,
        name: "MSI Radeon XT 6700",
        span: "AMD",
        price: 119000,
        image: "imagenes/products/xt6700.jpg",
        stock: 50
    },
    {
        id:6,
        name: "MSI Radeon XT 6800",
        span: "AMD",
        price: 124000,
        image: "imagenes/products/xt6800.jpg",
        stock: 50
    },
    {
        id:7,
        name: "ASUS Radeon XT 6900",
        span: "AMD",
        price: 139000,
        image: "imagenes/products/xt6900.jpeg",
        stock: 50
    },
    {
        id:8,
        name: "PowerColor Radeon XT 6950",
        span: "AMD",
        price: 189000,
        image: "imagenes/products/xt6950.jpeg",
        stock: 50
    },
    {
        id:9,
        name: "AC300G",
        span: "Gigabyte",
        price: 39000,
        image: "imagenes/products/gab-gigabyteac300g.jpg",
        stock: 50
    },
    {
        id:10,
        name: "S17-5",
        span: "IC3",
        price: 15000,
        image: "imagenes/products/gab-ic3s17-5.jpg",
        stock: 50
    },
    {
        id:11,
        name: "F10",
        span: "Sentey",
        price: 24000,
        image: "imagenes/products/gab-senteyf10.jpg",
        stock: 50
    },
    {
        id:12,
        name: "PM20",
        span: "Sentey",
        price: 19000,
        image: "imagenes/products/gab-senteypm20.jpg",
        stock: 50
    },
    {
        id:13,
        name: "i5 12400",
        span: "Intel",
        price: 29000,
        image: "imagenes/products/inteli512400.jpeg",
        stock: 50
    },
    {
        id:14,
        name: "i7 12700",
        span: "Intel",
        price: 45000,
        image: "imagenes/products/inteli712700.jpg",
        stock: 50
    },
    {
        id:15,
        name: "Ryzen 5 5600x",
        span: "AMD",
        price: 24000,
        image: "imagenes/products/ryzen55600x.jpg",
        stock: 50
    },
    {
        id:16,
        name: "Ryzen 7 5800x",
        span: "AMD",
        price: 39000,
        image: "imagenes/products/ryzen75800x.jpg",
        stock: 50
    },
    {
        id:17,
        name: "Battlefield 5",
        span: "Steam",
        price: 3500,
        image: "imagenes/products/bf5.jpg",
        stock: 50
    },
    {
        id:18,
        name: "Battlefield 2042",
        span: "Origin",
        price: 4900,
        image: "imagenes/products/bf2042.jpg",
        stock: 50
    },
    {
        id:19,
        name: "Resident Evil 2",
        span: "Steam",
        price: 1000,
        image: "imagenes/products/re2.png",
        stock: 50
    },
    {
        id:20,
        name: "Resident Evil 3",
        span: "Steam",
        price: 2000,
        image: "imagenes/products/re3.jpg",
        stock: 50
    },
    {
        id:21,
        name: "Resident Evil 4",
        span: "Steam",
        price: 4900,
        image: "imagenes/products/re4.jpg",
        stock: 50
    },
    {
        id:22,
        name: "far Cry 6",
        span: "Steam",
        price: 2900,
        image: "imagenes/products/farcry6.jpg",
        stock: 50
    },
    {
        id:23,
        name: "Horizon Zero Dawn",
        span: "Steam",
        price: 1000,
        image: "imagenes/products/horizon1pc.jpg",
        stock: 50
    },
    {
        id:24,
        name: "Read Dead Redemption 2",
        span: "Steam",
        price: 2000,
        image: "imagenes/products/rdr2pc.jpg",
        stock: 50
    },
    {
        id:25,
        name: "God of War",
        span: "PS4",
        price: 1500,
        image: "imagenes/products/gowps4.jpg",
        stock: 50
    },
    {
        id:26,
        name: "God of War Ragnarok",
        span: "PS5",
        price: 2900,
        image: "imagenes/products/gowrps5.jpg",
        stock: 50
    },
    {
        id:27,
        name: "Red Dead Redemption 2",
        span: "PS4",
        price: 1000,
        image: "imagenes/products/rdr2ps4.jpg",
        stock: 50
    },
    {
        id:28,
        name: "Uncharted 4",
        span: "PS5",
        price: 2000,
        image: "imagenes/products/uncharted4ps5.jpg",
        stock: 50
    },
    {
        id:29,
        name: "Uncharted Legacy of Thieves",
        span: "PS5",
        price: 2900,
        image: "imagenes/products/unchartedps5.jpg",
        stock: 50
    },
    {
        id:30,
        name: "Tomb Raider",
        span: "Xbox",
        price: 2900,
        image: "imagenes/products/tombraiderxbox.jpg",
        stock: 50
    },
    {
        id:31,
        name: "Resident Evil 3",
        span: "Xbox",
        price: 1000,
        image: "imagenes/products/re3xbox.jpg",
        stock: 50
    },
    {
        id:32,
        name: "Resident Evil Village",
        span: "PS5",
        price: 2000,
        image: "imagenes/products/revillageps5.jpg",
        stock: 50
    },
    {
        id:33,
        name: "XT6900 + Ryzen 7 5ta gen",
        span: "Combo 1",
        price: 211500,
        image: "imagenes/products/pc1.jpeg",
        stock: 50
    },
    {
        id:34,
        name: "Ryzen 5 3ra gen APU",
        span: "Combo 2",
        price: 92900,
        image: "imagenes/products/pc2.jpeg",
        stock: 50
    },
    {
        id:35,
        name: "Ryzen 5 2da gen APU",
        span: "Combo 3",
        price: 82000,
        image: "imagenes/products/pc3.jpg",
        stock: 50
    },
    {
        id:36,
        name: "Ryzen 7 4ta gen APU",
        span: "Combo 4",
        price: 112000,
        image: "imagenes/products/pc4.jpg",
        stock: 50
    },
    {
        id:37,
        name: "Ultra Gear",
        span: "LG",
        price: 40500,
        image: "imagenes/products/m1.jpeg",
        stock: 50
    },
    {
        id:38,
        name: "Odyssey G4",
        span: "Samsung",
        price: 20900,
        image: "imagenes/products/m2.jpeg",
        stock: 50
    },
    {
        id:39,
        name: "Odyssey G9",
        span: "Samsung",
        price: 42000,
        image: "imagenes/products/m3.jpeg",
        stock: 50
    },
    {
        id:40,
        name: "TUF",
        span: "ASUS",
        price: 112000,
        image: "imagenes/products/m4.jpeg",
        stock: 50
    },
    {
        id:41,
        name: "Bravo 15",
        span: "MSI",
        price: 340500,
        image: "imagenes/products/n1.jpeg",
        stock: 50
    },
    {
        id:42,
        name: "TUF F15",
        span: "ASUS",
        price: 320900,
        image: "imagenes/products/n2.jpeg",
        stock: 50
    },
    {
        id:43,
        name: "Victus 15",
        span: "HP",
        price: 342000,
        image: "imagenes/products/n3.jpeg",
        stock: 50
    },
    {
        id:44,
        name: "Nitro 5",
        span: "ACER",
        price: 312000,
        image: "imagenes/products/n4.jpeg",
        stock: 50
    }
];

app.get("/api/products", (req, res) => {
    res.send(products);
});

app.use("/", express.static("frontend"));
app.listen(port, () => {
  console.log(`Example app listening on port http;//localhost:${port}`)
});