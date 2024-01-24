function checkPickupTime(time) {
    const currentTime = new Date(); // 현재 시간

    // 입력된 예약 시간을 시간 객체로 변환
    const pickupTime = new Date(`2022-01-01T${time}`);

    // 예약 시간과 현재 시간의 차이를 계산 (밀리초 단위)
    const timeDiff = pickupTime - currentTime;

    // 차이를 분 단위로 변환
    const timeInMinutes = Math.floor(timeDiff / (1000 * 60));

    // 예약 시간이 현재 시간보다 30분 이상인 경우에만 유효
    if (timeInMinutes >= 30) {
        isValid = true;
    } else {
        isValid = false;
    }
    return isValid;
}
  
function checkCancel(date, time) {
  const currentDate = new Date();
  const currentTime = currentDate.getTime();

  const reservationDate = new Date(date);
  const reservationTime = new Date(`${date}T${time}`);

  if (reservationDate.toDateString() === currentDate.toDateString()) {
    const isTime = reservationTime.getTime() - currentTime;
    if (isTime >= 60 * 60 * 1000) {
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

  function checkDate(date, time) {
    const currentDate = new Date(); // 현재 날짜
    const currentTime = currentDate.getTime(); // 현재 시간

    // 입력된 예약 날짜를 날짜 객체로 변환
    const reservationDate = new Date(date);
    const reservationTime = new Date(`${date}T${time}`);

    // 예약 날짜와 현재 날짜를 비교
    if (reservationDate.toDateString() === currentDate.toDateString()) {
        // 예약 날짜가 오늘이면 
        const isTime = reservationTime.getTime() - currentTime;
        if (isTime >= 60 * 60 * 1000) { // 현재 시간에서 1시간 이후일 때 true
          isValid = true;
        } else {
          isValid = false;
        }
    } else if (reservationDate > currentDate){
        isValid = true;
    } else {
      isValid = false;
    }
    return isValid;
}
