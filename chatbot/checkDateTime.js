function checkDateTime(date, time) {
const currentDate = new Date(); // 현재 날짜

// 입력된 예약 날짜를 날짜 객체로 변환
const reservationDate = new Date(date);
const [hours, minutes] = time.split(':');
const reservationTime = new Date(reservationDate.getFullYear(), reservationDate.getMonth(), reservationDate.getDate(), hours, minutes);

let isValid;

// 예약 날짜와 현재 날짜를 비교
if (reservationDate.toDateString() === currentDate.toDateString()) {
    // 예약 날짜가 오늘이면 
    const isTime = reservationTime.getTime() - currentDate.getTime();
    if (isTime >= 60 * 60 * 1000) { // 현재 시간에서 1시간 이상일 때 true
        isValid = true;
    } else {
        isValid = false;
    }
} else if (reservationDate > currentDate) {
    isValid = true;
} else {
    isValid = false;
}
return isValid;
}

_debug(newReservationDate);
_debug(checkDateTime(newReservationDate, newReservationTime));
isValid = checkDateTime(newReservationDate, newReservationTime);
isValid;