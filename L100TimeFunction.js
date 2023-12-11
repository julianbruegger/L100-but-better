(function () {
    setInterval(updateSite, 100);
    function updateSite() {
        Array.from(document.getElementsByClassName("sc-jRQBWg FfqaS")).forEach(x => {
            let title = Array.from(document.getElementsByClassName("sc-bdvvtL lhQvWz"))[0].firstChild;
            if (title.firstChild.nodeName !== "A") {
                let content = title.innerHTML;
                title.innerHTML = ""
                let link = document.createElement("a")
                link.href = "https://activity.leuchterag.ch/"
                link.innerHTML = content;
                link.style = "color: rgb(255, 255, 255);"
                link.style.textDecoration = "none";
                title.appendChild(link);
            }
        })
        Array.from(document.getElementsByClassName("ausgestempelt-label"))[0]?.remove()
        Array.from(document.getElementsByClassName("eingestempelt-label"))[0]?.remove()
        //Array.from(document.getElementsByClassName("meldungen"))[0]?.remove();
        //Array.from(document.getElementsByClassName("GlobalSelektor")).forEach(x => x.remove());
        document.getElementById("updatedDetailGrid")?.remove()

        let detailGrid = document.getElementsByClassName("detail-grid")
        detailGrid[0].style = "visibility: hidden;";

        let updatedDetailGrid = detailGrid[0].cloneNode(true);
        updatedDetailGrid.style = "visibility: visible;"
        updatedDetailGrid.id = "updatedDetailGrid";
        let timeDiv = Array.from(document.getElementsByClassName("time"));

        updatedDetailGrid.style = "    grid-template-columns: 80px 100px 100px !important;";
        Array.from(updatedDetailGrid.children).forEach((y) => {

            let absoluteHours;
            let hoursAndMinutes = Array.from(y.innerHTML.replace('(', '').split(' ')[0].split('.'))
            let hours = absoluteHours = hoursAndMinutes[0];
            let minutes = parseFloat(hoursAndMinutes[1]);
            let absoluteMinutes = Math.round(minutes * 0.6);

            if (isNaN(hours) || isNaN(minutes)) {
                if (y.nodeName !== "P") {
                    y.innerHTML = "";
                }
                return;
            }
            if (minutes < 13)
                minutes = 0;
            else if (minutes < 38)
                minutes = 25
            else if (minutes < 63)
                minutes = 5;
            else if (minutes < 88)
                minutes = 75;
            else {
                hours = Math.sign(hours) * (Math.abs(hours) + 1);
                minutes = 0;
            }

            if (absoluteMinutes < 10) {
                y.innerHTML = `${absoluteHours}:0${absoluteMinutes} (${hours}.${minutes})`;
                y.style = "text-align: left;"
            }
            else {
                y.innerHTML = `${absoluteHours}:${absoluteMinutes} (${hours}.${minutes})`;
                y.style = "text-align: left;"
            }

        })
        timeDiv[0].insertBefore(updatedDetailGrid, detailGrid[0]);
    }

})();