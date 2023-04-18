const booksData = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1502051400-dad986bddd4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3J5c3RhbCUyMGJpYmxlJTIwMXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Crystal Bible 1",
    price: "$22.00"
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1499652848871-1527a310b13a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y3J5c3RhbCUyMGJpYmxlJTIwMXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Crystal Bible 2",
    price: "$22.00"
  },
  {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1508169351866-777fc0047ac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "African Origins book 1",
    price: "$23.00"
  },
  {
    id: 4,
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "African Origins book 2",
    price: "$22.00"
  },

  {
    id: 5,
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "The Ancient Mysteries of Melchizedek",
    price: "$20.00"
  },
  {
    id: 6,
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Art of War: Sun Tzu",
    price: "$13.00",
    notInStock: true
  },
  {
    id: 7,
   imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "As a Man Thinketh",
    price: "$11.00"
  },
  {
    id: 8,
   imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "As a Woman Thinketh",
    price: "$11.00"
  },
  {
    id: 9,
     imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Basis of Traditional Chinese Medicine",
    price: "$11.00"
  },
  {
    id: 10,
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Behold a Pale Horse",
    price: "$25.00"
  },
  {
    id: 11,
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Beyond the Flower of Life",
    price: "$18.00"
  },
  {
    id: 12,
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Bhagavad-Gita",
    price: "$12.00"
  },
  {
    id: 13,
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Heal Thyself for Health and Longevity",
    price: "$19.00"
  },
  {
    id: 14,
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Egypt and India African Origins",
    price: "$29.95"
  },
  {
    id: 15,
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Electric Body, Electric Health",
    price: "$24.50"
  },
  {
    id: 16,
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Essential Oils Handbook",
    price: "$13.00"
  },
  {
    id: 17,
  imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Ethiopia and the Origin of Civilization",
    price: "$19.00",
    notInStock: true
  },
  {
    id: 18,
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Four Agreements",
    price: "$13.00"
  },
  {
    id: 19,
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "From Poverty to Power",
    price: "$14.95",
    notInStock: true
  },
  {
    id: 20,
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Hermetic Herbalism",
    price: "$20.00"
  },
  {
    id: 21,
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Maat Guiding Principles",
    price: "$52.00"
  },
  {
    id: 22,
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Maat Kemetic-Soulism",
    price: "$54.95"
  },
  {
    id: 23,
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Maat the 11 Laws of God",
    price: "$50.00",
    notInStock: true
  },
  {
    id: 24,
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Sacred Chakras",
    price: "$15.00"
  },
  {
    id: 25,
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "The Alchemist",
    price: "$18.00"
  },
  {
    id: 26,
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "The Apocrypha",
    price: "$18.00"
  },
  {
    id: 27,
    title: "The Egyptian Book of the Dead",
    price: "$29.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 28,
    title: "The Fifth Agreement",
    price: "$14.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 29,
    title: "The Kemetic Tree of Life",
    price: "$46.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 30,
    title: "The Kybalion Centenary",
    price: "$22.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 31,
    title: "The mysticism of Sound and Vibrations",
    price: "$27.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
notInStock: true
},
  {
    id: 32,
    title: "The Power of Breath",
    price: "$20.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 33,
    title: "Thoth",
    price: "$17.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
notInStock: true  
},
  {
    id: 34,
    title: "Vitamins and Minerals",
    price: "$14.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 36,
    title: "Your Altar: Creating a Sacred Space",
    price: "$17.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 37,
    title: "Metu Neter Volume 1",
    price: "$200.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 38,
    title: "Man heal thyself",
    price: "$20.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 39,
    title: "The Science of the Dogon",
    price: "$19.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 40,
    title: "The 50th Law",
    price: "$15.25",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
notInStock: true  
},
  {
    id: 41,
    title: "Daily laws",
    price: "$29.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 42,
    title: "Art of Seduction",
    price: "$24.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 43,
    title: "The Only Astrology Book You'll Ever Need",
    price: "$17.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 44,
    title: "The Zenned Out Guide to Understanding Auras",
    price: "$19.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 45,
    title: "Numerology and the Divine Triangle",
    price: "$20.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 46,
    title: "A Beginner's Guide to Pendulum Magic Kit",
    price: "$20.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 47,
    title: "the princesnby makaveli",
    price: "$8.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 48,
    title: "Llewellyn's Complete Formulary of Magical Oils",
    price: "$30.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 49,
    title: "Chakra mantras",
    price: "$19.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 50,
    title: "african holistic health",
    price: "$22.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 51,
    title: "The book of Enoch",
    price: "$19.00",
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 52,
    title: "Conversations With Ogotemmeli",
    price: "$80.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 53,
    title: "Basis of Traditional Chinese Medicine",
    price: "$11.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 54,
    title: "Sacred Herb Bundles",
    price: "$25.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 55,
    title: "Twelfth Planet",
    price: "$9.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 56,
    title: "Stairway to Heaven",
    price: "$9.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 57,
    title: "War of Gods and Men",
    price: "$9.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 58,
    title: "Lost Realms",
    price: "$9.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 59,
    title: "When Time Began",
    price: "$7.85",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 60,
    title: "Cosmic Code",
    price: "$25.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 61,
    title: "End of Days",
    price: "$8.99",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 62,
    title: "Genesis Revisited",
    price: "$8.99",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 64,
    title: "Kabbalah: The Tree of Life Oracle",
    price: "$27.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 65,
    title: "They Came Before Columbus",
    price: "$20.00",
 imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 66,
    title: "The origin & Evolution of religion",
    price: "$24.95",
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 67,
    title: "The Torah",
    price: "$34.95",
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
    {
    id: 68,
    title: "The God Code",
    price: "$14.95",
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
    {
    id: 69,
    title: "The power of your subconscious mind",
    price: "$12.00",
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
    {
    id: 70,
    title: "Ancient and Modern Britons",
    price: "$24.95",
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
    {
    id: 71,
    title: "The Silva Mind Control Method",
    price: "$18.00",
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
    {
    id: 72,
    title: "Essential Zen",
    price: "$18.00",
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
    {
    id: 73,
    title: "Encyclopedia of the Yoruna",
    price: "-",
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
    {
    id: 74,
    title: "We the black Jews v1&2",
    price: "$30.00",
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
    {
    id: 75,
    title: "Pyramids in America",
    price: "$15.00",
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
    {
    id: 76,
    title: "Power vs Force",
    price: "$18.00",
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
    {
    id: 77,
    title: "The new world order",
    price: "$22.00",
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
    {
    id: 78,
    title: "The serpent power",
    price: "$16.95",
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
    {
    id: 79,
    title: "The holy Kabbalah",
    price: "$26.95",
    imageSrc: "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QWZyaWNhbiUyMG9yaWdpbnMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  }
];

module.exports = booksData;