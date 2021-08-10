const numberToOrdinal = (num) => {
    const end = num % 10;
    const ten = num % 100 - end;

    if (end === 1 && ten !== 10) {
        return num + "st";
    } else if (end === 2 && ten !== 10) {
        return num + "nd";
    } else if (end === 3 && ten !== 10) {
        return num + "rd";
    } else {
        return num + "th";
    }
}

// unit test
for (let i = 1; i < 120; i++)
    console.log(numberToOrdinal(i));





