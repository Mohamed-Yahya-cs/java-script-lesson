let hour = 2; //Change this simulating automatically reading time from Internet Clock or System Tray Clock
if (hour >= 3 && hour <= 12 ) console.log('Good Morning');
else if (hour >= 13 && hour <= 18 ) console.log('Good Afternoon');
else if (hour >= 19 && hour <= 24) console.log('Good Eavning');
else console.log('this is not a number, why are you awake right know?');
