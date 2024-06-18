export const features = [
  {
    id: 1,
    feature: "add requirement",
    compo: [
        {
            id: "1a",
          head: "customer",
          type: "Option",
          options: ["abbas", "sahil", "javed", "anas"],
        },
        {
            id: "1b",
          head: "property type",
          type: "Option",
          options: ["carpet", "anwer", "callilog"],
        },
        { id: '1c', head: "requirement" , type: "Input"},
        { id: '1d', head: "detailed requirement" , type: "Textarea"},
        { id: '1e',head: "price range", min: 15, max: 100 , type: "Range"},
        { id:'1f',head: "time line", type: "Option", options: [100, 200, 300] },
    ],
  },
  {
    id: 2,
    feature: "location",
    compo:[
        {
            id: "2a",head: "city", type: "Option", options: ['mumbai', 'delhi', 'chennai']
        },
        {
            id: '2b',head: 'area',type: "Input"
        }
    ]
  }
];
