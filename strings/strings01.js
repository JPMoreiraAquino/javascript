
const competitor = 	{
  "id": "sr:competitor:1961",
  "name": "Fluminense RJ",
  "country": "Brasil",
  "country_code": "BRA",
  "abbreviation": "FLU",
  "qualifier": "away",
  "gender": "male"
}

  const removeCountryCode = (name, countryCode) =>  {
    const listOfName = name.split(' ');

    const lowerCase = countryCode.toLowerCase();

    const formatCountryCode = lowerCase[0].toUpperCase()  + lowerCase.substring(1);

    console.log(formatCountryCode)

    const filterList = listOfName.filter((item) => item.length > 2 )

    const removeCountryCode = filterList.join(' ').replace(`(${formatCountryCode})`, ' ').trim()

    return removeCountryCode.trim();
  }


const callFunction = removeCountryCode(competitor.name, competitor.country_code)

