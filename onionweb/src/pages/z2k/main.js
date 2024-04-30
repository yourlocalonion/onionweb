const mainlog_btn = document.getElementById('mainlog')
const mainlog_acc = document.getElementById('mainlog_accept')
const mainlog_den = document.getElementById('mainlog_deny')

const mainlog_1 = document.getElementById('mainlog_1')
const mainlog_2 = document.getElementById('mainlog_2')

/*helper*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function mainlog() {
    mainlog_1.className = " "
    await sleep(2000);
    mainlog_2.className = " "
    await sleep(200);
    mainlog_acc.className = "bg-slate-700"
    await sleep(10)
    mainlog_den.className = "bg-slate-700"
}

mainlog_btn.addEventListener("click", mainlog)