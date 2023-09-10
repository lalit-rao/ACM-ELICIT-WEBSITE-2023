const carouselList = document.querySelector(".carousel__list");
const carouselItems = document.querySelectorAll(".carousel__item");
const elems = Array.from(carouselItems);

const update = function (newActive, eventId) {
    document.querySelectorAll(eventId).forEach((ele) => ele.classList.add("RTESelectedDate"));

    const newActivePos = newActive.dataset.pos;

    const current = elems.find((elem) => elem.dataset.pos == 0);
    const prev = elems.find((elem) => elem.dataset.pos == -1);
    const next = elems.find((elem) => elem.dataset.pos == 1);
    const first = elems.find((elem) => elem.dataset.pos == -2);
    const last = elems.find((elem) => elem.dataset.pos == 2);

    current.classList.remove("carousel__item_active");
    if (eventId != "#R" + current.classList[1]) {
        document.querySelectorAll("#R" + current.classList[1]).forEach((ele) => ele.classList.remove("RTESelectedDate"));
    }

    [current, prev, next, first, last].forEach((item) => {
        var itemPos = item.dataset.pos;

        item.dataset.pos = getPos(itemPos, newActivePos);
    });
};

const getPos = function (current, active) {
    const diff = current - active;

    if (Math.abs(current - active) > 2) {
        return -current;
    }

    return diff;
};
