timetable = 
`
    [
    {"day":"Понедельник","lessons1":["Математика","История", "Английский язык", "Литература", "Математика", "Обществознание", "Индивидуальный проэкт", "Физика"], "lessons2":["Математика","История", "Информатика", "Литература", "Математика", "Обществознание", "Индивидуальный проэкт", "Английский язык"]},
    {"day":"Вторник","lessons1":["(Ко второму)", "Физкультура", "Физика", "Английский язык", "Информатика", "Литература", "История", "Физика"], "lessons2":["(Ко второму)", "Физкультура", "Мир программирования", "Информатика", "Физика", "Литература", "История", "Английский язык"]},
    {"day":"Среда","lessons1":["(Ко второму)", "Информатика", "Русский язык", "Физика", "Математика", "Литература", "Информатика"], "lessons2":["(Ко второму)", "Хлз", "Русский язык", "Основы ИКТ", "Математика", "Литература", "Физика"]},
    {"day":"Четверг","lessons1":["Английский язык", "Физика", "Индивидуальный проэкт", "Математика", "Основы ИКТ", "Математика"], "lessons2":["Информатика", "Английский язык", "Индивидуальный проэкт", "Математика", "Основы ИКТ", "Математика"]},
    {"day":"Пятница","lessons1":["Математика","Информатика", "ОБЖ", "Родная литература", "Физкультура", "Хлз", "Мир программирования"], "lessons2":["Математика","Информатика", "ОБЖ", "Родная литература", "Физкультура", "Английский язык", "Английский язык"]}
    ]
`
function Draw(json_str, group)
{
    list = document.querySelector("#days");
    list.innerHTML = '';
    let data = JSON.parse(json_str);
    for(i=0;i<data.length; i++)
    {
        let element = document.createElement('div');
        element.style.margin = "30px";
        element.innerHTML = 
        `
            <div class="card" style="">
                <div class="card-body">
                <h5 class="card-title">${data[i].day}</h5>
                <ul class="list-group list-group-flush">
                    
                </ul>
                </div>
            </div>
        `
        length = group == 1 ? data[i].lessons1.length : data[i].lessons2.length;
        for(a=0; a < length; a++)
        {
            element.querySelector(".list-group").innerHTML +=  `<li class="list-group-item">${a+1}. ${group == 1 ? data[i].lessons1[a] : data[i].lessons2[a]}</li>`;
        }
        list.appendChild(element);
    }
}
function tumbler(event)
{
    console.log(event.target.id == "btnradio1" ? 1 : 2);
    Draw(timetable, event.target.id == "btnradio1" ? 1 : 2);
}
group1 = document.querySelector("#btnradio1");
group2 = document.querySelector("#btnradio2");
group1.addEventListener('click', tumbler);
group2.addEventListener('click', tumbler);
Draw(timetable, 1);
