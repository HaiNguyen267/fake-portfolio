const yellowCircle = document.getElementById("yellow-circle");
const redCircle = document.getElementById("red-circle");
const greenCircle = document.getElementById("green-circle");
const blueCircle = document.getElementById("blue-circle");

const yellowImages = ["https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1512425406684-952ff74cb8d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1484689228555-fd6bc1b28b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
                    "https://images.unsplash.com/photo-1586982469023-9f3e18321fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80",
                    "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHllbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHllbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                    
]

const redImages = ["https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                    "https://images.unsplash.com/photo-1518709779341-56cf4535e94b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1605362001336-f91645086f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1576718388983-e3ab696f2b8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    "https://images.unsplash.com/photo-1534748626724-c6256f106a08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1436397543931-01c4a5162bdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
]

const greenImages = ["https://images.unsplash.com/photo-1591012771457-bcff872a0c1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxncmVlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1602300991431-27a957a5bcf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGdyZWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3JlZW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxncmVlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1520702935840-b40e3d15c234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg5fHxncmVlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGdyZWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
]

const blueImages = ["https://images.unsplash.com/photo-1531642765602-5cae8bbbf285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1570483358100-6d222cdea6ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1548268770-66184a21657e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNreXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1601436155198-2ebfea8117b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ymx1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1486848538113-ce1a4923fbc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
]

// circles 
// images
// themes
// projectImages

const circles = [yellowCircle, redCircle, greenCircle, blueCircle];
const images = [yellowImages, redImages, greenImages, blueImages];
const themes = ['yellow-theme', 'red-theme', 'green-theme', 'blue-theme'];
const projectImages = document.getElementsByClassName("project-img");


loadChosenTheme();

for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", e => {
        e.preventDefault();

        switchTheme(i);
        saveChosenTheme(i);
    })
}

function checkCircles(circleToCheck) {
    circles.forEach(circle => {
        if (circle === circleToCheck) {
            circle.classList.add("checked-circle");
        } else {
            circle.classList.remove("checked-circle");
        }
    })
}

function changeThemeColor(theme) {
    document.body.className = theme;
}

function changeProjectImages(images) {
    for (let i = 0; i < projectImages.length; i++) {
        projectImages[i].src = images[i];
    }
}

function loadChosenTheme() {

    if (localStorage.getItem("checked-theme") !== null) {
        json = JSON.parse(localStorage.getItem("checked-theme"));
        chosenTheme = json["theme"];

        let themeIndex = themes.indexOf(chosenTheme);
        switchTheme(themeIndex);
    }
    
}

function saveChosenTheme(themeIndex) {
    let json = {theme: themes[themeIndex]}
    localStorage.setItem("checked-theme", JSON.stringify(json));

}

function switchTheme(themeIndex) {
    checkCircles(circles[themeIndex]);
    changeThemeColor(themes[themeIndex]);
    changeProjectImages(images[themeIndex]);
}