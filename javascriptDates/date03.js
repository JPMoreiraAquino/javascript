function timeBrasil() {
    const data = new Date("2022-04-09T01:30:00+00:00")
    return data.toLocaleTimeString('pt-Br', {
            hour12: false
        });
    }

const data = () => {
    const data = new Date("2022-04-09T01:30:00+00:00")
    return data.toLocaleDateString('pt-BR')
}

    console.log(timeBrasil());
    console.log(data());
