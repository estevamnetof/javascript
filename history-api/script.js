// History
console.log(window.history);
window.history.back(); // vai para a anterior
window.history.forward(); // vai para a próxima


// pushState()
window.history.pushState(null, null, 'sobre.html');


// popstate
window.addEventListener('click', () => {
    fetchPage(window.location.pathname);
});


// Fetch e History
async function fetchPage(url) {
    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text();
    window.history.pushState(null, null, url);
}