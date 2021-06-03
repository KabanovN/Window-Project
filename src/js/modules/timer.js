const timer = (id, deadline) => {

    function setZero(num) {
        if (num <= 9) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    const getRemainingTime = (endtime) => {
        const total = Date.parse(endtime) - Date.parse(new Date()),
              seconds = Math.floor((total / 1000) % 60),
              minutes = Math.floor((total / (1000 * 60)) % 60),
              hours = Math.floor((total / (1000 * 60 * 60)) % 24),
              days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            'total': total,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),

              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const time = getRemainingTime(endtime);
            days.textContent = setZero(time.days);
            hours.textContent = setZero(time.hours);
            minutes.textContent = setZero(time.minutes);
            seconds.textContent = setZero(time.seconds);

            if (time.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timeInterval);
            }
        }
    };

    setClock(id, deadline);

};

export default timer;