// Task #3
const routes = {
'/login': {templateId: 'login' },
'/dashboard': {templateId: 'dashboard'},
};





// Task #2
function updateRoute()  {
const path = window.location.pathname;
const route = routes[path];


// Task #4
if (!route) {
    return navigate("/login");
}

 const template = document.getElementById(templateId);
 const view = template.content.cloneNode(true);
 const app = document.getElementById('app');

app.innerHTML = '';
app.appendChild(view);
}


// updateRoute();

// Task #4 part 1         updateRoute('login');
function navigate(path)  {
    window.history.pushState( {}, path, path);
    updateRoute();
}


// Task 4 part 3
function onLinkClick(event)  {
    event.preventDefault();
    navigate(event.target.href);
}

// Task #5
window.onpopstate = () => updateRoute();
updateRouthe();



