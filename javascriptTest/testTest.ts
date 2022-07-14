import createHttpError from 'http-errors';
import leagueLeadersResponse from './__mocks__/season-leaders-response.json';

import srSoccerLeague from '../sr-soccer-league-service';

import { SrStatsResponse } from '../../../../../@types/SportRadar.Soccer';

jest.mock('axios', () => ({
  async get() {
    return leagueLeadersResponse;
  },
}));
jest.mock('../../../../../utils/v2/Sportradar', () => ({
  async retrieveActualSeason() {
    return 'any_season';
  },
  formatSoccerPlayerStat(value) {
    return { id: value.id };
  },
}));

describe('sr-soccer-league-service tests', () => {
  test('Should return empty array when an wrong stat is passed on filterStatsByType', () => {
    const result = srSoccerLeague.filterStatsByType({
      stats: leagueLeadersResponse.data as SrStatsResponse,
      type: 'goalss',
      limit: 5,
    });

    expect(result).toEqual([]);
  });
  test('Should format the values correctly for goal stats on filterStatsByType', () => {
    const result = srSoccerLeague.filterStatsByType({
      stats: leagueLeadersResponse.data as SrStatsResponse,
      type: 'goals',
      limit: 5,
    });

    expect(result).toEqual([
      { id: 'sr:player:340519' },
      { id: 'sr:player:777341' },
      { id: 'sr:player:34705' },
      { id: 'sr:player:220833' },
      { id: 'sr:player:599686' },
    ]);
  });
  test('Should format the values correctly for assists stats filterStatsByType', () => {
    const result = srSoccerLeague.filterStatsByType({
      stats: leagueLeadersResponse.data as SrStatsResponse,
      type: 'assists',
      limit: 5,
    });
    expect(result).toEqual([
      { id: 'sr:player:31417' },
      { id: 'sr:player:330691' },
      { id: 'sr:player:777341' },
      { id: 'sr:player:991451' },
      { id: 'sr:player:1748469' },
    ]);
  });
  test('Should format the values correctly for yellowCards stats filterStatsByType', () => {
    const result = srSoccerLeague.filterStatsByType({
      stats: leagueLeadersResponse.data as SrStatsResponse,
      type: 'yellow_cards',
      limit: 5,
    });
    expect(result).toEqual([
      { id: 'sr:player:42109' },
      { id: 'sr:player:82576' },
      { id: 'sr:player:128376' },
      { id: 'sr:player:165577' },
      { id: 'sr:player:329069' },
    ]);
  });
  test('Should format the values correctly for redCards stats filterStatsByType', () => {
    const result = srSoccerLeague.filterStatsByType({
      stats: leagueLeadersResponse.data as SrStatsResponse,
      type: 'red_cards',
      limit: 5,
    });
    expect(result).toEqual([
      { id: 'sr:player:341145' },
      { id: 'sr:player:881740' },
      { id: 'sr:player:918750' },
      { id: 'sr:player:1127335' },
      { id: 'sr:player:1718545' },
    ]);
  });

  test('Should call the correct functions when receive the sr data on getLeagueStatistics', async () => {
    const filterSpy = jest.spyOn(srSoccerLeague, 'filterStatsByType');
    await srSoccerLeague.getLeagueStatistics('brasileirao-serie-a', 5);
    expect(filterSpy).toHaveBeenCalledWith({
      stats: leagueLeadersResponse.data,
      type: 'goals',
      limit: 5,
    });
    expect(filterSpy).toHaveBeenCalledWith({
      stats: leagueLeadersResponse.data,
      type: 'assists',
      limit: 5,
    });
    expect(filterSpy).toHaveBeenCalledWith({
      stats: leagueLeadersResponse.data,
      type: 'yellow_cards',
      limit: 5,
    });
    expect(filterSpy).toHaveBeenCalledWith({
      stats: leagueLeadersResponse.data,
      type: 'red_cards',
      limit: 5,
    });
  });
  test('Should call the correct functions when receive the sr data on getLeagueStatistics', async () => {
    const result = await srSoccerLeague.getLeagueStatistics(
      'brasileirao-serie-a',
      5
    );
    expect(result).toEqual({
      goals: [
        { id: 'sr:player:340519' },
        { id: 'sr:player:777341' },
        { id: 'sr:player:34705' },
        { id: 'sr:player:220833' },
        { id: 'sr:player:599686' },
      ],
      assists: [
        { id: 'sr:player:31417' },
        { id: 'sr:player:330691' },
        { id: 'sr:player:777341' },
        { id: 'sr:player:991451' },
        { id: 'sr:player:1748469' },
      ],
      yellowCards: [
        { id: 'sr:player:42109' },
        { id: 'sr:player:82576' },
        { id: 'sr:player:128376' },
        { id: 'sr:player:165577' },
        { id: 'sr:player:329069' },
      ],
      redCards: [
        { id: 'sr:player:341145' },
        { id: 'sr:player:881740' },
        { id: 'sr:player:918750' },
        { id: 'sr:player:1127335' },
        { id: 'sr:player:1718545' },
      ],
    });
  });
  test('Should call the correct functions when receive the sr data on getLeagueStatistics', async () => {
    const leagueStatsSpy = jest.spyOn(srSoccerLeague, 'getLeagueStatistics');
    srSoccerLeague.getLeagueStatistics('invalid_slug', 5);
    await expect(leagueStatsSpy).rejects.toThrowError(
      createHttpError(404, 'slug not found')
    );
  });

  test('Should format the values correctly for goal stats on getLeagueDetailedStatistics', async () => {
    const result = await srSoccerLeague.getLeagueDetailedStatistics(
      'brasileirao-serie-a',
      'goals',
      20
    );

    expect(result).toEqual({
      goals: [
        { id: 'sr:player:340519' },
        { id: 'sr:player:777341' },
        { id: 'sr:player:34705' },
        { id: 'sr:player:220833' },
        { id: 'sr:player:599686' },
        { id: 'sr:player:884176' },
        { id: 'sr:player:973619' },
        { id: 'sr:player:1104729' },
        { id: 'sr:player:1340924' },
        { id: 'sr:player:1411617' },
        { id: 'sr:player:1748419' },
        { id: 'sr:player:2065673' },
        { id: 'sr:player:17639' },
        { id: 'sr:player:18082' },
        { id: 'sr:player:32891' },
        { id: 'sr:player:47548' },
        { id: 'sr:player:54412' },
        { id: 'sr:player:76526' },
        { id: 'sr:player:115183' },
        { id: 'sr:player:147464' },
      ],
    });
  });
  test('Should format the values correctly for assists stats getLeagueDetailedStatistics', async () => {
    const result = await srSoccerLeague.getLeagueDetailedStatistics(
      'brasileirao-serie-a',
      'assists',
      20
    );
    expect(result).toEqual({
      assists: [
        { id: 'sr:player:31417' },
        { id: 'sr:player:330691' },
        { id: 'sr:player:777341' },
        { id: 'sr:player:991451' },
        { id: 'sr:player:1748469' },
        { id: 'sr:player:1953370' },
        { id: 'sr:player:1992549' },
        { id: 'sr:player:12634' },
        { id: 'sr:player:33119' },
        { id: 'sr:player:34147' },
        { id: 'sr:player:34705' },
        { id: 'sr:player:90862' },
        { id: 'sr:player:165577' },
        { id: 'sr:player:252857' },
        { id: 'sr:player:311394' },
        { id: 'sr:player:331397' },
        { id: 'sr:player:333275' },
        { id: 'sr:player:333587' },
        { id: 'sr:player:336841' },
        { id: 'sr:player:358530' },
      ],
    });
  });
  test('Should format the values correctly for yellowCards stats getLeagueDetailedStatistics', async () => {
    const result = await srSoccerLeague.getLeagueDetailedStatistics(
      'brasileirao-serie-a',
      'yellowCards',
      20
    );
    expect(result).toEqual({
      yellowCards: [
        { id: 'sr:player:42109' },
        { id: 'sr:player:82576' },
        { id: 'sr:player:128376' },
        { id: 'sr:player:165577' },
        { id: 'sr:player:329069' },
        { id: 'sr:player:358554' },
        { id: 'sr:player:578420' },
        { id: 'sr:player:599684' },
        { id: 'sr:player:815608' },
        { id: 'sr:player:855460' },
        { id: 'sr:player:996543' },
        { id: 'sr:player:1340924' },
        { id: 'sr:player:1610136' },
        { id: 'sr:player:1710501' },
        { id: 'sr:player:1719726' },
        { id: 'sr:player:1720942' },
        { id: 'sr:player:1763875' },
        { id: 'sr:player:1771200' },
        { id: 'sr:player:1829842' },
        { id: 'sr:player:2014161' },
      ],
    });
  });
  test('Should format the values correctly for redCards stats getLeagueDetailedStatistics', async () => {
    const result = await srSoccerLeague.getLeagueDetailedStatistics(
      'brasileirao-serie-a',
      'redCards',
      20
    );
    expect(result).toEqual({
      redCards: [
        { id: 'sr:player:341145' },
        { id: 'sr:player:881740' },
        { id: 'sr:player:918750' },
        { id: 'sr:player:1127335' },
        { id: 'sr:player:1718545' },
      ],
    });
  });
  test('Should call the correct functions when receive the sr data on getLeagueDetailedStatistics', async () => {
    const leagueStatsSpy = jest.spyOn(
      srSoccerLeague,
      'getLeagueDetailedStatistics'
    );
    srSoccerLeague.getLeagueDetailedStatistics(
      'invalid_slug',
      'invalid_section',
      20
    );
    await expect(leagueStatsSpy).rejects.toThrowError(
      createHttpError(404, 'slug not found')
    );
  });
});
