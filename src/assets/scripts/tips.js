
var videos = [
  {url:'https://www.youtube.com/embed/Bp1znTeP6jA',
  title: 'Let\'s learn together how to calculate electrical consumption'},
  {url:'https://www.youtube.com/embed/fk63DRu7O0E',
  title: 'Let\'s keep our homes safe and free from electrical hazards'},
  {url:'https://www.youtube.com/embed/9924l-NxVgA',
  title: 'Let\'s avoid electrical leaks at home'},
  {url:'https://www.youtube.com/embed/cCBoHRza9v0',
  title: 'Let\'s learn how to use digital tools'},
  {url:'https://www.youtube.com/embed/iQv2jMdl4ic',
  title: 'Let\'s understand the concepts of our electricity bill'},
  {url:'https://www.youtube.com/embed/O-9yKQM2Jb4',
  title: 'Let\'s learn how the public lighting system works'},
  {url:'https://www.youtube.com/embed/2Y6mMFOraPA',
  title: 'Let\'s save energy at home'},
];

  
  var indices = [0,1,2,3,4,5,6];
  
  function nextVideo() {
    if (indices.length == 0) {
      indices = [0,1,2,3,4,5,6];
    }
    
    var prevIndex = localStorage.getItem('index');
    
    var index = Math.floor(Math.random() * indices.length);
    
    while (index == prevIndex) {
      index = Math.floor(Math.random() * indices.length);
    }
    
    localStorage.setItem('index', index);
    
    var video = videos[indices[index]];
    
    indices.splice(index,1);
    
    document.getElementById('video').src = video.url;
    document.getElementById('video-title').innerHTML = video.title;
  }
  
  nextVideo();
  
  function playNextVideo() {
      if (indices.length == 0) {
          indices = [0,1,2,3,4,5,6];
      }
      
      var index = indices.shift();
      
      var video = videos[index];
      
      document.getElementById('video').src = video.url;
      document.getElementById('video-title').innerHTML = video.title;
  }
  
  document.getElementById('video').addEventListener('ended', playNextVideo);
  

  const tips = [
    "Take advantage of natural light. Turn off the lights during the day and open the curtains to take advantage of natural light.",
    "Use low-consumption bulbs. Low-consumption bulbs are an excellent option to save energy.",
    "Unplug appliances that are not in use. Believe it or not, electronic devices consume energy even when they are not in use.",
    "Check the appliances. Keep your appliances in good condition to avoid energy leaks.",
    "Adjust the thermostat. Adjust the thermostat to 20 ºC maximum in heating and air conditioning equipment.",
    "Use the washing machine with full load. Save water and electricity by using the washing machine with full load.",
    "Use lids on pans and pots. Cover the pans and pots when cooking to take advantage of the residual heat.",
    "Take advantage of the residual heat of the oven and vitro. Turn off the oven or vitro before finishing cooking to take advantage of the residual heat.",
    "Give only the necessary charge to the devices. Do not overcharge your electronic devices, give them only the necessary charge.",
    "Use a fan instead of air conditioning. A fan consumes less energy than an air conditioner.",
    "Use a power strip. Connect several electronic devices in a single power strip to save energy.",
    "Use a shower instead of a bathtub. A shower consumes less water and energy than a bathtub.",
    "Use thermal curtains. Thermal curtains help maintain the temperature of the home without using heating or air conditioning.",
    "Use efficient appliances. Efficient appliances consume less energy than conventional ones.",
    "Use solar panels. Solar panels are an excellent option to save energy and reduce the carbon footprint.",
    "Use LED bulbs. LED bulbs consume less energy than conventional bulbs.",
    "Use a solar heater. A solar heater is an excellent option to save energy at home.",
    "Use a toaster oven instead of a conventional oven. A toaster oven consumes less energy than a conventional oven.",
    "Use an efficient hair dryer. Efficient hair dryers consume less energy than conventional ones.",
    "Use a solar charger for your mobile devices. A solar charger is an excellent option to charge your mobile devices without spending electricity."
  ];

  
  tips.sort(() => Math.random() - Math.random());
  
  for (let i = 0; i < 4; i++) {
      document.getElementById(`titulo${i}`).innerHTML = tips[i].split(".")[0];
      document.getElementById(`tip${i}`).innerHTML = tips[i].split(".")[1];
  }