const currentDate = new Date();

    const currentMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      currentDate.getDate()
    );


console.log(new Date('2022-08-30T00:20:00+00:00') <= currentMonth)
