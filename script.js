//Happy 2020! 🎉

///////////////////////////
//Defaults and Vars
let def_with = 80;
let exp = true;
let dm;
let set_btn = document.getElementById("settings");
let dm_btn = document.getElementById("dm");
let root = document.documentElement;

///////////////////////////
//Main Interval
setInterval(() => {
	//Set start of year
	let d = new Date();
	d.setMonth(8);
	d.setDate(21);
	d.setFullYear(2022);
	d.setHours(0);
	d.setMinutes(0);
	d.setSeconds(0);
	//calculate seconds since start of Year
	let beginning = new Date();
	let elapsedY = beginning - d;
	//calculate percentage for year
	let yperc = 13824000*100;
	yperc = yperc/13910400
	yperc = Math.round(yperc * 10000000) / 100000;



	ypp.innerHTML = yperc + "%";
	ybar.style.width = def_with * yperc / 100 + "vw";
	console.log(beginning);
}, 1000);




///////////////////////////
//Settings
set_btn.addEventListener("click", e => {
	if (exp) {
		set_btn.style.right = "1vh";
		set_btn.style.color = "var(--dark)";
		abt.style.left = "120vw";
		abt.style.top = "-100vh";
		exp = false;
	} else {
		set_btn.style.right = "30vh";
		set_btn.style.color = "var(--bright)";
		abt.style.left = "calc(100vw - 40vh)";
		abt.style.top = "-40vh";
		exp = true;
	}
});

///////////////////////////
//Darkmode
if (
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	root.style.setProperty("--bright", "#000");
	root.style.setProperty("--dark", "#fff");
	dm_btn.innerHTML = "🌖";
	dm = false;
} else {
	root.style.setProperty("--bright", "#fff");
	root.style.setProperty("--dark", "#000");
	dm_btn.innerHTML = "🌘";
	dm = true;
}

dm_btn.addEventListener("click", e => {
	if (dm) {
		root.style.setProperty("--bright", "#000");
		root.style.setProperty("--dark", "#fff");
		dm_btn.innerHTML = "🌖";
		dm = false;
	} else {
		root.style.setProperty("--bright", "#fff");
		root.style.setProperty("--dark", "#000");
		dm_btn.innerHTML = "🌘";
		dm = true;
	}
});

///////////////////////////
//Helper Functions
function secondsPerYear(year) {
	if (leapYear(year)) {
		return 31622400;
	} else {
		return 31536000;
	}
}

function leapYear(year) {
	return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function secondsPerMonth(y, m) {
	let spm = new Date(y, m, 0).getDate() * 24 * 3600;
	return spm;
}
