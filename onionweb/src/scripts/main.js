async function getdcstatus() {
    const response = await fetch("https://api.lanyard.rest/v1/users/996626769266356294");
    const userdata = await response.json();
    return userdata["data"]["discord_status"];
}

const text = document.getElementById("dcstat")
const dcstatus = getdcstatus().then(status =>{
    switch(status) {
        case 'online':
            text.className = "text-lime-600";
            text.innerHTML = "Online!"
            break
        case 'dnd':
            text.className = "text-red-600";
            text.innerHTML = "Do Not Disturb! (shh)"
            break
        case 'idle':
            text.className = "text-yellow-600";
            text.innerHTML = "Idle."
            break
        case 'offline':
            text.className = "";
            text.innerHTML = "Offline..."
            break
    }
})
