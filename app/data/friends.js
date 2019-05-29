var friends = [
  {
  "name": "Ahmed",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
  "scores": [
  "5",
  "1",
  "4",
  "4",
  "5",
  "1",
  "2",
  "5",
  "4",
  "1"
  ]
  },
  {
  "name": "Jacob Deming",
  "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
  "scores": [
  "4",
  "2",
  "5",
  "1",
  "3",
  "2",
  "2",
  "1",
  "3",
  "2"
  ]
  },
  {
  "name": "Jeremiah Scanlon",
  "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
  "scores": [
  "5",
  "2",
  "2",
  "2",
  "4",
  "1",
  "3",
  "2",
  "5",
  "5"
  ]
  },
  {
  "name": "Louis T. Delia",
  "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
  "scores": [
  "3",
  "3",
  "4",
  "2",
  "2",
  "1",
  "3",
  "2",
  "2",
  "3"
  ]
  },
  {
  "name": "Lou Ritter",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
  "scores": [
  "4",
  "3",
  "4",
  "1",
  "5",
  "2",
  "5",
  "3",
  "1",
  "4"
  ]
  },
  {
  "name": "Jordan Biason",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
  "scores": [
  "4",
  "4",
  "2",
  "3",
  "2",
  "2",
  "3",
  "2",
  "4",
  "5"
  ]
  },
  {
  "name": "tabitha",
  "photo": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F248797%2Fpexels-photo-248797.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fnature%2F&docid=ShwNVOdFBcmkxM&tbnid=8c_UAo3gH_220M%3A&vet=10ahUKEwiG1Me6kK3iAhWuY98KHdU9AaUQMwh6KAAwAA..i&w=500&h=200&bih=657&biw=1366&q=images&ved=0ahUKEwiG1Me6kK3iAhWuY98KHdU9AaUQMwh6KAAwAA&iact=mrc&uact=8",
  "scores": [
  "5",
  "4",
  "2",
  "1",
  "2",
  "4",
  "3",
  "3",
  "2",
  "3"
  ]
  },
  {
  "name": "SpongeBob",
  "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwikh_vVx7_iAhXIFzQIHQbzCJ8QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.usatoday.com%2Fstory%2Flife%2Fnation-now%2F2018%2F02%2F26%2Fspongebob-squarepants-not-ending-march-1%2F372351002%2F&psig=AOvVaw1iyDUEDSmJoUgUafGFHmWj&ust=1559178764569934",
  "scores": [
  "3",
  "2",
  "4",
  "2",
  "3",
  "2",
  "2",
  "2",
  "3",
  "4"
  ]
  },
  {
  "name": "Patrick Star",
  "photo": "data:image/png;base64,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",
  "scores": [
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1"
  ]
  },
  {
  "name": "Jon",
  "photo": "na",
  "scores": [
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1"
  ]
  },
  {
  "name": "Mork",
  "photo": "https://i.pinimg.com/originals/19/14/88/191488a68e4736272fb193658d0f7a05.jpg",
  "scores": [
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1"
  ]
  },
  {
  "name": "Dornald ",
  "photo": ";lewkjd",
  "scores": [
  "5",
  "5",
  "4",
  "2",
  "4",
  "1",
  "2",
  "1",
  "1",
  "4"
  ]
  },
  {
  "name": "Amit Kumar",
  "photo": "/Users/amits/Desktop/MyDesktop/MacDesktop/Pic/IMG_8642.JPG",
  "scores": [
  "4",
  "4",
  "5",
  "4",
  "4",
  "2",
  "4",
  "4",
  "4",
  "3"
  ]
  },
  {
  "name": "Amit Kumar",
  "photo": "abcd",
  "scores": [
  "4",
  "4",
  "5",
  "4",
  "4",
  "2",
  "4",
  "4",
  "4",
  "3"
  ]
  }
  ];


  module.exports = friends;