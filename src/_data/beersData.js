const beersData = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1608502669619-53bde724257e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80",
    title: "Samuel Adams",
    price: "$5.00"
  },

    {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1603644197087-dbeeba73e106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29yb25hJTIwYmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Corona",
    price: "$4.00"
  },

    {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1613254025696-6f80f3172937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEd1aW5uZXNzJTIwYmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
    title: "Guinness",
    price: "$5.00"
  },

{
    id: 4,
    imageSrc: "https://images.unsplash.com/photo-1672192976393-21e9f8dd50bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Qmx1ZSUyME1vb24lMjBiZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Blue Moon",
    price: "$4.00"
  },

      {
    id: 5,
    imageSrc: "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGVpbmVrZW4lMjBiZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Heineken",
    price: "$4.00"
  },

      {
    id: 6,
    imageSrc: "https://images.unsplash.com/photo-1553939264-36cd8b310b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWlsbGVyJTIwYmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Miller",
    price: "$4.00"
  },

      {
    id: 7,
    imageSrc: "https://images.unsplash.com/photo-1562773869-978e00f3f009?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3RlbGxhJTIwQXJ0b2lzJTIwYmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Stella Artois",
    price: "$4.00"
  },
      {
    id: 8,
    imageSrc: "https://images.unsplash.com/photo-1563551340713-0c45b08556b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJ1ZHdlaXNlciUyMGJlZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    title: "Budweiser",
    price: "$4.00"
  },
      {
    id: 9,
    imageSrc: "https://images.unsplash.com/photo-1671245166418-2a51e9b350a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29vcnMlMjBiZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Coors",
    price: "$4.00"
  },

      {
    id: 10,
    imageSrc: "https://images.unsplash.com/photo-1550068355-5a140d6177a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q29yb25hJTIwRXh0cmElMjBiZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Corona Extra",
    price: "$4.00"
  },

      {
    id: 11,
    imageSrc: "https://images.unsplash.com/photo-1619760078865-ee0f4c6586ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TW9kZWxvJTIwYmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Modelo",
    price: "$4.00"
  },

      {
    id: 12,
    imageSrc: "https://images.unsplash.com/photo-1639024468754-ca7b3de1d742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnVkJTIwTGlnaHQlMjBiZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Bud Light",
    price: "$4.00"
  },

      {
    id: 13,
    imageSrc: "https://images.unsplash.com/photo-1648003697007-2f2c9a920ec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RG9zJTIwRXF1aXMlMjBiZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Dos Equis",
    price: "$4.00"
  },

      {
    id: 14,
    imageSrc: "https://images.unsplash.com/photo-1583297233262-1a6152db666f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29yb25hJTIwTGlnaHQlMjBiZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Corona Light",
    price: "$4.00"
  },

      {
    id: 15,
    imageSrc: "https://images.unsplash.com/photo-1536638317175-32449deccfc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnVzY2glMjBiZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Busch",
    price: "$4.00"
  },
      {
    id: 16,
    imageSrc: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Miller High Life",
    price: "$4.00"
  },

      {
    id: 17,
    imageSrc: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Miller Lite",
    price: "$4.00"
  },

      {
    id: 18,
    imageSrc: "https://images.unsplash.com/photo-1568735031465-2310886272dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    title: "Coors Light",
    price: "$4.00"
  },
      {
    id: 19,
    imageSrc: "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Miller Genuine Draft",
    price: "$4.00"
  },
      {
    id: 20,
    imageSrc: "https://images.unsplash.com/photo-1619760078865-ee0f4c6586ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVlciUyME1vZGVsbyUyMEVzcGVjaWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Modelo Especial",
    price: "$4.00"
  },
      {
    id: 21,
    imageSrc: "https://images.unsplash.com/photo-1484726424599-0655f14a0687?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVlciUyMEhlaW5la2VuJTIwTGlnaHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    title: "Heineken Light",
    price: "$4.00"
  },
      {
    id: 22,
    imageSrc: "https://images.unsplash.com/photo-1665624856879-e222010e2656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVlciUyME1pY2hlbG9iJTIwVWx0cmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    title: "Michelob Ultra",
    price: "$4.00"
  },
      {
    id: 23,
    imageSrc: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVlciUyME1pY2hlbG9iJTIwVWx0cmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    title: "Miller Genuine Draft",
    price: "$4.00"
  },
      {
    id: 24,
    imageSrc: "https://images.unsplash.com/photo-1615332579037-3c44b3660b53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    title: "Busch Light",
    price: "$4.00"
  },
      {
    id: 25,
    imageSrc: "https://images.unsplash.com/photo-1523567830207-96731740fa71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    title: "Redd's Apple Ale",
    price: "$4.00"
  },

]

module.exports = beersData;